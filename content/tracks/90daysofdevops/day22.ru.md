---
title: 22. Открытая сетевая модель OSI
description: 7 уровней модели OSI 
toc: true
authors:
tags: [devops]
categories:
series: 
date: "2022-05-12"
lastmod: "2022-05-12"
featuredImage:
draft: false
id: 1049037
weight: 22
---
## Модель OSI — 7 уровней

Общая цель сети как отрасли состоит в том, чтобы позволить двум хостам обмениваться данными. Если я хочу передать данные от одного хоста к другому хосту, мне нужно будет что-то подключить к этому хосту, перейти к другому хосту, подключить его к первому хосту.

Сеть позволяет нам автоматизировать это, позволяя хосту автоматически обмениваться данными по сети, и для этого эти хосты должны следовать набору правил.

Это ничем не отличается от любого другого языка. У английского есть набор правил, которым должны следовать два носителя английского языка. У испанского есть свой собственный набор правил.

Правила организации сети разделены на семь разных уровней, и эти уровни известны как модель OSI.
### Введение в модель OSI

Модель OSI (модель взаимодействия открытых систем)/(Open Systems Interconnection Model) — это структура, используемая для описания функций сетевой системы. Модель OSI характеризует вычислительные функции в виде универсального набора правил и требований для обеспечения функциональной совместимости между различными продуктами и программным обеспечением. В эталонной модели OSI обмен данными между вычислительной системой разделен на семь различных уровней абстракции: **физический, канальный, сетевой, транспортный, сеансовый, презентационный и прикладной** (**Physical, Data Link, Network, Transport, Session, Presentation, Application**).
![](../images/Day22_Networking1.png?v1)
### Физический
Уровень 1 в модели OSI, известный как физический, предполагает возможность передачи данных с одного хоста на другой с помощью средств, будь то физический кабель или мы также можем рассмотреть Wi-Fi на этом уровне. Мы также можем увидеть здесь более устаревшее оборудование вокруг концентраторов и повторителей для передачи данных с одного хоста на другой.
![](../images/Day22_Networking2.png?v1)
### Канал передачи данных
Уровень 2, канал передачи данных обеспечивает передачу данных от узла к узлу, где данные упакованы в кадры. Существует также уровень исправления ошибок, которые могли возникнуть на физическом уровне. Здесь мы также вводим или впервые видим MAC-адреса.

Здесь мы видим первое упоминание о коммутаторах, о которых мы рассказали в первый день нашей работы с сетью [День 21](../day21)
![](../images/Day22_Networking3.png?v1)
### Сеть
Вы, вероятно, слышали термин «коммутаторы уровня 3» или «коммутаторы уровня 2». В нашей модели OSI уровень 3. Цель сети — прямая(end to end) доставка, именно здесь мы видим наши IP-адреса, также упомянутые в обзоре первого дня.

Маршрутизаторы и хосты существуют на уровне 3, помните, что маршрутизатор — это возможность маршрутизации между несколькими сетями. Все, что имеет IP, может считаться уровнем 3.
![](../images/Day22_Networking4.png?v1)
Так зачем же нам нужны схемы адресации как на уровне 2, так и на уровне 3? (MAC-адреса и IP-адреса)

Если мы подумаем о передаче данных с одного хоста на другой, каждый хост имеет IP-адрес, но между ними есть несколько коммутаторов и маршрутизаторов. Каждое из устройств имеет этот MAC-адрес уровня 2.

MAC-адрес уровня 2 будет передаваться только от хоста к коммутатору/маршрутизатору, он ориентирован на переходы, где IP-адреса уровня 3 будут оставаться с этим пакетом данных, пока он не достигнет своего конечного хоста. (Концы с концами)

IP-адреса — уровень 3 = сквозная доставка

MAC-адреса — уровень 2 = доставка между переходами

Теперь есть сетевой протокол, который мы рассмотрим, но не сегодня, называемый ARP (протокол разрешения адресов), который связывает наши адреса Layer3 и Layer2.
### Транспорт
Предоставление услуг между услугами, уровень 4 предназначен для различения потоков данных. Точно так же, как уровни 3 и 2 имели свои схемы адресации, на уровне 4 у нас есть порты.

![](../images/Day22_Networking5.png?v1)

### Сессия, Презентация, Приложение
Различие между слоями 5, 6, 7 немного расплывчато

Стоит взглянуть на [IP-модель TCP](https://www.geeksforgeeks.org/tcp-ip-model/), чтобы получить более свежее представление.

Давайте теперь попробуем объяснить, что на самом деле происходит, когда хосты общаются друг с другом, используя этот сетевой стек. На одном хосте есть приложение, которое будет генерировать данные, предназначенные для отправки на другой хост.

Исходный хост будет проходить так называемый процесс инкапсуляции. Эти данные будут сначала отправлены на уровень 4.

Уровень 4 добавит заголовок к этим данным, что может облегчить задачу уровня 4, которая заключается в доставке услуг. Это будет порт, использующий либо TCP, либо UDP. Он также будет включать исходный порт и порт назначения.

Это также может быть известно как сегмент (данные и порт).

Этот сегмент будет передан по стеку osi на уровень 3, сетевой уровень, сетевой уровень добавит к этим данным еще один заголовок.
Этот заголовок будет способствовать цели уровня 3, который является сквозной доставкой, что означает, что в этом заголовке у вас будет IP-адрес источника и IP-адрес назначения, заголовок плюс данные также могут называться пакетом.

Затем уровень 3 возьмет этот пакет и передаст его уровню 2, уровень 2 еще раз добавит еще один заголовок к этим данным для достижения цели уровня 2 по доставке переходов, что означает, что этот заголовок будет включать в себя MAC-адреса источника и получателя.
Это называется кадром, когда у вас есть заголовок и данные уровня 2.

Затем этот кадр преобразуется в единицы и нули и отправляется по физическому кабелю уровня 1 или Wi-Fi.

![](../images/Day22_Networking6.png?v1)
Выше я упомянул названия для каждого уровня заголовка и данных, но решил нарисовать и это.

![](../images/Day22_Networking7.png?v1)

Очевидно, что приложение, отправляющее данные, отправляется куда-то, поэтому получение происходит в обратном порядке, чтобы получить эту резервную копию в стеке и на принимающем хосте.
![](../images/Day22_Networking8.png?v1)

## Ресурсы 

- [Computer Networking full course](https://www.youtube.com/watch?v=IPvYjXCsTg8)
- [Practical Networking](http://www.practicalnetworking.net/)
