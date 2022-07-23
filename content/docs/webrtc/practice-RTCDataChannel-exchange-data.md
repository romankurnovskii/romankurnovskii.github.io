---
title: Использование RTCDataChannel для обмена данными
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
weight: 14
---

**Чему вы научитесь**
- как обмениваться данными между узлами WebRTC

Полная версия этого шага находится в папке step-03.

**Обновите свой HTML**

На этом шаге вы будете использовать WebRTC каналы данных для отправки текста между двумя textarea элементами на одной странице. Это опять не сильно применимо на практике, но зато демонстрирует, как WebRTC можно использовать для обмена данными, а также для потоковых видео.

Удалите элементы video и button из index.html и замените их следующим HTML-кодом:

```html
<textarea id="dataChannelSend" disabled
    placeholder="Press Start, enter some text, then press Send."></textarea>
<textarea id="dataChannelReceive" disabled></textarea>

<div id="buttons">
  <button id="startButton">Start</button>
  <button id="sendButton">Send</button>
  <button id="closeButton">Stop</button>
</div>
```

Одна текстовая область будет предназначена для ввода текста, другая будет отображать текст в потоковом режиме между узлами.
Теперь index.html должен выглядеть так:

```html
<!DOCTYPE html>
<html>

<head>

  <title>Realtime communication with WebRTC</title>

  <link rel="stylesheet" href="css/main.css" />

</head>

<body>

  <h1>Realtime communication with WebRTC</h1>

  <textarea id="dataChannelSend" disabled
    placeholder="Press Start, enter some text, then press Send."></textarea>
  <textarea id="dataChannelReceive" disabled></textarea>

  <div id="buttons">
    <button id="startButton">Start</button>
    <button id="sendButton">Send</button>
    <button id="closeButton">Stop</button>
  </div>

  <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
  <script src="js/main.js"></script>

</body>

</html>
```

Обновите свой JavaScript

Замените main.js содержимым из _`step-03/js/main.js`_.

> Как и на предыдущем шаге, делать копи-паст на больших кусках кода – не идеальный вариант развития событий в codelab (как и с RTCPeerConnection). Но альтернатив у нас нет.

Протестируйте потоковые данные между узлами: откройте index.html, нажмите Start для установки соединения между узлами, введите какой-то текст в textarea слева, затем нажмите на Send, чтобы передать текст через каналы данных WebRTC.

**Как это работает**
Этот код использует `RTCPeerConnection` и `RTCDataChannel` для обмена текстовыми сообщениями 
Большая часть кода на этом шаге такая же, как и в примере RTCPeerConnection.
Функции sendData() и createConnection() содержат большую часть нового кода:

```js
function createConnection() {
  dataChannelSend.placeholder = '';
  var servers = null;
  pcConstraint = null;
  dataConstraint = null;
  trace('Using SCTP based data channels');
  // For SCTP, reliable and ordered delivery is true by default.
  // Add localConnection to global scope to make it visible
  // from the browser console.
  window.localConnection = localConnection =
      new RTCPeerConnection(servers, pcConstraint);
  trace('Created local peer connection object localConnection');

  sendChannel = localConnection.createDataChannel('sendDataChannel',
      dataConstraint);
  trace('Created send data channel');

  localConnection.onicecandidate = iceCallback1;
  sendChannel.onopen = onSendChannelStateChange;
  sendChannel.onclose = onSendChannelStateChange;

  // Add remoteConnection to global scope to make it visible
  // from the browser console.
  window.remoteConnection = remoteConnection =
      new RTCPeerConnection(servers, pcConstraint);
  trace('Created remote peer connection object remoteConnection');

  remoteConnection.onicecandidate = iceCallback2;
  remoteConnection.ondatachannel = receiveChannelCallback;

  localConnection.createOffer().then(
    gotDescription1,
    onCreateSessionDescriptionError
  );
  startButton.disabled = true;
  closeButton.disabled = false;
}

function sendData() {
  var data = dataChannelSend.value;
  sendChannel.send(data);
  trace('Sent Data: ' + data);
}
```

Синтаксис в RTCDataChannel намеренно похож на WebSocket, с методом `send()` событием message.

Обратите внимание на использование dataConstraint. Каналы передачи данных могут быть настроены для обеспечения различных типов обмена данными — например, отправляемые данные могут быть в приоритете над над производительностью. Более подробную информацию о возможностях можно найти на https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel .

> Три типа ограничений
Это сбивает с толку!

Различные типы параметров настройки вызовов WebRTC часто называются «ограничениями». 

Узнайте больше об ограничениях и возможностях:

- RTCPeerConnection https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection 
- RTCDataChannel https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel 
- getUserMedia() https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia 

**Бонусные задания**
1)	с SCTP-протоколом, используемым каналами передачи данных WebRTC, надежная и упорядоченная доставка данных включена по умолчанию. Когда может понадобиться RTCDataChannel для обеспечения надежной доставки даных, а когда производительность может быть важнее – даже если это означает потерю каких-то данных?
2)	Используйте CSS для улучшения макета страницы и добавьте атрибут placeholder в текстовую область dataChannelReceive.
3)	Протестируйте страницу на мобильном устройстве.

**Что вы узнали?**
На этом шаге вы узнали, как
- устанавливать соединение между двумя узлами WebRTC
- обмениваться текстовыми данными между узлами

Полная версия этого шага находится в папке step-03.

**Узнайте больше**
- - Каналы передачи данных WebRTC (написано пару лет назад, но все еще стоит прочитать) - http://www.html5rocks.com/en/tutorials/webrtc/datachannels/ 
- Почему SCTP был выбран для канала передачи данных WebRTC? - https://bloggeek.me/sctp-data-channel/ 

**Следующий шаг**
Вы узнали, как обмениваться данными между узлами на одной и той же странице, но как вы собираетесь это делать между разными устройствами? Сначала вам необходимо настроить сигналинг-канал для обмена сообщениями метаданных. Как – узнайте на следующем шаге!