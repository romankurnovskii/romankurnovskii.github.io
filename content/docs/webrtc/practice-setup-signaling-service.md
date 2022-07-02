---
title: Настройка службы сигналинга для обмена сообщениями 
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
weight: 15
---

**Чему вы научитесь**

На этом шаге вы узнаете, как:
- Использовать npm для установки взаимосвязей, как указано в package.json
- Запускать сервер Node.js и использовать node-static для обслуживания статических файлов.
- Настраивать службу обмена сообщениями на Node.js через Socket.IO .
- Использовать это для создания ‘комнат" и обмена сообщениями.
- 
Полная версия этого шага находится в папке step-04.

**Концепции**

Чтобы установить и поддерживать вызов WebRTC, клиенты WebRTC (узлы) должны обмениваться метаданными:
- Информация о кандидате (сети).
- 
- сообщения offer и answer, содержащие информацию о медиа, например, о разрешении и кодеках.
- 
Другими словами, обмен метаданными требуется до P2P потоковой передачи аудио, видео или данных. Этот процесс называется сигналингом.
На предыдущих этапах объекты RTCPeerConnection отправителя и получателя находились на одной странице, поэтому "сигналинг" - это просто вопрос передачи метаданных между объектами.

В реальном приложении отправитель и получатель RTCPeerConnections запущены на веб-страницах на разных устройствах, и вам нужен способ для обмена метаданными.

Для этого используется signaling-server: сервер, который может передавать сообщения между клиентами WebRTC (узлами). Фактически сообщения представляют собой обычный текст: строковые объекты JavaScript.

**Обязательное условие: установить Node.js**

