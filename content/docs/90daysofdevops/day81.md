---
title: '#90DaysOfDevOps - Fluentd & FluentBit - Day 81'
published: false
description: 90DaysOfDevOps - Fluentd & FluentBit
tags: "devops, 90daysofdevops, learning"
cover_image: null
canonical_url: null
id: 1048716
---
## Fluentd и FluentBit

Еще одним коллектором данных, который я хотел изучить в рамках раздела о наблюдаемости, был [Fluentd](https://docs.fluentd.org/). Это унифицированный уровень протоколирования с открытым исходным кодом. 

Fluentd имеет четыре ключевые особенности, которые делают его подходящим для создания чистых, надежных конвейеров протоколирования:

Унифицированное протоколирование с JSON: Fluentd старается структурировать данные в виде JSON, насколько это возможно. Это позволяет Fluentd унифицировать все аспекты обработки данных журналов: сбор, фильтрацию, буферизацию и вывод журналов из нескольких источников и мест назначения. Последующая обработка данных намного проще с JSON, так как он имеет достаточную структуру, чтобы быть доступным без принуждения к жестким схемам.

Подключаемая архитектура: Fluentd имеет гибкую систему плагинов, которая позволяет сообществу расширять его функциональность. Более 300 плагинов, созданных сообществом, соединяют десятки источников данных с десятками выходных данных, манипулируя данными по мере необходимости. Используя плагины, вы можете сразу же повысить эффективность использования ваших журналов.

Требуется минимум ресурсов: Коллектор данных должен быть легким, чтобы его можно было легко запустить на загруженной машине. Fluentd написан на комбинации C и Ruby и требует минимальных системных ресурсов. Ванильный экземпляр работает на 30-40 МБ памяти и может обрабатывать 13 000 событий/секунду/ядро.

Встроенная надежность: Потеря данных никогда не должна произойти. Fluentd поддерживает буферизацию на основе памяти и файлов для предотвращения потери данных между узлами. Fluentd также поддерживает надежное восстановление после отказа и может быть настроен на высокую доступность.

[Установка Fluentd](https://docs.fluentd.org/quickstart#step-1-installing-fluentd)

### Как приложения записывают данные в журнал? 

- Запись в файлы. Файлы `.log` (трудно анализировать без инструмента и в масштабе)
- Вести журнал непосредственно в базу данных (каждое приложение должно быть настроено на правильный формат)
- Сторонние приложения (NodeJS, NGINX, PostgreSQL).

Вот почему нам нужен единый уровень логирования. 

FluentD позволяет использовать 3 типа данных, показанных выше, и дает нам возможность собирать, обрабатывать и отправлять их по назначению, это может быть отправка логов в базы данных Elastic, MongoDB, Kafka, например. 

Любые данные, любой источник данных может быть отправлен в FluentD, и эти данные могут быть отправлены в любое место назначения. FluentD не привязан к какому-либо конкретному источнику или месту назначения. 

Изучая Fluentd, я постоянно натыкался на Fluent bit как еще один вариант, и похоже, что если вы хотите развернуть инструмент протоколирования в среде Kubernetes, то Fluent bit даст вам такую возможность, хотя Fluentd также может быть развернут как на контейнерах, так и на серверах. 

[Fluentd & Fluent Bit](https://docs.fluentbit.io/manual/about/fluentd-and-fluent-bit)

Fluentd и Fluentbit будут использовать входные плагины для преобразования данных в формат Fluent Bit, затем у нас есть выходные плагины для любой цели вывода, например, elasticsearch. 

Мы также можем использовать теги и соответствия между конфигурациями. 

Я не вижу веских причин для использования Fluentd, и кажется, что Fluent Bit - лучший способ начать работу. Хотя в некоторых архитектурах они могут использоваться вместе. 

### Fluent Bit в Kubernetes 

Fluent Bit в Kubernetes развертывается как DaemonSet, что означает, что он будет запущен на каждом узле кластера. Каждая капсула Fluent Bit на каждом узле будет читать каждый контейнер на этом узле и собирать все доступные журналы. Он также будет собирать метаданные с сервера Kubernetes API Server.  

Аннотации Kubernetes можно использовать в конфигурационном YAML наших приложений. 


Прежде всего, мы можем развернуть приложение из репозитория fluent helm. `helm repo add fluent https://fluent.github.io/helm-charts`, а затем установить с помощью команды `helm install fluent-bit fluent/fluent-bit`. 

![](../images/Day81_Monitoring1.png?v1)

В моем кластере я также запускаю prometheus в моем пространстве имен по умолчанию (в тестовых целях), нам нужно убедиться, что наш fluent-bit pod запущен и работает. Мы можем сделать это с помощью команды `kubectl get all | grep fluent`, которая покажет нам наш запущенный pod, сервис и набор демонов, о которых мы говорили ранее. 

![](../images/Day81_Monitoring2.png?v1)

Чтобы Fluentbit знал, откуда получать журналы, у нас есть конфигурационный файл, в этом развертывании Fluentbit на Kubernetes у нас есть configmap, который напоминает конфигурационный файл. 

![](../images/Day81_Monitoring3.png?v1)

Эта ConfigMap будет выглядеть примерно так:
```
Name:         fluent-bit
Namespace:    default
Labels:       app.kubernetes.io/instance=fluent-bit
              app.kubernetes.io/managed-by=Helm
              app.kubernetes.io/name=fluent-bit
              app.kubernetes.io/version=1.8.14
              helm.sh/chart=fluent-bit-0.19.21
Annotations:  meta.helm.sh/release-name: fluent-bit
              meta.helm.sh/release-namespace: default

Data
====
custom_parsers.conf:
----
[PARSER]
    Name docker_no_time
    Format json
    Time_Keep Off
    Time_Key time
    Time_Format %Y-%m-%dT%H:%M:%S.%L

fluent-bit.conf:
----
[SERVICE]
    Daemon Off
    Flush 1
    Log_Level info
    Parsers_File parsers.conf
    Parsers_File custom_parsers.conf
    HTTP_Server On
    HTTP_Listen 0.0.0.0
    HTTP_Port 2020
    Health_Check On

[INPUT]
    Name tail
    Path /var/log/containers/*.log
    multiline.parser docker, cri
    Tag kube.*
    Mem_Buf_Limit 5MB
    Skip_Long_Lines On

[INPUT]
    Name systemd
    Tag host.*
    Systemd_Filter _SYSTEMD_UNIT=kubelet.service
    Read_From_Tail On

[FILTER]
    Name kubernetes
    Match kube.*
    Merge_Log On
    Keep_Log Off
    K8S-Logging.Parser On
    K8S-Logging.Exclude On

[OUTPUT]
    Name es
    Match kube.*
    Host elasticsearch-master
    Logstash_Format On
    Retry_Limit False

[OUTPUT]
    Name es
    Match host.*
    Host elasticsearch-master
    Logstash_Format On
    Logstash_Prefix node
    Retry_Limit False

Events:  <none>
```

Теперь мы можем перенаправить наш pod на наш localhost, чтобы убедиться, что у нас есть соединение. Сначала узнайте имя вашего pod с помощью `kubectl get pods | grep fluent` и затем используйте `kubectl port-forward fluent-bit-8kvl4 2020:2020` откройте веб-браузер на http://localhost:2020/. 

![](../images/Day81_Monitoring4.png?v1)

Я также нашел эту замечательную статью на Medium, в которой рассказывается о [Fluent Bit](https://medium.com/kubernetes-tutorials/exporting-kubernetes-logs-to-elasticsearch-using-fluent-bit-758e8de606af).

## Ресурсы 

- [Understanding Logging: Containers & Microservices](https://www.youtube.com/watch?v=MMVdkzeQ848)
- [The Importance of Monitoring in DevOps](https://www.devopsonline.co.uk/the-importance-of-monitoring-in-devops/)
- [Understanding Continuous Monitoring in DevOps?](https://medium.com/devopscurry/understanding-continuous-monitoring-in-devops-f6695b004e3b) 
- [DevOps Monitoring Tools](https://www.youtube.com/watch?v=Zu53QQuYqJ0) 
- [Top 5 - DevOps Monitoring Tools](https://www.youtube.com/watch?v=4t71iv_9t_4)
- [How Prometheus Monitoring works](https://www.youtube.com/watch?v=h4Sl21AKiDg) 
- [Introduction to Prometheus monitoring](https://www.youtube.com/watch?v=5o37CGlNLr8)
- [Promql cheat sheet with examples](https://www.containiq.com/post/promql-cheat-sheet-with-examples)
- [Log Management for DevOps | Manage application, server, and cloud logs with Site24x7](https://www.youtube.com/watch?v=J0csO_Shsj0)
- [Log Management what DevOps need to know](https://devops.com/log-management-what-devops-teams-need-to-know/)
- [What is ELK Stack?](https://www.youtube.com/watch?v=4X0WLg05ASw)
- [Fluentd simply explained](https://www.youtube.com/watch?v=5ofsNyHZwWE&t=14s) 
- [ Fluent Bit explained | Fluent Bit vs Fluentd ](https://www.youtube.com/watch?v=B2IS-XS-cc0))
