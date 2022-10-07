---
title: 80. ELK Stack
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
id: 1048746
weight: 80
---
## ELK Stack  

На этом занятии мы немного подробнее рассмотрим некоторые из упомянутых нами опций. 

### ELK Stack 

ELK Stack - это комбинация трех отдельных инструментов: 

- [Elasticsearch](https://www.elastic.co/what-is/elasticsearch) - это распределенный, бесплатный и открытый поисковый и аналитический механизм для всех типов данных, включая текстовые, числовые, геопространственные, структурированные и неструктурированные.

- [Logstash](https://www.elastic.co/logstash/) - свободный и открытый конвейер обработки данных на стороне сервера, который получает данные из множества источников, преобразует их, а затем отправляет в ваш любимый "тайник". 

- [Kibana](https://www.elastic.co/kibana/) - это бесплатный и открытый пользовательский интерфейс, позволяющий визуализировать данные Elasticsearch и перемещаться по стеку Elastic Stack. Делайте все, что угодно: от отслеживания загрузки запросов до понимания того, как запросы проходят через ваши приложения. 

Стек ELK позволяет нам надежно и безопасно получать данные из любого источника, в любом формате, затем искать, анализировать и визуализировать их в режиме реального времени.

В дополнение к вышеперечисленным компонентам вы также можете увидеть Beats - легковесные агенты, которые устанавливаются на пограничных узлах для сбора различных типов данных для передачи в стек.


- Журналы: Определяются журналы сервера, которые необходимо проанализировать.

- Logstash: Собирает журналы и данные о событиях. Он даже анализирует и преобразует данные.

- ElasticSearch: Преобразованные данные из Logstash хранятся, ищутся и индексируются.

- Kibana использует БД Elasticsearch для изучения, визуализации и обмена данными

![](../images/Day80_Monitoring8.png?v1)

[Изображение взято с сайта Guru99](https://www.guru99.com/elk-stack-tutorial.html)

Хороший ресурс, объясняющий это [The Complete Guide to the ELK Stack](https://logz.io/learn/complete-guide-elk-stack/)

С добавлением битов стек ELK теперь также известен как Elastic Stack. 

Для практического скрипта существует множество мест, где можно развернуть Elastic Stack, но мы будем использовать docker compose для локального развертывания в нашей системе. 

[Start the Elastic Stack with Docker Compose](https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-stack-docker.html#get-started-docker-tls)

![](../images/Day80_Monitoring1.png?v1)

Оригинальные файлы и руководство, которые я использовал, вы найдете здесь [ deviantony/docker-elk](https://github.com/deviantony/docker-elk)

Теперь мы можем запустить `docker-compose up -d`, при первом запуске потребуется вытащить изображения. 

![](../images/Day80_Monitoring2.png?v1)

Если вы следите за этим репозиторием или за тем, который использовал я, у вас будет пароль "changeme" или в моем репозитории пароль "90DaysOfDevOps". Имя пользователя - "elastic".

Через несколько минут мы можем перейти на сайт http://localhost:5601/, который является нашим сервером Kibana / Docker-контейнером.

![](../images/Day80_Monitoring3.png?v1)

Ваш начальный главный экран будет выглядеть примерно так. 

![](../images/Day80_Monitoring4.png?v1)

В разделе "Get started by adding integrations" есть пункт "try sample data", нажмите на него, и мы сможем добавить одну из показанных ниже интеграций. 

![](../images/Day80_Monitoring5.png?v1)

Я собираюсь выбрать "Sample web logs", но это действительно для того, чтобы получить представление о том, какие наборы данных можно получить в стеке ELK. 

Когда вы выбрали "Добавить данные", требуется некоторое время, чтобы заполнить некоторые из этих данных, а затем у вас появляется опция "Просмотр данных" и список доступных способов просмотра этих данных в выпадающем списке. 

![](../images/Day80_Monitoring6.png?v1)

Как указано в представлении приборной панели: 

**Образцы данных журналов**

*Эта приборная панель содержит образцы данных, с которыми вы можете поиграть. Вы можете просматривать их, искать и взаимодействовать с визуализациями. Для получения дополнительной информации о Kibana ознакомьтесь с нашей документацией.*

![](../images/Day80_Monitoring7.png?v1)

Здесь используется Kibana для визуализации данных, которые были добавлены в ElasticSearch через Logstash. Это не единственный вариант, но я лично хотел развернуть и посмотреть на это. 

В какой-то момент мы рассмотрим Grafana, и вы увидите некоторые сходства в визуализации данных между ними, вы также видели Prometheus. 

Ключевой момент, который я уловил между Elastic Stack и Prometheus + Grafana, заключается в том, что Elastic Stack или ELK Stack сосредоточен на журналах, а Prometheus - на метриках. 

Я читал эту статью от MetricFire [Prometheus vs. ELK](https://www.metricfire.com/blog/prometheus-vs-elk/), чтобы лучше понять различные предложения.

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
- [Fluentd simply explained](https://www.youtube.com/watch?v=5ofsNyHZwWE&t=14s
