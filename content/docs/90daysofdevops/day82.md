---
title: 82. EFK Stack
description: 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-07-01"
lastmod: "2022-07-01"
featuredImage:
draft: false
id: 1049059
weight: 82
---
### EFK Stack

В предыдущем разделе мы говорили о ELK Stack, который использует Logstash в качестве сборщика логов в стеке, в EFK Stack мы меняем его на FluentD или FluentBit.

Наша задача в этом разделе - отслеживать журналы Kubernetes с помощью EFK. 

### Обзор EFK

Мы развернем следующее в нашем кластере Kubernetes. 

![](../images/Day82_Monitoring1.png?v1)

Стек EFK представляет собой набор из 3 программ, объединенных вместе, включая:

- Elasticsearch : NoSQL база данных используется для хранения данных и предоставляет интерфейс для поиска и журнал запросов.

- Fluentd : Fluentd - это сборщик данных с открытым исходным кодом для унифицированного уровня логирования. Fluentd позволяет унифицировать сбор и потребление данных для лучшего использования и понимания данных.

- Kibana : Интерфейс для управления и статистики журналов. Отвечает за чтение информации из elasticsearch .

### Развертывание EFK на Minikube 

Мы будем использовать наш надежный кластер minikube для развертывания нашего стека EFK. Давайте запустим кластер с помощью `minikube start` на нашей системе. Я использую ОС Windows с включенным WSL2. 

![](../images/Day82_Monitoring2.png?v1)

Я создал [efk-stack.yaml](.../Monitoring/.../.../Monitoring/EFK%20Stack/efk-stack.yaml), который содержит все необходимое для развертывания стека EFK в нашем кластере, используя команду `kubectl create -f efk-stack.yaml` мы видим, что все развернуто.

![](../images/Day82_Monitoring3.png?v1)

В зависимости от вашей системы и если вы уже выполняли эту процедуру и получили изображения, теперь вам нужно посмотреть, как стручки переходят в состояние готовности, прежде чем мы сможем двигаться дальше, вы можете проверить прогресс с помощью следующей команды. `kubectl get pods -n kube-logging -w` Это может занять несколько минут. 

![](../images/Day82_Monitoring4.png?v1)

Приведенная выше команда позволяет нам следить за ситуацией, но я люблю уточнять, все ли в порядке, выполняя следующую команду `kubectl get pods -n kube-logging`, чтобы убедиться, что все pods теперь работают. 

![](../images/Day82_Monitoring5.png?v1)

После того, как мы запустили все наши pods, и на этом этапе мы должны увидеть 
- 3 стручка, связанные с ElasticSearch
- 1 стручок, связанный с Fluentd
- 1 стручок, связанный с Kibana

Мы также можем использовать `kubectl get all -n kube-logging`, чтобы показать все в нашем пространстве имен, fluentd, как объяснялось ранее, развернут как набор демонов, kibana как развертывание и ElasticSearch как набор состояний. 

![](../images/Day82_Monitoring6.png?v1)

Теперь все наши pods работают, и мы можем ввести в новом терминале команду port-forward, чтобы мы могли получить доступ к нашей приборной панели kibana. Обратите внимание, что имя вашего pod будет отличаться от команды, которую мы видим здесь. `kubectl port-forward kibana-84cf7f59c-v2l8v 5601:5601 -n kube-logging`.

![](../images/Day82_Monitoring7.png?v1)

Теперь мы можем открыть браузер и перейти по этому адресу, http://localhost:5601 вас встретит либо экран, который вы видите ниже, либо вы можете увидеть экран с примерами данных, либо продолжить и настроить самостоятельно. В любом случае и непременно посмотрите на эти тестовые данные, это то, что мы рассмотрели при изучении стека ELK в предыдущей сессии. 

![](../images/Day82_Monitoring8.png?v1)

Далее нам нужно перейти на вкладку "discover" в левом меню и добавить "*" к нашему шаблону индекса. Перейдите к следующему шагу, нажав кнопку "Следующий шаг". 

![](../images/Day82_Monitoring9.png?v1)

На шаге 2 из 2 мы будем использовать опцию @timestamp из выпадающего списка, так как это позволит отфильтровать наши данные по времени. Когда вы нажмете кнопку создать шаблон, это может занять несколько секунд. 

![](../images/Day82_Monitoring10.png?v1)

Если через несколько секунд мы вернемся на вкладку "discover", вы должны увидеть данные, поступающие с вашего кластера Kubernetes. 

![](../images/Day82_Monitoring11.png?v1)

Теперь, когда у нас установлен и работает стек EFK и мы собираем журналы с нашего кластера Kubernetes через Fluentd, мы можем взглянуть на другие источники, которые мы можем выбрать. Если вы перейдете на главный экран, нажав на логотип Kibana в левом верхнем углу, вас встретит та же страница, которую мы видели при первом входе в систему. 

У нас есть возможность добавить APM, данные журнала, метрические данные и события безопасности из других плагинов или источников. 

![](../images/Day82_Monitoring12.png?v1)

Если мы выберем "Добавить данные журнала", то увидим ниже, что у нас есть большой выбор, откуда мы хотим получать наши журналы, вы можете увидеть, что там упоминается Logstash, который является частью стека ELK. 

![](../images/Day82_Monitoring13.png?v1)

Под данными метрик вы увидите, что можно добавить источники для Prometheus и многих других сервисов.  Переведено с помощью www.DeepL.com/Translator (бесплатная версия)

### APM (Мониторинг производительности приложений)

Также есть возможность собрать APM (мониторинг производительности приложений), который собирает подробные показатели производительности и ошибки изнутри вашего приложения. Он позволяет отслеживать производительность тысяч приложений в режиме реального времени. 

Я не буду здесь углубляться в APM, но вы можете узнать больше на [сайте Elastic](https://www.elastic.co/observability/application-performance-monitoring).


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

See you on [Day 83](../day83)