Для выполнения следующих шагов этой codelab (папки step-04 до step-06) вам необходимо запустить сервер на локальном хосте с помощью Node.js .
Вы можете скачать и установить Node.js по этой ссылке (https://nodejs.org/en/download/) или через предпочтительный для вас менеджер пакетов (https://nodejs.org/en/download/package-manager/).
После установки вы сможете импортировать зависимости, необходимые для следующих шагов (запуск npm install), а также запустить небольшой локальный сервер для выполнения codelab (запуск node index.js). Эти команды будут указаны позже, когда они потребуются.

**О приложении**

WebRTC использует клиентский JavaScript API, но для использования в реальных приложениях также требуется сигналинг-сервер (обмена сообщениями), а также серверы STUN и TURN. Вы можете узнать больше здесь - https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/. 
На этом шаге вы создадите простой Node.js сигналинг-сервер, использующий Socket.IO Node js модуль и библиотеку JavaScript для обмена сообщениями. Опыт работы с Node.js и Socket.IO будет полезным, но не решающим; компоненты обмена сообщениями очень просты.

> Выбор правильного сигналинг-сервера
В этой кодовой лаборатории используется Socket.IO для сигналинг-сервера.
Дизайн Socket.IO упрощает создание службы для обмена сообщениями. и Socket.IO подходит для изучения сигналинга WebRTC благодаря встроенной концепции ‘комнат".
Однако для производственного сервиса есть альтернативы получше. Смотрите, как выбрать сигналинг-протокол для вашего следующего проекта WebRTC - https://bloggeek.me/siganling-protocol-webrtc/ 

В этом примере сервер (Node.js приложение) реализовано в index.js, и клиент, который работает на нем (веб-приложение), реализован в index.html.
Node.js приложение на этом этапе имеет две задачи.
Во-первых, он действует как ретранслятор сообщений:

```js
socket.on('message', function (message) {
  log('Got message: ', message);
  socket.broadcast.emit('message', message);
});
```

Во-вторых, он управляет «комнатами» видеочата WebRTC:

```js
if (numClients === 0) {
  socket.join(room);
  socket.emit('created', room, socket.id);
} else if (numClients === 1) {
  socket.join(room);
  socket.emit('joined', room, socket.id);
  io.sockets.in(room).emit('ready');
} else { // max two clients
  socket.emit('full', room);
}
```

Наше простое приложение WebRTC позволит максимум двум узлам совместно использовать комнату.

**HTML и JavaScript**

Обновите index.html. Теперь страница должна выглядеть примерно так:

```html
<!DOCTYPE html>
<html>

<head>

  <title>Realtime communication with WebRTC</title>

  <link rel="stylesheet" href="css/main.css" />

</head>

<body>

  <h1>Realtime communication with WebRTC</h1>

  <script src="/socket.io/socket.io.js"></script>
  <script src="js/main.js"></script>
  
</body>

</html>
```

На этом шаге вы ничего не увидите на странице: все протоколирование выполняется в консоли браузера. (Чтобы просмотреть консоль в Chrome, нажмите Ctrl-Shift-J или Command-Option-J, если работаете на Mac.)
Заменить js/main.js следующим файлом:

```js
'use strict';

var isInitiator;

window.room = prompt("Enter room name:");

var socket = io.connect();

if (room !== "") {
  console.log('Message from client: Asking to join room ' + room);
  socket.emit('create or join', room);
}

socket.on('created', function(room, clientId) {
  isInitiator = true;
});

socket.on('full', function(room) {
  console.log('Message from client: Room ' + room + ' is full :^(');
});

socket.on('ipaddr', function(ipaddr) {
  console.log('Message from client: Server IP address is ' + ipaddr);
});

socket.on('joined', function(room, clientId) {
  isInitiator = false;
});

socket.on('log', function(array) {
  console.log.apply(console, array);
});
```

Настройте Socket.IO для запуска Node.js
В HTML-файле вы, возможно, видели, что используете Socket.IO файл:

```js
<script src="/socket.io/socket.io.js"></script>
```

На верхнем уровне вашей папки work создайте файл с именем package.json со следующим содержимым:

```js
{
  "name": "webrtc-codelab",
  "version": "0.0.1",
  "description": "WebRTC codelab",
  "dependencies": {
    "node-static": "^0.7.10",
    "socket.io": "^1.2.0"
  }
}
```

Это манифест приложения, который сообщает диспетчеру пакетов узлов (npm), какие зависимости проекта следует установить.

Чтобы установить зависимости (например, /socket.io/socket.io.js), выполните следующие действия из терминала командной строки в вашей папке work:
npm install

Вы должны увидеть журнал установки, который заканчивается примерно так:
 
Как вы видите, npm установил зависимости, определенные в package.json.

Создайте новый файл index.js на верхнем уровне вашей папки work (не в папке js) и добавьте следующий код:

```js
'use strict';

var os = require('os');
var nodeStatic = require('node-static');
var http = require('http');
var socketIO = require('socket.io');

var fileServer = new(nodeStatic.Server)();
var app = http.createServer(function(req, res) {
  fileServer.serve(req, res);
}).listen(8080);

var io = socketIO.listen(app);
io.sockets.on('connection', function(socket) {

  // convenience function to log server messages on the client
  function log() {
    var array = ['Message from server:'];
    array.push.apply(array, arguments);
    socket.emit('log', array);
  }

  socket.on('message', function(message) {
    log('Client said: ', message);
    // for a real app, would be room-only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  socket.on('create or join', function(room) {
    log('Received request to create or join room ' + room);

    var clientsInRoom = io.sockets.adapter.rooms[room];
    var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;

    log('Room ' + room + ' now has ' + numClients + ' client(s)');

    if (numClients === 0) {
      socket.join(room);
      log('Client ID ' + socket.id + ' created room ' + room);
      socket.emit('created', room, socket.id);

    } else if (numClients === 1) {
      log('Client ID ' + socket.id + ' joined room ' + room);
      io.sockets.in(room).emit('join', room);
      socket.join(room);
      socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('ready');
    } else { // max two clients
      socket.emit('full', room);
    }
  });

  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          socket.emit('ipaddr', details.address);
        }
      });
    }
  });

});
```

Из терминала командной строки выполните следующую команду в папке work:
node index.js

В браузере откройте [localhost:8080](localhost:8080).

Каждый раз, когда вы открываете этот URL-адрес, вам будет предложено ввести название комнаты. Чтобы присоединиться к одной и той же комнате, каждый раз выбирайте одно и то же имя комнаты, например, «foo».

Откройте новую вкладку и снова откройте localhost: 8080. Выберите то же самое название комнаты.

Откройте [localhost:8080](localhost:8080) в третьей вкладке или окне. Выберите то же название комнаты еще раз.

Проверьте консоль на каждой из вкладок: вы должны увидеть логи из JavaScript выше.

**Бонусные задания**

1.	Какие альтернативные механизмы обмена сообщениями могут быть возможны? С какими проблемами вы можете столкнуться при использовании «чистого» WebSocket?
2.	Какие проблемы могут быть связаны с масштабированием этого приложения? Можете ли вы разработать метод для тестирования тысяч или миллионов одновременных запросов на номер?
3.	Это приложение использует запрос JavaScript для получения названия комнаты. Разработайте способ получения названия комнаты из URL. Например, localhost:8080/foo будет указывать имя комнаты foo.

**Что вы узнали**

На этом шаге вы узнали, как:
- Использовать npm для установки зависимостей проекта, как указано в package.json
- Запускать Node.js сервер для обмена системных файлов.
- Настраивать службу обмена сообщениями на Node.js через socket.io .
- Использовать это для создания ‘комнат" и обмена сообщениями.
Полная версия этого шага находится в папке step-04.

**Узнайте больше**

- Пример socket.io chat - https://github.com/rauchg/chat-example 
- WebRTC в реальном мире: STUN, TURN и сигналинг - http://www.html5rocks.com/en/tutorials/webrtc/infrastructure/ 
- Термин "signaling" в WebRTC - https://www.webrtc-experiment.com/docs/WebRTC-Signaling-Concepts.html 

**Следующий шаг**
Узнайте, как исполь
зовать сигналинг, чтобы позволить двум пользователям установить одноранговое соединение.
