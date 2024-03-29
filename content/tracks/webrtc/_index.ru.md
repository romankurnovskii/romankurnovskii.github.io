---
title: Карманная книга по WebRTC
description: Карманная книга по WebRTC
toc: true
authors:
tags: 
categories: [Roadmaps]
series: [руководства]
featuredImage:
date: "2022-07-02"
lastMod: "2022-06-28"
draft: false

---

Создание нового приложения на базе WebRTC-технологий может стать непосильной задачей, если вы не знакомы с API. В этом разделе мы покажем, как начать работать с различными API в стандарте WebRTC, на большом количестве примеров и фрагментов кода, решающих эти задачи.

## WebRTC API

Стандарт WebRTC работает с двумя различными технологиями: мультимедиа-устройства и P2P-соединение.
Мультимедиа-устройства включают в себя не только камеры и микрофоны, но также и «устройства» захвата экрана. Для камер и микрофонов мы используем `navigator.mediaDevices.getUserMedia()` для захвата `MediaStreams`. Для записи же мы используем `navigator.mediaDevices.getDisplayMedia()`.

P2P соединение настраивается через интерфейс `RTCPeerConnection`. Это ключевой пункт для установления и управления соединением между двумя узлами в WebRTC.

## Ресурсы

- [https://webrtc.org/getting-started/overview](https://webrtc.org/getting-started/overview)
- [https://codelabs.developers.google.com/codelabs/webrtc-web](https://codelabs.developers.google.com/codelabs/webrtc-web)
