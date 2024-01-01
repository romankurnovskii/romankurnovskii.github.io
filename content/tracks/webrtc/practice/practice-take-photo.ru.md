---
title: Сделайте фото и отправьте его через канал данных
description: Карманная книга по WebRTC
toc: true
authors:
tags: 
categories:
series:
featuredImage:
date: "2022-07-02"
lastMod: "2022-06-28"
draft: false
weight: 17
---


**Чему вы научитесь**

На этом шаге вы узнаете, как:

- Делать снимок и получать из него данные, используя элемент canvas.
- Обмениваться изображениями с удаленным пользователем.
-

Полная версия этого шага находится в папке step-06.

**Как это работает**

Ранее вы узнали, как обмениваться текстовыми сообщениями с помощью RTCDataChannel.

Этот шаг позволяет обмениваться целыми файлами: в этом примере - фотографиями, снятыми с помощью getUserMedia().

Основные части этого шага заключаются в следующем:

1. Установите канал передачи данных. Обратите внимание, что на этом шаге вы не добавляете никаких медиапотоков к одноранговому соединению.
2. Захватите видеопоток пользователя с веб-камеры с помощью getUserMedia():

```javascript
var video = document.getElementById('video');

function grabWebCamVideo() {
  console.log('Getting user media (video) ...');
  navigator.mediaDevices.getUserMedia({
    video: true
  })
  .then(gotStream)
  .catch(function(e) {
    alert('getUserMedia() error: ' + e.name);
  });
}
```

3. Когда пользователь нажимает кнопку Snap, получает снимок (видеокадр) из видеопотока и отображает его в элементе canvas:

```javascript
var photo = document.getElementById('photo');
var photoContext = photo.getContext('2d');

function snapPhoto() {
  photoContext.drawImage(video, 0, 0, photo.width, photo.height);
  show(photo, sendBtn);
}
```

4. Когда пользователь нажимает кнопку Send, преобразуйте изображение в байты и отправьте их по каналу передачи данных:

```javascript
function sendPhoto() {
  // Split data channel message in chunks of this byte length.
  var CHUNK_LEN = 64000;
  var img = photoContext.getImageData(0, 0, photoContextW, photoContextH),
    len = img.data.byteLength,
    n = len / CHUNK_LEN | 0;

  console.log('Sending a total of ' + len + ' byte(s)');
  dataChannel.send(len);

  // split the photo and send in chunks of about 64KB
  for (var i = 0; i < n; i++) {
    var start = i * CHUNK_LEN,
      end = (i + 1) * CHUNK_LEN;
    console.log(start + ' - ' + (end - 1));
    dataChannel.send(img.data.subarray(start, end));
  }

  // send the reminder, if any
  if (len % CHUNK_LEN) {
    console.log('last ' + len % CHUNK_LEN + ' byte(s)');
    dataChannel.send(img.data.subarray(n * CHUNK_LEN));
  }
}
```

5. Принимающая сторона преобразует байты сообщений канала передачи данных обратно в изображение и отображает изображение пользователю:

```javascript
function receiveDataChromeFactory() {
  var buf, count;

  return function onmessage(event) {
    if (typeof event.data === 'string') {
      buf = window.buf = new Uint8ClampedArray(parseInt(event.data));
      count = 0;
      console.log('Expecting a total of ' + buf.byteLength + ' bytes');
      return;
    }

    var data = new Uint8ClampedArray(event.data);
    buf.set(data, count);

    count += data.byteLength;
    console.log('count: ' + count);

    if (count === buf.byteLength) {
      // we're done: all data chunks have been received
      console.log('Done. Rendering photo.');
      renderPhoto(buf);
    }
  };
}

function renderPhoto(data) {
  var canvas = document.createElement('canvas');
  canvas.width = photoContextW;
  canvas.height = photoContextH;
  canvas.classList.add('incomingPhoto');
  // trail is the element holding the incoming images
  trail.insertBefore(canvas, trail.firstChild);

  var context = canvas.getContext('2d');
  var img = context.createImageData(photoContextW, photoContextH);
  img.data.set(data);
  context.putImageData(img, 0, 0);
}
```

**Получите код**

Замените содержимое вашей папки work содержимым из step-06. Ваш файл index.html в папке work теперь должен выглядеть следующим образом **:**

```html
<!DOCTYPE html>
<html>

<head>

  <title>Realtime communication with WebRTC</title>

  <link rel="stylesheet" href="/css/main.css" />

</head>

<body>
  <h1>Realtime communication with WebRTC</h1>
  <h2>
    <span>Room URL: </span><span id="url">...</span>
  </h2>

  <div id="videoCanvas">
    <video id="camera" autoplay></video>
    <canvas id="photo"></canvas>
  </div>

  <div id="buttons">
    <button id="snap">Snap</button><span> then </span><button id="send">Send</button>
    <span> or </span>
    <button id="snapAndSend">Snap &amp; Send</button>
  </div>

  <div id="incoming">
    <h2>Incoming photos</h2>
    <div id="trail"></div>
  </div>

  <script src="/socket.io/socket.io.js"></script>
  <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
  <script src="js/main.js"></script>

</body>

</html>
```

Если вы не отслеживаете эту codelab из своей папки work, вам может потребоваться установить зависимости для папки step-06 или вашей текущей рабочей папки. Просто запустите следующую команду из своей рабочей папки:

```
npm install
```

После установки, если ваш Node.js сервер не запущен, запустите его, вызвав следующую команду из вашей папки work:
node index.js

Убедитесь, что вы используете версию index.js, который реализует Socket.IO, и не забудьте перезапустить ваш сервер Node.js, если вы собираетесь что-то менять. Для большей информации на Node и Socket.IO, загляните в раздел «Set up a signaling service to exchange messages».

При необходимости нажмите на кнопку Allow, чтобы разрешить приложению использовать вашу веб-камеру.

Приложение создаст случайный ID комнаты, и добавьте этот ID в URL. Откройте URL из адресной стройки в новой вкладке или окне браузера.

Нажмите кнопку Snap&Send и затем посмотрите входящую область в другой вкладке внизу страницы. Приложение переносит фотографии между вкладками.

Вы должны увидеть что-то типа этого:

**Бонусные задания:**

1. Как вы можете изменить код, чтобы сделать возможным совместное использование файлов любого типа?

**Узнайте больше**

- The MediaStream Image Capture API (<https://www.chromestatus.com/features/4843864737185792>): API для фотосъемки и управления камерами — скоро появится в браузере!
- API MediaRecorder для записи аудио и видео: демо-примеры (<https://webrtc.github.io/samples/src/content/getusermedia/record/>) и документация (<https://www.chromestatus.com/features/5929649028726784>)

**Что вы узнали**

- Как делать фото и получать из нее данные с помощью элемента canvas.
- Как обмениваться этими данными с удаленным пользователем.
  
Полная версия этого шага находится в папке step-06.
