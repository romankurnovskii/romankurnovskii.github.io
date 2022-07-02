---
title: Удаленные потоки
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
weight: 5
---


## Начало работы с удаленными потоками

Как только RTCPeerConnection подключился к удаленному узлу, между ними можно передавать аудио- и видео-потоки. Это точка, в которой мы подключаем поток, полученный от getUserMedia(), к RTCPeerConnection. Медиаопоток состоит как минимум из одной дорожки мультимедиа, и они по отдельности добавляются в RTCPeerConnection, когда мы хотим передать данные удаленному узлу.

```js
const localStream = await getUserMedia({vide: true, audio: true});
const peerConnection = new RTCPeerConnection(iceConfig);
localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream);
});
```

Дорожки можно добавлять в RTCPeerConnection до подключения к удаленному узлу, поэтому имеет смысл выполнить эту настройку как можно раньше, а не ждать завершения соединения.

## Добавление удаленных дорожек

Для получения удаленных дорожек, которые были добавлены другим узлом, мы регистрируем «прослушиватель» на локальном RTCPeerConnection, отслеживая изменения в событии track. RTCTrackEvent содержит массив объектов MediaStream, которые имеют те же значения MediaStream.id, что и соответствующие локальные потоки узла. В нашем примере каждая дорожка связана только с одним потоком.

Обратите внимание, что, хотя ID из MediaStream совпадают на обеих сторонах однорангового соединения, в общем случае это не работает для ID MediaStreamTrack.

```js
const remoteVideo = document.querySelector('#remoteVideo');

peerConnection.addEventListener('track', async (event) => {
    const [remoteStream] = event.streams;
    remoteVideo.srcObject = remoteStream;
});
```