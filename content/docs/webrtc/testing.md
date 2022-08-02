---
title: Тестирование приложений WebRTC
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
weight: 8
---


При написании автоматических тестов для приложений WebRTC, существуют полезные конфигурации, которые можно включить для браузеров, и которые упростят разработку и тестирование.

## Chrome

При запуске автоматических тестов в Chrome полезны следующие функции:
- --allow-file-access-from-files — дает API-доступ для file://URLs
- --disable-translate — отключает всплывающие окна
- --use-fake-ui-for-media-stream — Представляет поддельные медиапотоки. Полезно при работе на CI-серверах.
- --use-file-for-fake-audio-capture=<filename> — дает возможность использовать файл при захвате звука.
- --use-file-for-fake-video-capture=<filename> — дает возможность использовать файл при захвате видео.
- --headless - Запустить в автономном режиме. Полезно при работе на CI-серверах.
- --mute-audio - Отключить аудио.

## Firefox

При запуске автоматических тестов в Firefox, необходимо указать набор ключей предпочтений, которые будут использоваться в запущенном соединении. Ниже приведена конфигурация, используемая для автоматических тестов образцов WebRTC:

```javascripton
"prefs": {
    "browser.cache.disk.enable": false,
    "browser.cache.disk.capacity": 0,
    "browser.cache.disk.smart_size.enabled": false,
    "browser.cache.disk.smart_size.first_run": false,
    "browser.sessionstore.resume_from_crash": false,
    "browser.startup.page": 0,
    "media.navigator.streams.fake": true,
    "media.navigator.permission.disabled": true,
    "device.storage.enabled": false,
    "media.gstreamer.enabled": false,
    "browser.startup.homepage": "about:blank",
    "browser.startup.firstrunSkipsHomepage": false,
    "extensions.update.enabled": false,
    "app.update.enabled": false,
    "network.http.use-cache": false,
    "browser.shell.checkDefaultBrowser": false
}
```