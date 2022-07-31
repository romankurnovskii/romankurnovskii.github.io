---
title: Одноранговые соединения
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
weight: 4
---

## Начало работы с одноранговыми соединениями

Одноранговые соединения – часть спецификации WebRTC, которая занимается связью двух приложений на различных компьютерах для коммуникации через P2P-протокол. Коммуникация между узлами может быть видео-, аудио- или произвольными двоичными данными (для клиентов, поддерживающих RTCDataChannel API). Чтобы выяснить, как два узла могут быть соединены, оба клиента должны предоставить конфигурацию ICE-Server. Это или STUN, или TURN-сервер, и их роль – обеспечить ICE-кандидатов для каждого клиента, который затем передается на удаленный узел. Эта «передача» ICE-кандидатов обычно называется «сигналинг».

## Сигналинг

Спецификации WebRTC включают API для коммуникации с ICE-сервером (ICE =Internet Connectivity Establishment, установление интерактивного подключения), но компонент сигналинга не является частью этого сервера. Сигналинг необходим, чтобы два узла могли использовать один и тот же способ подключения. Обычно это можно решить через обычный Web API на базе HTTP (то есть службу REST или другой механизм RPC), где веб-приложения могут передавать необходимую информацию до того, как будет установлено соединение.
Следующий фрагмент кода показывает, как эту придуманную службу сигналинга можно использовать для отправки и получения асинхронных сообщений. Мы будем использовать по необходимости этот прием в оставшихся примерах в этом гайде.

```javascript
// Set up an asynchronous communication channel that will be
// used during the peer connection setup
const signalingChannel = new SignalingChannel(remoteClientId);
signalingChannel.addEventListener('message', message => {
    // New message from remote client received
});

// Send an asynchronous message to the remote client
signalingChannel.send('Hello!');
```

Сигналинг может быть реализован разными способами, и спецификация WebRTC не отдает предпочтений какому-то определенному варианту.

## Инициирование одноранговых соединений
Каждое одноранговое соединение управляется объектом RTCPeerConnection. Конструктор для этого класса берет в качестве параметра одиночный объект RTCConfiguration. Этот объект определяет, как одноранговое соединение устанавливается, и какую информацию должен содержать об используемых ICE-серверах.

После того, как RTCPeerConnection установлено, мы должны задать SDP-запрос/ответ, в зависимости от того, являемся мы вызывающим или принимающим узлом. После того, как SDP-запрос/ответ создан, он должен быть отправлен на удаленный узел через другой канал. Передача SDP-объектов на удаленные узлы называется сигналингом и не рассматривается в WebRTC спецификации.

Для установки однорангового соединения с вызывающей стороны, мы создаем объект RTCPeerConnection, и затем вызываем createOffer() для создания объекта RTCSessionDescription. Описание этого сеанса устанавливается как локальное описание с использованием setLocalDescription(), и затем отправляется через наш сигналинг-канал получающей стороне. Мы также устанавливаем «прослушиватель» для нашего сигналинг-канала, чтобы знать, когда получающей стороной будет получен ответ на описание нашего запрошенного сеанса.

```javascript
async function makeCall() {
    const configuration = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}
    const peerConnection = new RTCPeerConnection(configuration);
    signalingChannel.addEventListener('message', async message => {
        if (message.answer) {
            const remoteDesc = new RTCSessionDescription(message.answer);
            await peerConnection.setRemoteDescription(remoteDesc);
        }
    });
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    signalingChannel.send({'offer': offer});
}
```

На получающей стороне мы ждем входящий запрос до того, как мы создали пример RTCPeerConnection. После этого мы устанавливаем полученный запрос, используя setRemoteDescription(). 

Далее, мы делаем запрос createAnswer() для создания ответа на полученный запрос. Этот ответ устанавливается как локальное описание через использование setLocalDescription() и затем отправляется набирающей стороне через наш сигналинг-сервер.

```javascript
const peerConnection = new RTCPeerConnection(configuration);
signalingChannel.addEventListener('message', async message => {
    if (message.offer) {
        peerConnection.setRemoteDescription(new RTCSessionDescription(message.offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        signalingChannel.send({'answer': answer});
    }
});
```

Как только два узла установили описания и локального, и удаленного сеансов, становятся доступны возможности удаленного узла. Это еще не означает, что соединение между узлами готово. Для работы необходимо собрать ICE-кандидатов на каждом узле и передать (по сигналинг-каналу) другому узлу.

## ICE-кандидаты

До того, как два узла смогут коммуницировать через WebRTC, им необходимо обменяться информацией о подключении. Так как условия сети могут отличаться в зависимости от ряда факторов, для обнаружения возможных кандидатов на соединение с узлом обычно используется внешний сервис. 
Этот сервис называется ICE и использует серверы STUN или TURN. STUN – это аббревиатура от Session Traversal for NAT, и обычно косвенно используется в большинстве WebRTC приложениях.

TURN (Traversal Using Relay NAT) более продвинутое решение, которое включает в себя протоколы STUN, и большинство коммерческих служб WebRTC используют TURN сервер для установки соединения между узлами. 

API WebRTC напрямую поддерживает как STUN, так и TURN, и объединяется под более полным термином ICE (Internet Connectivity Establishment  - «Установление подключения к Интернету»). При установке WebRTC-соединения мы обычно предоставляем один или несколько ICE-серверов в конфигурации для объекта RTCPeerConnection.

## Trickle ICE
После создания объекта RTCPeerConnection, исходный фреймворк использует предоставленные ICE-серверы для сбора кандидатов на установление соединения (кандидатов ICE). 

Событие icegatheringstatechange на RTCPeerConnection  передает информацию о том, в каком состоянии находится ICE-сбор (new, gathering или complete).
Несмотря на то, что для узла возможно просто дождаться, пока ICE-сбор будет завершен, обычно гораздо эффективнее использовать метод «trickle ice» и передавать каждого вновь обнаруженного ICE-кандидата удаленному узлу. Это значительно сократит время настройки однорангового соединения и позволит начать видео-звонок с меньшими задержками.

Для сбора ICE-кандидатов, просто добавьте «прослушиватель» в событие icecandidate. Объект RTCPeerConnectionIceEvent, созданный этим «прослушивателем», будет содержать свойство candidate, представляющее нового кандидата, которого нужно отправить удаленному узлу (см. Сигналинг)

```javascript
// Listen for local ICE candidates on the local RTCPeerConnection
peerConnection.addEventListener(‘icecandidate’, event => {
    if (event.candidate) {
        signalingChannel.send({‘new-ice-candidate’: event.candidate});
    }
});

// Listen for remote ICE candidates and add them to the local RTCPeerConnection
signalingChannel.addEventListener(‘message’, async message => {
    if (message.iceCandidate) {
        try {
            await peerConnection.addIceCandidate(message.iceCandidate);
        } catch € {
            console.error(‘Error adding received ice candidate’, e);
        }
    }
});
```

## Соединение установлено

После того, как ICE-кандидаты получены, нужно дождаться, пока состояние нашего однорангового соединения изменится на подключенное состояние. Чтобы отследить это, добавим «прослушиватель» в наш RTCPeerConnection, где можно просматривать изменения события connectionstatechange.