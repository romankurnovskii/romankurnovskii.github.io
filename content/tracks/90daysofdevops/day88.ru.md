---
title: 88. Резервное копирование, ориентированное на приложения
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-07-01"
lastMod: "2022-07-01"
featuredImage:
draft: false
id: 1048749
weight: 88
---
## Резервное копирование, ориентированное на приложения

В [День 85](.../day85) мы уже потратили некоторое время на обсуждение служб данных или приложений с интенсивным использованием данных, таких как базы данных. Для этих служб данных мы должны подумать о том, как управлять согласованностью, особенно когда речь идет о согласованности приложений.

В этой статье мы рассмотрим требования к защите данных приложения в последовательной манере.

Для этого мы выберем инструмент [Kanister](https://kanister.io/)

![](../images/Day88_Data1.ru.png?v1)

### Представляем Kanister

Kanister - это проект с открытым исходным кодом от Kasten, который позволяет нам управлять (резервное копирование и восстановление) данными приложений на Kubernetes. Вы можете развернуть Kanister как helm-приложение в своем кластере Kubernetes.

Kanister использует пользовательские ресурсы Kubernetes, основные пользовательские ресурсы, которые устанавливаются при развертывании Kanister, следующие

- `Profile` - целевое место для хранения резервных копий и восстановления. Чаще всего это объектное хранилище.
- `Blueprint` - шаги, которые необходимо предпринять для резервного копирования и восстановления базы данных, должны быть сохранены в Blueprint.
- `ActionSet` - действия по перемещению целевой резервной копии в наш профиль, а также действия по восстановлению.

### Описание выполнения

Прежде чем приступить к работе, мы должны рассмотреть рабочий процесс, который использует Kanister для защиты данных приложения. Во-первых, наш контроллер развертывается с помощью helm в нашем кластере Kubernetes, Kanister живет в своем собственном пространстве имен. Мы берем наш Blueprint, для которого существует множество поддерживаемых сообществом Blueprint, мы рассмотрим это более подробно в ближайшее время. Затем у нас есть рабочая нагрузка базы данных.

![](../images/Day88_Data2.ru.png?v1)

Затем мы создаем наш ActionSet.

![](../images/Day88_Data3.ru.png?v1)

ActionSet позволяет нам запускать действия, определенные в чертеже, против конкретной службы данных.

![](../images/Day88_Data4.ru.png?v1)

ActionSet, в свою очередь, использует функции Kanister (KubeExec, KubeTask, Resource Lifecycle) и выталкивает нашу резервную копию в целевое хранилище (Profile).

![](../images/Day88_Data5.ru.png?v1)

Если действие выполнено/не выполнено, соответствующий статус обновляется в наборе действий.

![](../images/Day88_Data6.ru.png?v1)

### Развертывание Kanister

И снова мы будем использовать кластер minikube для создания резервной копии приложения. Если у вас он все еще работает с предыдущей сессии, то мы можем продолжать использовать его.

На момент написания статьи мы имеем версию образа `0.75.0`. С помощью следующей команды helm мы установим kanister в наш кластер Kubernetes.

`helm install kanister --namespace kanister kanister/kanister-operator --set image.tag=0.75.0 --create-namespace`.

![](../images/Day88_Data7.ru.png?v1)

Мы можем использовать `kubectl get pods -n kanister`, чтобы убедиться, что pod запущен и работает, а также проверить, что наши пользовательские определения ресурсов теперь доступны (Если вы только установили Kanister, то вы увидите выделенные 3)
![](../images/Day88_Data8.ru.png?v1)

### Развертывание базы данных

Развертывание mysql через helm:

```
APP_NAME=my-production-app
kubectl create ns ${APP_NAME}
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install mysql-store bitnami/mysql --set primary.persistence.size=1Gi,volumePermissions.enabled=true --namespace=${APP_NAME}
kubectl get pods -n ${APP_NAME} -w
```

![](../images/Day88_Data9.ru.png?v1)

Заполните базу данных mysql исходными данными, выполнив следующее:

```
MYSQL_ROOT_PASSWORD=$(kubectl get secret --namespace ${APP_NAME} mysql-store -o jsonpath="{.data.mysql-root-password}" | base64 --decode)
MYSQL_HOST=mysql-store.${APP_NAME}.svc.cluster.local
MYSQL_EXEC="mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD} -DmyImportantData -t"
echo MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
```

### Создание MySQL CLIENT

Мы запустим другой образ контейнера, который будет выступать в качестве нашего клиента

```
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image docker.io/bitnami/mysql:latest --command -- bash
```

```
Примечание: если у вас уже запущен существующий mysql client pod, удалите его с помощью команды

kubectl delete pod -n ${APP_NAME} mysql-client
```

### Добавление данных в MySQL

```
echo "create database myImportantData;" | mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD}
MYSQL_EXEC="mysql -h ${MYSQL_HOST} -u root --password=${MYSQL_ROOT_PASSWORD} -DmyImportantData -t"
echo "drop table Accounts" | ${MYSQL_EXEC}
echo "create table if not exists Accounts(name text, balance integer); insert into Accounts values('nick', 0);" |  ${MYSQL_EXEC}
echo "insert into Accounts values('albert', 112);" | ${MYSQL_EXEC}
echo "insert into Accounts values('alfred', 358);" | ${MYSQL_EXEC}
echo "insert into Accounts values('beatrice', 1321);" | ${MYSQL_EXEC}
echo "insert into Accounts values('bartholomew', 34);" | ${MYSQL_EXEC}
echo "insert into Accounts values('edward', 5589);" | ${MYSQL_EXEC}
echo "insert into Accounts values('edwin', 144);" | ${MYSQL_EXEC}
echo "insert into Accounts values('edwina', 233);" | ${MYSQL_EXEC}
echo "insert into Accounts values('rastapopoulos', 377);" | ${MYSQL_EXEC}
echo "select * from Accounts;" |  ${MYSQL_EXEC}
exit
```

Вы должны увидеть некоторые данные, как показано ниже.

![](../images/Day88_Data10.ru.png?v1)

### Создание профиля Kanister

Kanister предоставляет CLI, `kanctl` и другую утилиту `kando`, которая используется для взаимодействия с провайдером объектного хранилища из blueprint и обе эти утилиты.

[CLI Download](https://docs.kanister.io/tooling.html#tooling)

Я пошел и создал AWS S3 Bucket, который мы будем использовать в качестве цели профиля и места восстановления. Я буду использовать переменные окружения, чтобы иметь возможность показать вам команды, которые я выполняю с помощью `kanctl` для создания нашего профиля kanister.

`kanctl create profile s3compliant --access-key $ACCESS_KEY --secret-key $SECRET_KEY --bucket $BUCKET --region eu-west-2 --namespace my-production-app`.

![](../images/Day88_Data11.ru.png?v1)

### Время чертежа

Не волнуйтесь, вам не нужно создавать свой собственный с нуля, если только ваш сервис данных не указан в [Примерах Канистера](https://github.com/kanisterio/kanister/tree/master/examples), но, конечно, вклад сообщества - это то, как этот проект становится известным.

Мы будем использовать следующую схему.

```
apiVersion: cr.kanister.io/v1alpha1
kind: Blueprint
metadata:
  name: mysql-blueprint
actions:
  backup:
    outputArtifacts:
      mysqlCloudDump:
        keyValue:
          s3path: "{{ .Phases.dumpToObjectStore.Output.s3path }}"
    phases:
    - func: KubeTask
      name: dumpToObjectStore
      objects:
        mysqlSecret:
          kind: Secret
          name: '{{ index .Object.metadata.labels "app.kubernetes.io/instance" }}'
          namespace: '{{ .StatefulSet.Namespace }}'
      args:
        image: ghcr.io/kanisterio/mysql-sidecar:0.75.0
        namespace: "{{ .StatefulSet.Namespace }}"
        command:
        - bash
        - -o
        - errexit
        - -o
        - pipefail
        - -c
        - |
          s3_path="/mysql-backups/{{ .StatefulSet.Namespace }}/{{ index .Object.metadata.labels "app.kubernetes.io/instance" }}/{{ toDate "2006-01-02T15:04:05.999999999Z07:00" .Time  | date "2006-01-02T15-04-05" }}/dump.sql.gz"
          root_password="{{ index .Phases.dumpToObjectStore.Secrets.mysqlSecret.Data "mysql-root-password" | toString }}"
          mysqldump --column-statistics=0 -u root --password=${root_password} -h {{ index .Object.metadata.labels "app.kubernetes.io/instance" }} --single-transaction --all-databases | gzip - | kando location push --profile '{{ toJson .Profile }}' --path ${s3_path} -
          kando output s3path ${s3_path}
  restore:
    inputArtifactNames:
    - mysqlCloudDump
    phases:
    - func: KubeTask
      name: restoreFromBlobStore
      objects:
        mysqlSecret:
          kind: Secret
          name: '{{ index .Object.metadata.labels "app.kubernetes.io/instance" }}'
          namespace: '{{ .StatefulSet.Namespace }}'
      args:
        image: ghcr.io/kanisterio/mysql-sidecar:0.75.0
        namespace: "{{ .StatefulSet.Namespace }}"
        command:
        - bash
        - -o
        - errexit
        - -o
        - pipefail
        - -c
        - |
          s3_path="{{ .ArtifactsIn.mysqlCloudDump.KeyValue.s3path }}"
          root_password="{{ index .Phases.restoreFromBlobStore.Secrets.mysqlSecret.Data "mysql-root-password" | toString }}"
          kando location pull --profile '{{ toJson .Profile }}' --path ${s3_path} - | gunzip | mysql -u root --password=${root_password} -h {{ index .Object.metadata.labels "app.kubernetes.io/instance" }}
  delete:
    inputArtifactNames:
    - mysqlCloudDump
    phases:
    - func: KubeTask
      name: deleteFromBlobStore
      args:
        image: ghcr.io/kanisterio/mysql-sidecar:0.75.0
        namespace: "{{ .Namespace.Name }}"
        command:
        - bash
        - -o
        - errexit
        - -o
        - pipefail
        - -c
        - |
          s3_path="{{ .ArtifactsIn.mysqlCloudDump.KeyValue.s3path }}"
          kando location delete --profile '{{ toJson .Profile }}' --path ${s3_path}
```

Чтобы добавить его, мы воспользуемся командой `kubectl create -f mysql-blueprint.yml -n kanister`.

![](../images/Day88_Data12.ru.png?v1)

### Создаем наш ActionSet и защищаем наше приложение

Теперь мы создадим резервную копию данных MySQL с помощью ActionSet, определяющего резервное копирование для этого приложения. Создайте ActionSet в том же пространстве имен, что и контроллер.

`kubectl get profiles.cr.kanister.io -n my-production-app` Эта команда покажет нам профиль, который мы ранее создали, здесь может быть настроено несколько профилей, поэтому мы можем захотеть использовать определенные профили для разных ActionSet'ов.

Затем мы создадим наш ActionSet следующей командой с помощью `kanctl`.

`kanctl create actionset --action backup --namespace kanister --blueprint mysql-blueprint --statefulset my-production-app/mysql-store --profile my-production-app/s3-profile-dc5zm --secrets mysql=my-production-app/mysql-store`.

Из приведенной выше команды видно, что мы определяем blueprint, который мы добавили в пространство имен, statefulset в нашем пространстве имен `my-production-app`, а также секреты для входа в приложение MySQL.

![](../images/Day88_Data13.ru.png?v1)

Проверьте состояние ActionSet, взяв имя ActionSet и используя эту команду `kubectl --namespace kanister describe actionset backup-qpnqv`.

Наконец, мы можем пойти и подтвердить, что теперь у нас есть данные в нашем ведре AWS S3.

![](../images/Day88_Data14.ru.png?v1)

### Восстановление

Нам нужно нанести некоторый ущерб, прежде чем мы сможем что-либо восстановить, мы можем сделать это, уронив нашу таблицу, возможно, это был несчастный случай, а возможно и нет.

Подключитесь к нашему MySQL pod.

```
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

Вы можете увидеть, что наша база данных importantdata находится там с помощью `echo "SHOW DATABASES;" | ${MYSQL_EXEC}`.

Затем для удаления мы запустили `echo "DROP DATABASE myImportantData;" | ${MYSQL_EXEC}`.

И подтвердили, что все исчезло, сделав несколько попыток показать нашу базу данных.

![](../images/Day88_Data15.ru.png?v1)

Теперь мы можем использовать Kanister, чтобы вернуть наши важные данные в рабочее состояние, используя команду `kubectl get actionset -n kanister`, чтобы узнать имя нашего ActionSet, который мы взяли ранее. Затем мы создадим ActionSet восстановления для восстановления наших данных, используя `kanctl create actionset -n kanister --action restore --from "backup-qpnqv"`.

![](../images/Day88_Data16.ru.png?v1)

Мы можем подтвердить, что наши данные восстановлены, используя следующую команду для подключения к нашей базе данных.

```
APP_NAME=my-production-app
kubectl run mysql-client --rm --env APP_NS=${APP_NAME} --env MYSQL_EXEC="${MYSQL_EXEC}" --env MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD} --env MYSQL_HOST=${MYSQL_HOST} --namespace ${APP_NAME} --tty -i --restart='Never' --image  docker.io/bitnami/mysql:latest --command -- bash
```

Теперь мы находимся внутри клиента MySQL, мы можем выполнить команду `echo "SHOW DATABASES;" | ${MYSQL_EXEC}` и мы увидим, что база данных восстановлена. Мы также можем выполнить команду `echo "select * from Accounts;" | ${MYSQL_EXEC}` для проверки содержимого базы данных, и наши важные данные будут восстановлены.

![](../images/Day88_Data17.ru.png?v1)

В следующем посте мы рассмотрим аварийное восстановление в Kubernetes.

## Ресурсы

- [Kanister Overview - An extensible open-source framework for app-lvl data management on Kubernetes](https://www.youtube.com/watch?v=wFD42Zpbfts)
- [Application Level Data Operations on Kubernetes](https://community.cncf.io/events/details/cncf-cncf-online-programs-presents-cncf-live-webinar-kanister-application-level-data-operations-on-kubernetes/)
- [Kubernetes Backup and Restore made easy!](https://www.youtube.com/watch?v=01qcYSck1c4&t=217s)
- [Kubernetes Backups, Upgrades, Migrations - with Velero](https://www.youtube.com/watch?v=zybLTQER0yY)
- [7 Database Paradigms](https://www.youtube.com/watch?v=W2Z7fbCLSTw&t=520s)
- [Disaster Recovery vs. Backup: What's the difference?](https://www.youtube.com/watch?v=07EHsPuKXc0)
- [Veeam Portability & Cloud Mobility](https://www.youtube.com/watch?v=hDBlTdzE6Us&t=3s)
