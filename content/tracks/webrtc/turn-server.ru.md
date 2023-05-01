---
title: TURN сервер
description: Карманная книга по WebRTC
toc: true
authors:
tags: 
categories:
series:
featuredImage:
date: "2022-07-02"
lastmod: "2022-06-28"
draft: false
weight: 7
---

Для работы большинства приложений WebRTC необходим сервер для ретрансляции трафика между узлами, поскольку прямой сокет часто невозможен между клиентами (если только они не находятся в одной локальной сети). Обычный способ решить эту проблему — использовать TURN-сервер (Traversal Using Relay NAT), который представляет собой протокол ретрансляции сетевого трафика.

В настоящее время существует несколько вариантов TURN-серверов, доступных в Интернете, как в виде самостоятельных приложений (например, проект COTURN с открытым исходным кодом), так и в виде облачных сервисов.

Если у вас есть доступный онлайн TURN-сервер, то все, что вам нужно - это правильная `RTCConfiguration` для вашего клиентского приложения. Следующий фрагмент кода иллюстрирует пример конфигурации для `RTCPeerConnection`, где TURN-сервер hostname `my-turn-server.mycompany`.com работает на порту `19403`.

Объект конфигурации также поддерживает свойства username и credentials для защиты доступа к серверу. Они необходимы при подключении к TURN-серверу.

```javascript
const iceConfiguration = {
    iceServers: [
        {
            urls: 'turn:my-turn-server.mycompany.com:19403',
            username: 'optional-username',
            credentials: 'auth-token'
        }
    ]
}

const peerConnection = new RTCPeerConnection(iceConfiguration);
```
