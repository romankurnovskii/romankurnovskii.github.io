---
title: Потоковое видео с веб-камеры
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
weight: 12
---

**Чему вы научитесь:**

На этом шаге вы узнаете, как

- получить видеопоток с вашей веб-камеры
- управлять воспроизведением потока
- использовать CSS и SVG для обработки видео
Полная версия этого шага находится в папке step-01.

**Немного HTML**

Добавьте элемент video и элемент script в index.html в папку work.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Realtime communication with WebRTC</title>
  <link rel="stylesheet" href="css/main.css" />
</head>
<body>
  <h1>Realtime communication with WebRTC</h1>
  <video autoplay playsinline></video>
  <script src="js/main.js"></script>
</body>
</html>
```

**И немного JavaScript**

Добавьте следующее в main.js в вашей папке js:

```javascript
'use strict';

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true,
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
```

> Все приведенные здесь примеры JavaScript используют ‘use strict’, для избежания частых ошибок в кодировании.
Узнайте больше, что это означает в <http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/>

**Попробуйте**

Откройте index.html в вашем браузере и вы должны увидеть что-то подобное (с видом из вашей камеры, конечно!):

**Как это работает**

Следуя запросу `getUserMedia()`, браузер запрашивает у пользователя разрешение на доступ к своей камере (если это впервые, когда запрашивается доступ к камере для текущего источника). В случае успеха возвращается MediaStream, который может быть использован элементов мультимедиа через атрибут srcObject:

```javascript
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);

function gotLocalMediaStream(mediaStream) {
  localVideo.srcObject = mediaStream;
}
```

Аргумент constraints позволяет указать, какой тип мультимедиа получать. В этом примере используется только видео, т.к. звук по умолчанию отключен:

```javascript
const mediaStreamConstraints = {
  video: true,
};
```

Вы можете использовать ограничения для дополнительных требований, таких как разрешение видео:

```javascript
const hdConstraints = {
  video: {
    width: {
      min: 1280
    },
    height: {
      min: 720
    }
  }
}
```

Спецификация MediaTrackConstraints перечисляет все возможные типы ограничений, хотя не все параметры поддерживаются во всех браузерах. Если запрошенное разрешение не поддерживается выбранной в данный момент камерой, `getUserMedia()` будет отклонен с ошибкой OverconstrainedError и пользователю даже не предложат предоставить разрешение на доступ к своей камере.

> Демо-версию, демонстрирующую, как использовать ограничения для запроса различных разрешений, можно посмотреть по ссылке <https://simpl.info/getusermedia/constraints/>, а демо-версию с использованием ограничений для выбора камеры и микрофона – по этой ссылке <https://simpl.info/getusermedia/sources/>.

Если `getUserMedia()` сработал успешно, в качестве источника элемента video устанавливается видеопоток с веб-камеры:

```javascript
function gotLocalMediaStream(mediaStream) {
  localVideo.srcObject = mediaStream;
}
```

**Бонусные задания**

- Переданный `getUserMedia()` объект localStream находится в глобальной области видимости, поэтому вы можете проверить его через консоль браузера: откройте консоль в Chrome, введите stream и нажмите Return (для просмотра консоли в Chrome, нажмите Ctrl+Shift+J, или command+Option+J, если вы работаете на Mac).
- что возвращает localStream.getVideoTracks()?
- попробуйте сделать запрос localStream.getVideoTracks()[0].stop()
- Посмотрите на объект constraints: что произойдет, когда вы меняете его на {audio: true, video: true)?
- Какой размер у элемента video? Как можно получить естественный размер из JavaScript, в отличие от размера экрана? Используйте Chrome Dev Tools для проверки
- Попробуйте добавить CSS фильтры в элемент video. Например:

```
video {
  filter: blur(4px) invert(1) opacity(0.5);
}
```

- Попробуйте добавить SVG-фильтры. Например:

```
video {
   filter: hue-rotate(180deg) saturate(200%);
 }
```

**Что вы узнали**

На этом шаге вы узнали, как

- получать видео с вашей веб-камеры
- устанавливать ограничения для мультимедиа
- как навести хаос в элементе video

Полная версия этого шага находится в папке step-01.

**Советы**

- не забывайте про атрибут autoplay в элемент video. Без него вы будете видеть только один кадр!
- есть гораздо больше ограничений для getUserMedia(). Посмотрите их по ссылке <https://webrtc.github.io/samples/src/content/peerconnection/constraints/>. Как видите, есть много интересных примеров c WebRTC на сайте.

**Лучшая практика**

- убедитесь, что ваш элемент video не переполняет его контейнер. Мы добавили width и max-width для установки соответствующего размера и максимального размера видео. Браузер будет рассчитывать высоту автоматически.

```
video {
  max-width: 100%;
  width: 320px;
}
```

**Следующий шаг**

Вы получили видео, но как его транслировать? Узнайте на следующем шаге!
