---
title: 78. Hands-On Monitoring Tools
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
id: 1049056
weight: 78
---
## Инструменты мониторинга своими руками

На последнем занятии я говорил об общей картине мониторинга и рассмотрел Nagios, для этого было две причины. Во-первых, это программное обеспечение, о котором я много слышал на протяжении многих лет, поэтому хотел узнать немного больше о его возможностях. 

Сегодня я буду изучать Prometheus, я все больше и больше вижу Prometheus в ландшафте Cloud-Native, но его также можно использовать для присмотра за физическими ресурсами вне Kubernetes и тому подобного. 

### Prometheus - мониторинг практически всего

Прежде всего, Prometheus - это Open-Source, который может помочь вам контролировать контейнеры и системы на базе микросервисов, а также физические, виртуальные и другие сервисы. За Prometheus стоит большое сообщество. 

Prometheus имеет большой набор [интеграций и экспортеров](https://prometheus.io/docs/instrumenting/exporters/) Ключевым моментом является экспорт существующих метрик в метрики Prometheus. Кроме того, он также поддерживает несколько языков программирования. 

Подход Pull - Если вы работаете с тысячами микросервисов или систем и сервисов, то метод push - это метод, при котором сервис, как правило, обращается к системе мониторинга. При этом возникают некоторые проблемы, связанные с переполнением сети, высокой производительностью процессора и единой точкой отказа. Метод Pull дает нам гораздо лучший опыт, когда Prometheus будет получать данные из конечной точки метрики на каждом сервисе. 

И снова мы видим YAML для конфигурации Prometheus. 

![](../images/Day78_Monitoring7.ru.png?v1)

Позже вы увидите, как это выглядит при развертывании в Kubernetes, в частности, у нас есть **PushGateway**, который получает наши метрики от наших заданий/экспортеров. 

У нас есть **AlertManager**, который рассылает оповещения, и именно здесь мы можем интегрироваться во внешние сервисы, такие как электронная почта, slack и другие инструменты. 

Затем у нас есть сервер Prometheus, который управляет получением этих метрик из PushGateway, а затем отправляет эти оповещения в AlertManager. Сервер Prometheus также хранит данные на локальном диске. Хотя можно использовать решения для удаленного хранения данных. 

У нас также есть PromQL - язык, используемый для взаимодействия с метриками, который можно увидеть позже в веб-интерфейсе Prometheus, но позже в этом разделе вы также увидите, как он используется в инструментах визуализации данных, таких как Grafana. 

### Способы развертывания Prometheus 

Существуют различные способы установки Prometheus, [Download Section](https://prometheus.io/download/) Также доступны образы Docker. 

`docker run --name prometheus -d -p 127.0.0.1:9090:9090 prom/prometheus`.

Но мы сосредоточим наши усилия на развертывании в Kubernetes. У которого также есть несколько вариантов. 

- Создание конфигурационных YAML-файлов 
- Использование оператора (менеджер всех компонентов prometheus)
- Использование диаграммы helm для развертывания оператора 

### Развертывание в Kubernetes 

Для этой быстрой и простой установки мы снова будем использовать наш локальный кластер minikube. Как и в предыдущих случаях с minikube, мы будем использовать helm для развертывания диаграммы Prometheus helm. 

`helm repo add prometheus-community https://prometheus-community.github.io/helm-charts`. 

![](../images/Day78_Monitoring1.ru.png?v1)

Как видно из вышеприведенного, мы также выполнили обновление репо helm, теперь мы готовы развернуть Prometheus в нашей среде minikube с помощью команды `helm install stable prometheus-community/prometheus`. 

![](../images/Day78_Monitoring2.ru.png?v1)

Через пару минут вы увидите, что появилось несколько новых подкастов, для этого демо я развернул их в пространство имен по умолчанию, обычно я бы развернул их в собственное пространство имен. 

![](../images/Day78_Monitoring3.ru.png?v1)

После запуска всех подсистем мы также можем посмотреть на все развернутые аспекты Prometheus. 

![](../images/Day78_Monitoring4.ru.png?v1)

Теперь, чтобы получить доступ к пользовательскому интерфейсу сервера Prometheus, мы можем использовать следующую команду для проброса портов. 

```
export POD_NAME=$(kubectl get pods --namespace default -l "app=prometheus,component=server" -o jsonpath="{.items[0].metadata.name}")
  kubectl --namespace default port-forward $POD_NAME 9090
```
Когда мы впервые открываем наш браузер на http://localhost:9090, мы видим следующий очень пустой экран. 

![](../images/Day78_Monitoring5.ru.png?v1)

Поскольку мы развернули наш кластер Kubernetes, мы будем автоматически получать метрики из нашего Kubernetes API, поэтому мы можем использовать некоторые PromQL, чтобы убедиться, что мы получаем метрики `container_cpu_usage_seconds_total`.

![](../images/Day78_Monitoring6.ru.png?v1)

Коротко об изучении PromQL и применении его на практике. Это очень похоже на то, о чем я говорил ранее: получение метрик - это здорово, как и мониторинг, но вы должны знать, что вы отслеживаете и почему, и что вы не отслеживаете и почему! 

Я хочу вернуться к Prometheus, но пока я думаю, что нам нужно подумать об управлении журналами и визуализации данных, чтобы позже вернуться к Prometheus.

## Ресурсы 

- [The Importance of Monitoring in DevOps](https://www.devopsonline.co.uk/the-importance-of-monitoring-in-devops/)
- [Understanding Continuous Monitoring in DevOps?](https://medium.com/devopscurry/understanding-continuous-monitoring-in-devops-f6695b004e3b) 
- [DevOps Monitoring Tools](https://www.youtube.com/watch?v=Zu53QQuYqJ0) 
- [Top 5 - DevOps Monitoring Tools](https://www.youtube.com/watch?v=4t71iv_9t_4)
- [How Prometheus Monitoring works](https://www.youtube.com/watch?v=h4Sl21AKiDg) 
- [Introduction to Prometheus monitoring](https://www.youtube.com/watch?v=5o37CGlNLr8)
- [Promql cheat sheet with examples](https://www.containiq.com/post/promql-cheat-sheet-with-examples)
