---
title: 26. Развертывание виртуальной лаборатории EVE-NG в домашних условиях
description: Развертывание виртуальной лаборатории EVE-NG в домашних условиях
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-05-16"
lastmod: "2022-05-16"
featuredImage:
draft: false
id: 1048762
weight: 26
---

## Создание нашей лаборатории

Мы собираемся продолжить настройку нашей эмулируемой сети с помощью EVE-NG, а затем, надеюсь, развернуть несколько устройств и начать думать о том, как мы можем автоматизировать настройку этих устройств. В [День 25](../day25) мы рассказали об установке EVE-NG на нашу машину с помощью VMware Workstation.

### Установка клиента EVE-NG

Существует также клиентский пакет, который позволяет нам выбирать, какое приложение используется при подключении к устройствам по SSH. Он также настроит [Wireshark](https://ru.wikipedia.org/wiki/Wireshark) для захвата пакетов между ссылками. Вы можете установить клиентский пакет для своей ОС (Windows, macOS, Linux).

[EVE-NG Client Download](https://www.eve-ng.net/index.php/download/)

![](../images/Day26_Networking1.ru.png?v1)

Подсказка: если вы используете Linux в качестве клиента, то есть этот [клиентский пакет](https://github.com/SmartFinn/eve-ng-integration).

Установка проста: next, next и я бы посоветовал оставить значения по умолчанию.

### Получение сетевых образов

Этот шаг непростой, я просмотрел несколько видеороликов, на которые я дам ссылки в конце, которые ссылаются на некоторые ресурсы и загрузки для нашего маршрутизатора и переключают изображения, рассказывая нам, как и куда их загрузить.

Важно отметить, что я использую все в образовательных целях. Я бы предложил загрузить официальные образы от сетевых поставщиков.

[Blog & Links to YouTube videos](https://loopedback.com/2019/11/15/setting-up-eve-ng-for-ccna-ccnp-ccie-level-studies-includes-multiple-vendor-node-support-an-absolutely-amazing-study-tool-to-check-out-asap/)

[How To Add Cisco VIRL vIOS image to Eve-ng](https://networkhunt.com/how-to-add-cisco-virl-vios-image-to-eve-ng/)

В целом шаги здесь немного сложны и могли бы быть намного проще, но приведенные выше блоги и видео показывают процесс добавления изображений в вашу коробку EVE-NG.

Я использовал [FileZilla](https://filezilla-project.org/) для передачи [qcow2](https://ru.wikipedia.org/wiki/Qcow2) на виртуальную машину через SFTP.

Для нашей лаборатории нам нужны Cisco vIOS L2 (коммутаторы) и Cisco vIOS (маршрутизатор).

### Создаем лабораторию

Внутри веб-интерфейса EVE-NG мы собираемся создать нашу новую топологию сети. У нас будет четыре коммутатора и один маршрутизатор, который будет нашим шлюзом во внешние сети.

| Node    | IP Address   |
| ------- | ------------ |
| Router  | 10.10.88.110 |
| Switch1 | 10.10.88.111 |
| Switch2 | 10.10.88.112 |
| Switch3 | 10.10.88.113 |
| Switch4 | 10.10.88.114 |

#### Добавление наших узлов в EVE-NG

Когда вы впервые войдете в EVE-NG, вы увидите экран, как показано ниже, мы хотим начать с создания нашей первой лаборатории.

![](../images/Day26_Networking2.ru.png?v1)

Дайте вашей лаборатории имя, а остальные поля являются необязательными.

![](../images/Day26_Networking3.ru.png?v1)

Затем увидим пустой экран, чтобы начать создание вашей сети. Щелкните правой кнопкой мыши на своем холсте и выберите 'add node'.

Далее появляется длинный список опций. Если вы следовали вышеизложенному, у вас будут два синих, показанных ниже, а остальные будут серыми и недоступными для выбора.

![](../images/Day26_Networking4.ru.png?v1)

Мы хотим добавить следующее в нашу лабораторию:

- 1 x Cisco vIOS Router
- 4 x Cisco vIOS Switch

![](../images/Day26_Networking5.ru.png?v1)

#### Соединяем наши ноды

Теперь нам нужно добавить возможность подключения между нашими маршрутизаторами и коммутаторами. Мы можем сделать это довольно легко, наведя курсор на устройство и увидев значок подключения, как показано ниже, а затем подключив его к устройству, к которому мы хотим подключиться.

![](../images/Day26_Networking6.ru.png?v1)
Когда вы закончите подключение своей среды, вы также можете добавить способ определения физических границ или местоположений с помощью прямоугольников или кругов, которые также можно найти в контекстном меню. Вы также можете добавить текст, который полезен, когда мы хотим определить наши имена или IP-адреса в наших лабораториях.

Я пошел дальше и сделал свою лабораторию такой, как показано ниже.
![](../images/Day26_Networking7.ru.png?v1)

You will also notice that the lab above is all powered off, we can start our lab by selecting everything and right-clicking and selecting start selected.

![](../images/Day26_Networking8.ru.png?v1)
Как только мы запустим нашу лабораторию, вы сможете подключаться к консоли на каждом устройстве, и вы заметите, что на этом этапе они довольно тупые без настройки. Мы можем добавить некоторую конфигурацию к каждому узлу, скопировав или создав свою собственную в каждом терминале.

Я оставлю свою конфигурацию в сетевой папке репозитория для справки.

| Node    | Configuration            |
| ------- | ------------------------ |
| Router  | [R1](../networking/R1)   |
| Switch1 | [SW1](../networking/SW1) |
| Switch2 | [SW2](../networking/SW2) |
| Switch3 | [SW3](../networking/SW3) |
| Switch4 | [SW4](../networking/SW4) |

## Ресурсы

- [Free Course: Introduction to EVE-NG](https://www.youtube.com/watch?v=g6B0f_E0NMg)
- [EVE-NG - Creating your first lab](https://www.youtube.com/watch?v=9dPWARirtK8)
- [3 Necessary Skills for Network Automation](https://www.youtube.com/watch?v=KhiJ7Fu9kKA&list=WL&index=122&t=89s)
- [Computer Networking full course](https://www.youtube.com/watch?v=IPvYjXCsTg8)
- [Practical Networking](http://www.practicalnetworking.net/)
- [Python Network Automation](https://www.youtube.com/watch?v=xKPzLplPECU&list=WL&index=126)

Большинство примеров, которые я использую здесь, поскольку я не сетевой инженер, взяты из этой обширной книги, которая не является бесплатной, но я использую некоторые примеры оттуда, чтобы помочь понять автоматизацию сети.

- [Hands-On Enterprise Automation with Python (Book)](https://www.packtpub.com/product/hands-on-enterprise-automation-with-python/9781788998512)
