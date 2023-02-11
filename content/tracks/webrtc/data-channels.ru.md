---
title: Каналы данных
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
weight: 6
---
Стандарт WebRTC также охватывает API для отправки произвольных данных через RTCPeerConnection. Это происходит через запрос createDataChannel() для объекта RTCPeerConnection, который возвращает объект RTCDataChannel.

const peerConnection = new RTCPeerConnection(configuration);
const dataChannel = peerConnection.createDataChannel();

Удаленный узел может получать каналы данных через отслеживание события datachannel в объекте RTCPeerConnection. Полученное событие имеет тип RTCDataChannelEvent и содержит свойство channel, которое представляет RTCDataChannel между двумя узлами.

```
const peerConnection = new RTCPeerConnection(configuration);
peerConnection.addEventListener('datachannel', event => {
    const dataChannel = event.channel;
});
```

## События Open и Close

Прежде чем канал данных можно будет использовать для отправки данных, клиент должен дождаться его открытия. Это происходит через прослушивание события open. Точно так же существует событие close, когда одна из сторон закрывает канал.

```javascript
const messageBox = document.querySelector('#messageBox');
const sendButton = document.querySelector('#sendButton');
const peerConnection = new RTCPeerConnection(configuration);
const dataChannel = peerConnection.createDataChannel();

// Enable textarea and button when opened
dataChannel.addEventListener('open', event => {
    messageBox.disabled = false;
    messageBox.focus();
    sendButton.disabled = false;
});

// Disable input when closed
dataChannel.addEventListener('close', event => {
    messageBox.disabled = false;
    sendButton.disabled = false;
});
```

## Сообщения

Отправка сообщения в RTCDataChannel выполняется через вызов функции send() с данными, которые мы хотим отправить. Параметр data для этой функции может быть типа String, Blob, ArrayBuffer или ArrayBufferView.

```javascript
const messageBox = document.querySelector('#messageBox');
const sendButton = document.querySelector('#sendButton');

// Send a simple text message when we click the button
sendButton.addEventListener('click', event => {
    const message = messageBox.textContent;
    dataChannel.send(message);
})
```

Удаленный узел будет получать сообщения, отправленные на RTCDataChannel, через отслеживание события message.

```javascript
const incomingMessages = document.querySelector('#incomingMessages');

const peerConnection = new RTCPeerConnection(configuration);
const dataChannel = peerConnection.createDataChannel();

// Append new messages to the box of incoming messages
dataChannel.addEventListener('message', event => {
    const message = event.data;
    incomingMessages.textContent += message + '\n';
});
```