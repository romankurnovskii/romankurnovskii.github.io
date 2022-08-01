---
title: Hands-On Backup & Recovery - Day 87
published: false
description: "90DaysOfDevOps - Hands-On Backup & Recovery"
tags: "devops, 90daysofdevops, learning"
cover_image: null
canonical_url: null
id: 1048717
---
## Резервное копирование и восстановление своими руками

На прошлом занятии мы рассмотрели [Kopia](https://kopia.io/) - инструмент резервного копирования с открытым исходным кодом, который мы использовали для переноса важных данных на локальный NAS и в облачное хранилище объектов. 

В этом разделе я хочу погрузиться в мир резервного копирования Kubernetes. Это платформа, которую мы рассматривали в [The Big Picture: Kubernetes](.../day49) ранее в этой задаче. 

Мы снова будем использовать наш кластер minikube, но на этот раз мы воспользуемся некоторыми из доступных аддонов. 

### Настройка кластера Kubernetes 

Для настройки нашего кластера minikube мы выполним команду `minikube start --addons volumesnapshots,csi-hostpath-driver --apiserver-port=6443 --container-runtime=containerd -p 90daysofdevops --kubernetes-version=1.21.2`. Вы заметите, что мы используем `volumesnapshots` и `csi-hostpath-driver`, поскольку мы будем использовать их для создания резервных копий. 

На данном этапе я знаю, что мы еще не развернули Kasten K10, но мы хотим выполнить следующую команду, когда ваш кластер будет запущен, но мы хотим аннотировать класс volumesnapshotclass, чтобы Kasten K10 мог использовать его. 

```
kubectl annotate volumesnapshotclass csi-hostpath-snapclass \
    k10.kasten.io/is-snapshot-class=true
```

Мы также собираемся изменить класс хранения по умолчанию со стандартного класса хранения по умолчанию на класс хранения csi-hostpath, используя следующее. 

```
kubectl patch storageclass csi-hostpath-sc -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class": "true"}}}}''

kubectl patch storageclass standard -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class": "false"}}}}''
```

![](../images/Day87_Data1.png?v1)

### Развертывание Kasten K10 

Добавьте репозиторий Kasten Helm

`helm repo add kasten https://charts.kasten.io/`.

Мы могли бы использовать `arkade kasten install k10` и здесь, но для целей демонстрации мы выполним следующие шаги. [Подробнее](https://blog.kasten.io/kasten-k10-goes-to-the-arkade)

Создайте пространство имен и разверните K10, обратите внимание, что это займет около 5 минут 

`helm install k10 kasten/k10 --namespace=kasten-io --set auth.tokenAuth.enabled=true --set injectKanisterSidecar.enabled=true --set-string injectKanisterSidecar.namespaceSelector.matchLabels.k10/injectKanisterSidecar=true --create-namespace`.

![](../images/Day87_Data1.png?v1)

Вы можете наблюдать за появлением стручков, выполнив следующую команду.

`kubectl get pods -n kasten-io -w`

![](../images/Day87_Data3.png?v1)

Чтобы получить доступ к приборной панели K10, откройте новый терминал и выполните следующую команду

`kubectl --namespace kasten-io port-forward service/gateway 8080:8000`.

Приборная панель Kasten будет доступна по адресу: `http://127.0.0.1:8080/k10/#/`

![](../images/Day87_Data4.png?v1)

Для аутентификации на приборной панели нам теперь нужен токен, который мы можем получить с помощью следующих команд. 

```
TOKEN_NAME=$(kubectl get secret --namespace kasten-io|grep k10-k10-token | cut -d " " -f 1)
TOKEN=$(kubectl get secret --namespace kasten-io $TOKEN_NAME -o jsonpath="{.data.token}" | base64 --decode)

echo "Значение токена: "
echo $TOKEN
```

![](../images/Day87_Data5.png?v1)

Теперь мы берем этот токен и вводим его в браузер, после чего вам будет предложено ввести email и название компании. 

![](../images/Day87_Data6.png?v1)

Затем мы получаем доступ к приборной панели Kasten K10. 

![](../images/Day87_Data7.png?v1)

### Развертывание нашего stateful-приложения 

Используйте stateful-приложение, которое мы использовали в разделе Kubernetes. 

![](../images/Day55_Kubernetes1.png?v1)

Вы можете найти конфигурационный файл YAML для этого приложения здесь[pacman-stateful-demo.yaml](../Kubernetes/pacman-stateful-demo.yaml)

![](../images/Day87_Data8.png?v1)

Мы можем использовать `kubectl get all -n pacman`, чтобы проверить появление наших стручков. 

![](../images/Day87_Data9.png?v1)

В новом терминале мы можем перенаправить фронт-енд pacman. `kubectl port-forward svc/pacman 9090:80 -n pacman`.

Откройте другую вкладку в браузере на http://localhost:9090/ 

![](../images/Day87_Data10.png?v1)

Найдите время, чтобы записать несколько высоких результатов в базе данных backend MongoDB. 

![](../images/Day87_Data11.png?v1)

### Защитите наши высокие баллы 

Теперь у нас есть некоторые важные данные в нашей базе данных, и мы не хотим их потерять. Мы можем использовать Kasten K10 для защиты всего приложения. 

Если мы вернемся на вкладку приборной панели Kasten K10, вы увидите, что количество наших приложений увеличилось с 1 до 2 с добавлением нашего приложения pacman в наш кластер Kubernetes. 

![](../images/Day87_Data12.png?v1)

Если вы нажмете на карточку Applications, вы увидите автоматически обнаруженные приложения в нашем кластере. 

![](../images/Day87_Data13.png?v1)

В Kasten K10 у нас есть возможность использовать моментальные снимки на основе хранилища, а также экспортировать наши копии в объектные хранилища. 

Для целей демонстрации мы создадим ручной снимок хранилища в нашем кластере, а затем добавим некоторые неавторизованные данные в наши высокие результаты, чтобы имитировать случайную ошибку или нет? 

Для начала мы можем воспользоваться приведенным ниже вариантом ручного снапшота. 

![](../images/Day87_Data14.png?v1)

Для демонстрации я собираюсь оставить все по умолчанию 

![](../images/Day87_Data15.png?v1)

Вернувшись на приборную панель, вы получите отчет о состоянии задания в процессе его выполнения, а после завершения оно должно выглядеть так же успешно, как и здесь. 

![](../images/Day87_Data16.png?v1)

### Сценарий неудачи 

Теперь мы можем внести фатальное изменение в наши критически важные данные, просто добавив предписывающее плохое изменение в наше приложение. 

Как вы можете видеть ниже, у нас есть два входа, которые мы, вероятно, не хотим видеть в нашей производственной критически важной базе данных.

![](../images/Day87_Data17.png?v1)

### Восстановление данных

Очевидно, что это простая демонстрация и в некотором роде нереалистичная, хотя вы видели, как легко можно сбросить базы данных? 

Теперь мы хотим, чтобы список высоких результатов выглядел немного чище и как он выглядел до того, как были допущены ошибки. 

Вернемся в карточку приложений и на вкладку pacman, теперь у нас есть 1 точка восстановления, которую мы можем использовать для восстановления. 

![](../images/Day87_Data18.png?v1)

При выборе восстановления вы можете увидеть все связанные снимки и экспорты для этого приложения. 

![](../images/Day87_Data19.png?v1)

Выберите восстановление и появится боковое окно, мы сохраним настройки по умолчанию и нажмем восстановить. 

![](../images/Day87_Data20.png?v1)

Подтвердите, что вы действительно хотите, чтобы это произошло. 

![](../images/Day87_Data21.png?v1)

Затем вы можете вернуться на приборную панель и просмотреть ход восстановления. Вы должны увидеть что-то вроде этого. 

![](../images/Day87_Data22.png?v1)

Но более важно то, как выглядит наш список High-Score в нашем критически важном приложении. Вам придется снова запустить проброс портов в pacman, как мы уже рассказывали ранее. 

![](../images/Day87_Data23.png?v1)

Это очень простая демонстрация, которая лишь слегка касается того, чего Kasten K10 может достичь в области резервного копирования. В будущем я буду создавать более подробные видеоматериалы по некоторым из этих областей. Мы также будем использовать Kasten K10 для освещения некоторых других важных областей управления данными, когда речь идет об аварийном восстановлении и мобильности ваших данных. 

Далее мы рассмотрим согласованность приложений. 


## Ресурсы 

- [Kubernetes Backup and Restore made easy!](https://www.youtube.com/watch?v=01qcYSck1c4&t=217s)
- [Kubernetes Backups, Upgrades, Migrations - with Velero](https://www.youtube.com/watch?v=zybLTQER0yY)
- [7 Database Paradigms](https://www.youtube.com/watch?v=W2Z7fbCLSTw&t=520s)
- [Disaster Recovery vs. Backup: What's the difference?](https://www.youtube.com/watch?v=07EHsPuKXc0)
- [Veeam Portability & Cloud Mobility](https://www.youtube.com/watch?v=hDBlTdzE6Us&t=3s)
