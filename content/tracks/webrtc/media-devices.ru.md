---
title: Мультимедиа-устройства
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
weight: 2
---

## Мультимедиа-устройства

### Начало работы с мультимедийными устройствами

При web-разработке WebRTC-стандарт предоставляет API для доступа к камерам и микрофонам, подключенным к компьютеру или смартфону. Эти устройства обычно называются мультимедийными устройствами, и к ним можно получить доступ с помощью Java-скрипта через объект navigator.mediaDevices, который реализует интерфейс MediaDevices. С помощью этого объекта мы можем просмотреть все подключенные устройства, отслеживать изменения статуса устройства (когда устройство подключается или отключается) и открывать устройство для извлечения мультимедийного потока (см. ниже).
Чаще всего для этого используют функцию getUserMedia(), которая возвращает промис, который будет преобразован в MediaStream для соответствующих мультимедийных устройств. Эта функция принимает один объект MediaStreamConstraints, который определяет имеющиеся требования. Например, чтобы просто открыть микрофон и камеру по умолчанию, мы должны сделать следующее:

_Через промисы:_

```javascript
const constraints = {
    'video': true,
    'audio': true
}
navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        console.log('Got MediaStream:', stream);
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });
```

_Через async/await_

```javascript
const openMediaDevices = async (constraints) => {
    return await navigator.mediaDevices.getUserMedia(constraints);
}

try {
    const stream = openMediaDevices({'video':true,'audio':true});
    console.log('Got MediaStream:', stream);
} catch(error) {
    console.error('Error accessing media devices.', error);
}
```

Обращение к `getUserMedia()` запускает запрос на разрешение. Если пользователь одобряет запрос, промис разрешает MediaStream, содержащий одну видео и одну аудио дорожку. Если запрос отклонен, появляется PermissionDeniedError. Если же нет подключенных устройств, появляется NotFoundError.
Полный список API для интерфейса MediaDevices доступен по ссылке <https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices>

## Обращение к мультимедиа-устройствам

В более сложных приложениях, мы скорее всего захотим проверить все подключенные камеры и микрофоны и дать соответствующий отчет пользователю. Это можно сделать через запрос функции enumerateDevices(). Она возвращает промис, который преобразуется в массив MediaDevicesInfo, описывающий каждое известное мультимедиа-устройство. Через него мы можем предоставить пользовательский интерфейс пользователю, который позволит выбрать те или иные устройства. Каждый список MediaDevicesInfo содержит свойства, которые называются kind с значениями audioinput, audiooutput или videoinput, отражая, какой это тип мультимедиа-устройства.

_Через промисы_

```javascript
function getConnectedDevices(type, callback) {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === type);
            callback(filtered);
        });
}

getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras));
```

_через async/await_

```javascript
async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}

const videoCameras = getConnectedDevices('videoinput');
console.log('Cameras found:', videoCameras);
```

## Отслеживание изменений в статусах устройств

Большинство компьютеров поддерживают подключение различных устройств прямо во время работы. Это может быть веб-камера, подключенная через USB, Bluetooth-гарнитура или внешние динамики. Чтобы должным образом поддерживать все это, веб-приложение должно отслеживать изменения в статусах мультимедиа-устройств. Это можно сделать, добавив «отслеживатель» в navigator.mediaDevices для события devicechange.

```javascript
// Updates the select element with the provided set of cameras
function updateCameraList(cameras) {
    const listElement = document.querySelector(‘select#availableCameras’);
    listElement.innerHTML = ‘’;
    cameras.map(camera => {
        const cameraOption = document.createElement(‘option’);
        cameraOption.label = camera.label;
        cameraOption.value = camera.deviceId;
    }).forEach(cameraOption => listElement.add(cameraOption));
}

// Fetch an array of devices of a certain type
async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}

// Get the initial set of cameras connected
const videoCameras = getConnectedDevices(‘videoinput’);
updateCameraList(videoCameras);

// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener(‘devicechange’, event => {
    const newCameraList = getConnectedDevices(‘video’);
    updateCameraList(newCameraList);
});
```

## Ограничения для мультимедиа

Объект ограничений, осуществляющий интерфейс MediaStreamConstraints и который мы отправляем в качестве параметра в getUserMedia(), позволяет нам открывать мультимедиа-устройство, которое отвечает определенным требованиям. Эти требования могут быть как очень расплывчатыми (аудио и/или видео), так и очень специфичными (минимальное разрешение камеры или точный ID устройства). Рекомендуем, чтобы приложения, использующие `getUserMedia()` API, сначала проверяли существующие устройства, а затем определяли ограничения, которые соответствуют точному устройству через deviceID-ограничение. Устройства, по возможности, будут настроены в соответствии с ограничениями. Мы можем включить эхоподавление на микрофоне, установить определенную или минимальную ширину и высоту видео с камеры.

```javascript
async function getConnectedDevices(type) {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
}

// Open camera with at least minWidth and minHeight capabilities
async function openCamera(cameraId, minWidth, minHeight) {
    const constraints = {
        'audio': {'echoCancellation': true},
        'video': {
            'deviceId': cameraId,
            'width': {'min': minWidth},
            'height': {'min': minHeight}
            }
        }

    return await navigator.mediaDevices.getUserMedia(constraints);
}

const cameras = getConnectedDevices('videoinput');
if (cameras && cameras.length > 0) {
    // Open first available video camera with a resolution of 1280x720 pixels
    const stream = openCamera(cameras[0].deviceId, 1280, 720);
}
```

Полную документацию для интерфейса MediaStreamConstraints можно найти по ссылке: <https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints>

## Локальное воспроизведение

Как только мультимедиа-устройство открыто и есть доступный MediaStream, мы можем назначить его для его видео- или аудио-элемента локальное воспроизведение потока.

```javascript
async function playVideoFromCamera() {
    try {
        const constraints = {'video': true, 'audio': true};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
    } catch(error) {
        console.error('Error opening video camera.', error);
    }
}
```

Обычно код HTML, необходимый для типичного видео-элемента с getUserMedia(), имеет атрибуты autoplay и playsinline. Атрибут autoplay запускает воспроизведение новых потоков, связанных с элементом, автоматически. Атрибут playsinline позволяет проигрывать встроенное видео вместо видео на весь экран, в некоторых мобильных браузерах. Также рекомендуем использовать controls = “false” для прямых эфиров, если у пользователя нет необходимости ставить их на паузу.

```html
<html>
<head><title>Local video playback</video></head>
<body>
    <video id="localVideo" autoplay playsinline controls="false"/>
</body>
</html>
```
