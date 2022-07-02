---
title: Потоковое видео с помощью RTCPeerConnection
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
weight: 13
---

**Чему вы научитесь**

На этом шаге вы узнаете, как:
- Абстрагироваться от различий браузера с помощью оболочки WebRTC, adapter.js.
- Использовать RTCPeerConnection API для потоковой передачи видео.
- Управлять захватом и потоковой передачей мультимедиа.

Полная версия этого шага находится в папке step-2.

**Что такое RTCPeerConnection?**

RTCPeerConnection - это API для выполнения WebRTC-запросов для потоковой передачи видео и аудио и обмена данными.

В этом примере устанавливается соединение между двумя объектами RTCPeerConnection (известными как узлы) на одной и той же странице.

Не очень практично, но зато полезно для понимания того, как работает RTCPeerConnection.

**Добавление элементов video и кнопок управления**

В index.html замените один видеоэлемент двумя видеоэлементами и тремя кнопками:

```html
<video id="localVideo" autoplay playsinline></video>
<video id="remoteVideo" autoplay playsinline></video>


<div>
  <button id="startButton">Start</button>
  <button id="callButton">Call</button>
  <button id="hangupButton">Hang Up</button>
</div>
```

Один видеоэлемент будет отображать поток из getUserMedia(), а другой будет показывать это же видео, но передаваемое через RTCPeerConnection (в реальном приложении один видеоэлемент будет отображать локальный поток, а другой – удаленный поток).

**Добавьте adapter.js**
Добавьте ссылку на текущую версию adapter.js  выше ссылки на main.js:
```
<script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
```
> **adapter.js** - это оболочка для изоляции приложений от изменений спецификаций и различий в префиксах. (Хотя на самом деле стандарты и протоколы, используемые для реализации WebRTC, очень стабильны, и существует всего несколько имен с префиксами.)
>
> На этом этапе мы используем самую последнюю версию adapter.js, что хорошо для codelab, но не всегда хорошо для приложений. Здесь https://github.com/webrtc/adapter мы объясняем, как сделать так, чтоб у вашего приложения всегда был доступ к самой последней версии.
>
> Для получения полной информации о взаимодействии сWebRTC, переходи по ссылке https://webrtc.github.io/webrtc-org/web-apis/interop/ 

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

  <video id="localVideo" autoplay playsinline></video>
  <video id="remoteVideo" autoplay playsinline></video>

  <div>
    <button id="startButton">Start</button>
    <button id="callButton">Call</button>
    <button id="hangupButton">Hang Up</button>
  </div>

  <script src="https://webrtc.github.io/adapter/adapter-latest.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

**Установите код RTCPeerConnection**

Замените main.js в папке step-02.

> Делать копи-паст в больших кусках кода в codelab – это так себе вариант, конечно. Но чтобы получить и запустить RTCPeerConnection, у нас нет других альтернатив, как провести вас через весь этот путь.
Вам нужно научиться, как код работает в каждый момент.

**Сделайте звонок**
Откройте index.html, нажмите кнопку Start, чтоб получить видео с вашей веб-камеры, и затем нажмите Call, чтобы установить одноранговое соединение. Вы должны увидеть одно и то же видео (с вашей веб-камеры) в обоих видео-элементах. Посмотрите консоль браузера, чтоб увидеть логи WebRTC.

**Как это работает**

В этом шаге будет много всего…

> Если вы хотите пропустить объяснение ниже - ок.
Вы все еще можете продолжить работу с codelab!


WebRTC использует API RTCPeerConnection для настройки соединения для потоковой передачи видео между клиентами WebRTC, известными как узлы.
В этом примере два объекта RTCPeerConnection находятся на одной странице: pc1 и pc2. Это мало используется на практике, но зато хорошо демонстрирует, как работают API.
Настройка вызова между WebRTC-узлами включает в себя три задачи:
- Создать RTCPeerConnection для каждого конца вызова и на каждом конце добавить локальный поток из getUserMedia().
- Получать и делиться сетевой информацией: потенциальные конечные точки подключения известны как ICE-кандидаты.
- Получать и делиться локальными и удаленными описаниями: метаданные о локальными мультимедиа в формате SDP.

