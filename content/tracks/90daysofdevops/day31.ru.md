---
title: 31. Microsoft Azure Среда выполнения приложений
description: Microsoft Azure Среда выполнения приложений
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-05-21"
lastMod: "2022-05-21"
featuredImage:
draft: false
id: 1049040
weight: 31
todo: сделать линк как появится статься - Инфраструктура как код
---

## Среда выполнения приложений

Вслед за вчерашним обзором основ моделей безопасности в Microsoft Azure, сегодня мы собираемся изучить различные службы вычислений, доступные нам в Azure.

### Параметры службы доступности

Этот раздел мне близок, учитывая мою роль в управлении данными. Как и в случае с локальной средой, очень важно обеспечить доступность ваших служб.

- Высокая доступность (Защита в пределах региона)
- Аварийное восстановление (Защита между регионами)
- Резервное копирование (Восстановление с момента времени)

Microsoft развертывает несколько регионов в пределах геополитических границ.

Две концепции Azure для доступности услуг.

Наборы доступности (виртуальных машин)  — обеспечивают отказоустойчивость в центре обработки данных.

Зоны доступности — обеспечивают отказоустойчивость между центрами обработки данных в пределах региона.

### Виртуальные машины

- Предоставляет виртуальные машины различных серий и размеров с различными возможностями (иногда огромными) [Размеры виртуальных машин в Azure](https://docs.microsoft.com/ru-ru/azure/virtual-machines/sizes)
- Существует множество различных вариантов и фокусов для виртуальных машин, от высокопроизводительных, с малой задержкой до виртуальных машин с большим объемом памяти.
- У нас также есть расширяемый тип ВМ, который можно найти в серии B. Это отлично подходит для рабочих нагрузок, где у вас могут быть низкие требования к ЦП по большей части, но требуется, чтобы, возможно, один раз в месяц требовалась всплеск производительности.
- Виртуальные машины размещаются в виртуальной сети, которая может обеспечить подключение к любой сети.
- Поддержка гостевых ОС Windows и Linux.
- Существуют также ядра, настроенные для Azure, если речь идет о конкретных дистрибутивах Linux. [Ядра, настроенные Azure](https://docs.microsoft.com/ru-ru/azure/virtual-machines/linux/endorsed-distros#azure-tuned-kernels)

### Шаблоны

В Microsoft Azure шаблоны исполнений можно конфигурировать с помощью JSON.

Существует несколько различных порталов и консолей управления, которые мы можем использовать для создания наших ресурсов. Предпочтительнее будет через шаблоны JSON.

Идемпотентные развертывания в инкрементном или полном режиме — т.е. повторяемое желаемое состояние.

Существует большой выбор шаблонов, которые могут экспортировать развернутые определения ресурсов. Мне нравится думать об этой функции шаблонов как о чем-то вроде AWS CloudFormation или, возможно, о Terraform для мультиоблачного варианта. Подробнее о Terraform мы расскажем в разделе «Инфраструктура как код».

### Масштабирование

Автоматическое масштабирование — это крупная функция общедоступного облака, позволяющая сократить ресурсы, которые вы не используете, или активировать, когда они вам нужны.

В Azure у нас есть так называемые масштабируемые наборы виртуальных машин (VMSS) для IaaS. Это позволяет автоматически создавать и масштабировать изображение золотого стандарта на основе расписаний и показателей.

Это идеально подходит для обновления окон, чтобы вы могли обновлять свои образы и развертывать их с наименьшими последствиями.

В другие службы, такие как службы приложений Azure, встроено автоматическое масштабирование.

### Контейнеры

Мы не рассмотрели контейнеры как пример использования и то, что и как они могут и должны быть необходимы в нашем учебном путешествии по DevOps, но мы должны упомянуть, что у Azure есть некоторые конкретные службы, ориентированные на контейнеры, которые следует упомянуть.

[Служба Azure Kubernetes](https://azure.microsoft.com/ru-ru/services/kubernetes-service/) (AKS) (Azure Kubernetes Service) — предоставляет управляемое решение Kubernetes.

Экземпляры контейнеров Azure — контейнеры как услуга с посекундной оплатой. Запустите образ и интегрируйте его с вашей виртуальной сетью, не нуждаясь в оркестровке контейнеров.

Service Fabric — имеет множество возможностей, но включает оркестрацию для экземпляров контейнеров.

Azure также имеет реестр контейнеров, который предоставляет частный реестр для образов Docker, диаграмм [Helm](https://helm.sh/), [артефактов Open Container Initiative (OCI)](https://docs.microsoft.com/ru-ru/azure/container-registry/container-registry-oci-artifacts) и образов. Подробнее об этом снова, когда мы дойдем до раздела контейнеров.

Многие службы контейнеров действительно могут использовать контейнеры "под капотом", но это абстрагируется от наших требований к управлению.

### Службы приложений

- Службы приложений Azure предоставляют решение для размещения приложений, которое обеспечивает простой способ установки служб.
- Автоматическое развертывание и масштабирование.
- Поддерживает решения на базе Windows и Linux.
- Службы выполняются в плане службы приложений, который имеет тип и размер.
- Количество различных сервисов, включая веб-приложения, приложения API и мобильные приложения.
- Поддержка слотов развертывания для надежного тестирования и продвижения.

### Бессерверные вычисления

Цель бессерверных вычислений заключается в том, что мы платим только за время выполнения функции, и нам не нужно постоянно запускать виртуальные машины или приложения PaaS. Мы просто запускаем нашу функцию, когда она нам нужна, а затем она исчезает.

Функции Azure — предоставляет бессерверный код. Если мы вернемся к нашему первому взгляду на общедоступное облако, вы вспомните уровень абстракции управления, с бессерверными функциями вы будете управлять только кодом.

У меня есть план, ориентированный на события в больших масштабах, когда я получу здесь немного практики, надеюсь, позже.

Обеспечивает входную и выходную привязку ко многим Azure и сторонним службам.

Поддерживает множество различных языков программирования. (C#, NodeJS, Python, PHP, bash, Golang, Rust или любой исполняемый файл)

Сетка событий Azure позволяет запускать логику из служб и событий.

Приложение Azure Logic обеспечивает графический рабочий процесс и интеграцию.

Мы также можем рассмотреть пакетную службу Azure, которая может выполнять крупномасштабные задания на узлах Windows и Linux с согласованным управлением и планированием.

## Ресурсы

- [Hybrid Cloud and MultiCloud](https://www.youtube.com/watch?v=qkj5W98Xdvw)
- [Microsoft Azure Fundamentals](https://www.youtube.com/watch?v=NKEFWyqJ5XA&list=WL&index=130&t=12s)
- [Google Cloud Digital Leader Certification Course](https://www.youtube.com/watch?v=UGRDM86MBIQ&list=WL&index=131&t=10s)
- [AWS Basics for Beginners - Full Course](https://www.youtube.com/watch?v=ulprqHHWlng&t=5352s)