Представьте, что Алиса и Боб хотят использовать RTCPeerConnection для настройки видеочата.
Сначала Алиса и Боб обмениваются информацией о сети. Выражение "finding candidates" относится к процессу поиска сетевых интерфейсов и портов с использованием ICE-фреймворк.
1.	Алиса создает объект RTCPeerConnection с обработчиком onicecandidate (addEventListener('icecandidate')). Это соответствует следующему коду из main.js

```js
let localPeerConnection;

localPeerConnection = new RTCPeerConnection(servers);
localPeerConnection.addEventListener('icecandidate', handleConnection);
localPeerConnection.addEventListener(
    'iceconnectionstatechange', handleConnectionChange);
```

> Аргумент servers для RTCPeerConnection в этом примере не используется.
Здесь вы можете указать STUN и TURN серверы.
WebRTC разработан для работы с P2P, поэтому пользователи могут подключаться по самому прямому возможному маршруту. Однако WebRTC создан для работы в реальных сетях: клиентским приложениям необходимо проходить через шлюзы NAT (http://en.wikipedia.org/wiki/NAT_traversal) и брандмауэры, а P2P сеть нуждается в резервном варианте на случай сбоя прямого соединения.
В рамках этого процесса, API WebRTC используют STUN-серверы для получения IP-адреса вашего компьютера и TURN-серверы для ретрансляции в случае сбоя P2P связи. Подробнее об этом - http://www.html5rocks.com/en/tutorials/webrtc/infrastructure/ 

2.	Алиса вызывает `getUserMedia()` и добавляет переданные поток:

```js
navigator.mediaDevices.getUserMedia(mediaStreamConstraints).
  then(gotLocalMediaStream).
  catch(handleLocalMediaStreamError);

function gotLocalMediaStream(mediaStream) {
  localVideo.srcObject = mediaStream;
  localStream = mediaStream;
  trace('Received local stream.');
  callButton.disabled = false;  // Enable call button.
}

localPeerConnection.addStream(localStream);
trace('Added local stream to localPeerConnection.');
```
3.	Обработчик onicecandidate из шага 1 вызывается, когда становятся доступными сетевые кандидаты.
4.	Алиса отправляет Бобу данные кандидата. В реальном приложении этот процесс (известный как сигналинг) осуществляется через службу обмена сообщениями – вы узнаете, как это сделать, позднее. Конечно, на этом этапе два объекта RTCPeerConnection находятся на одной странице и могут взаимодействовать напрямую без необходимости во внешних сообщениях.
5.	Когда Боб получает сообщение о кандидате от Алисы, он вызывает `addIceCandidate()`, чтобы добавить кандидата в описание удаленного узла:

```js
function handleConnection(event) {
  const peerConnection = event.target;
  const iceCandidate = event.candidate;

  if (iceCandidate) {
    const newIceCandidate = new RTCIceCandidate(iceCandidate);
    const otherPeer = getOtherPeer(peerConnection);

    otherPeer.addIceCandidate(newIceCandidate)
      .then(() => {
        handleConnectionSuccess(peerConnection);
      }).catch((error) => {
        handleConnectionFailure(peerConnection, error);
      });

    trace(`${getPeerName(peerConnection)} ICE candidate:\n` +
          `${event.candidate.candidate}.`);
  }
}
```

Узлам WebRTC также необходимо узнавать и обмениваться информацией о локальных и удаленных аудио- и видеоматериалах, такими как разрешение и возможности кодеков, и обмениваться ими. Сигналинг для обмена информацией о конфигурации мультимедиа осуществляется путем обмена большими двоичными объектами метаданных, известными как offer и answer, с использованием формата Session Description Protocol, известного как SDP (http://en.wikipedia.org/wiki/Session_Description_Protocol):
1.	Алиса запускает метод RTCPeerConnectioncreateOffer(). Возвращенный промис обеспечивает RTCSessionDescription: Alice’s local session description:

```
trace('localPeerConnection createOffer start.');
localPeerConnection.createOffer(offerOptions)
  .then(createdOffer).catch(setSessionDescriptionError);
```

2.	В случае успеха Алиса устанавливает локальное описание, используя setLocalDescription(), а затем отправляет это описание сеанса Бобу через сигналинг-канал.
3.	Боб принимает описание, отправленное ему Алисой, в качестве удаленного описания, используя setRemoteDescription().
4.	Боб запускает метод `RTCPeerConnection` `createAnswer()`, передавая ему удаленное описание, которое он получил от Алисы, чтобы можно было создать локальный сеанс, совместимый с ее сеансом. Промис `createAnswer()` передает описание `RTCSessionDescription`: Боб устанавливает это как локальное описание и отправляет его Алисе.
5.	Когда Алиса получает описание сеанса Боба, она устанавливает его в качестве удаленного описания с помощью `setRemoteDescription()`.
```
// Logs offer creation and sets peer connection session descriptions.
function createdOffer(description) {
  trace(`Offer from localPeerConnection:\n${description.sdp}`);

  trace('localPeerConnection setLocalDescription start.');
  localPeerConnection.setLocalDescription(description)
    .then(() => {
      setLocalDescriptionSuccess(localPeerConnection);
    }).catch(setSessionDescriptionError);

  trace('remotePeerConnection setRemoteDescription start.');
  remotePeerConnection.setRemoteDescription(description)
    .then(() => {
      setRemoteDescriptionSuccess(remotePeerConnection);
    }).catch(setSessionDescriptionError);

  trace('remotePeerConnection createAnswer start.');
  remotePeerConnection.createAnswer()
    .then(createdAnswer)
    .catch(setSessionDescriptionError);
}

// Logs answer to offer creation and sets peer connection session descriptions.
function createdAnswer(description) {
  trace(`Answer from remotePeerConnection:\n${description.sdp}.`);

  trace('remotePeerConnection setLocalDescription start.');
  remotePeerConnection.setLocalDescription(description)
    .then(() => {
      setLocalDescriptionSuccess(remotePeerConnection);
    }).catch(setSessionDescriptionError);

  trace('localPeerConnection setRemoteDescription start.');
  localPeerConnection.setRemoteDescription(description)
    .then(() => {
      setRemoteDescriptionSuccess(localPeerConnection);
    }).catch(setSessionDescriptionError);
}
```

6.	Пинг!

**Бонусные задания**

1.	Посмотрите chrome://webrtc-internals. Там отражены статы WebRTC и отлаженные данные (Полный список ссылок в Chrome – chrome://about).
2.	Сделайте разметку страницы через CSS:
-	Расположите видео друг за другом
-	Сделайте кнопки такой же ширины, но с большим размером текста
-	Убедитесь, что макет работает на мобильных устройствах
3.	В консоли Chrome Dev Tools посмотрите localStream, localPeerConnection и remotePeerConnection.
4.	Из консоли, посмотрите на localPeerConnecionpc1.localDescription. Как выглядит формат SDP?

**Что вы узнали?**

На этом шаге вы узнали, как
- уйти от различий в браузерах через WebRTC оболочку adapter.js
- использовать RTCPeerConncetion API для потоковой передачи видео
- контролировать захват медиа и потоковую передачу данных
- делиться мультимедиа и сетевой информацией между узлами, чтоб разрешить вызов WebRTC.
Полная версия этого шага находится в папке step-2.

**Советы**

- на этом шаге вам нужно столько всего освоить! Чтобы найти другие ресурсы, объясняющие более детально RTCPeerConnection, загляните на webrtc.org. Эта страница включает решения для JavaScript фреймворков – если вы хотите использовать WebRTC, но не хотите конфликтовать с API.
- Узнайте больше про оболочку adapter.js из https://github.com/webrtc/adapter 
- Хотите посмотреть, как выглядит лучшее в мире приложение для видеочата? Посмотрите на AppRTC, каноническое приложение для звонков WebRTC: приложение (https://appr.tc/) и код (https://github.com/webrtc/apprtc) . Время настройки вызова составляет менее 500 мс!

**Лучшая практика**

- Для обеспечения надежности вашего кода в будущем используйте новые API-интерфейсы на основе промисов и включите совместимость с браузерами, которые их не поддерживают, используя adapter.js

**Следующий шаг**

Этот шаг показывает, как использовать WebRTC для передачи видео между узлами – но эта codelab в том числе и о данных!
В следующем шаге выясним, как передавать произвольные данные с помощью `RTCDataChannel`.