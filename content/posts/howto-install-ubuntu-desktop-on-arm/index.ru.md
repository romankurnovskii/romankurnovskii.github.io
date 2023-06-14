---
title: Установка Ubuntu Desktop 22.10 (Kinetic Kudu) на ARM CPU
seoTitle: 2023 - Установка Ubuntu 22.10 (Kinetic Kudu) на ARM CPU
description: Быстрая базовая установка Ubuntu Desktop 22.10 на виртуальную машину UTM с процессором ARM M1
toc: true
tags: [linux, ubuntu]
series: ['Установка ОС']
categories: [OS, Linux]
date: "2022-06-23"
lastmod: 2023-02-24
featuredImage: img/featured.jpg
authors: [roman-kurnovskii]
---

Ubuntu - одна из популярных Linux систем и достаточно много [обзоров по установке Ubuntu](https://mac.getutm.app/gallery/ubuntu-20-04). В этой статье мы будем устанавливать образ Ubuntu для **ARM процессора** на виртуальную машину UTM. Вся установка будет проходить на Mac OS.

### Загрузка установочного образа

На сайте Ubuntu доступен для скачивания только образ [Ubuntu Server ARM](https://ubuntu.com/download/server/arm) версии **22.04** - без графического интерфейса. Но можно скачать обновленный релиз Ubuntu Desktop для ARM - Daily Build по [ссылке](https://cdimage.ubuntu.com/daily-live/current/).

Находим *64-bit ARM (ARMv8/AArch64) desktop image* и скачиваем
![ARMv8/AArch64](img/01-ubuntu-kinetic.png)

### Виртуальная машина

В качестве виртуальной машины для установки RHEL 9 использую бесплатную [виртуальную машину UTM](https://mac.getutm.app/). Установить можно с помощью [Homebrew](https://romankurnovskii.com/posts/mac-setup-development/#homebrew), выполнив команду `brew install --cask utm`.

## Установка Ubuntu Desktop

### Настройка виртуальной машины UTM

В UTM нажимаем `Create a New Virtual Machine` -> Virtualize
![Настройка виртуальной машины UTM](img/02.png)

Выбираем скачанный образ и нажимаем `Continue`, далее оставляем опции по умолчанию
![](img/03.png)

### Запуск Live версии

Выбираем *Try or Install Ubuntu*. Запустится live образ Ubuntu. Такой образ не сохраняет свое состояние после перезагрузки.
![](img/04.png)

Входим под пользователем ubuntu:

![](img/05.png)
Видим рабочий стол и можем пользоваться.

### Установка

Внизу справа есть ярлык для стандартной установки Ubuntu. Нажимаем и запускаем обычную установку на диск.
![](img/06.png)

Выбираем нужный язык
![](img/07.png)
Я выбираю минимальную установку, т.к. мне не нужны будут предустановленные игры и прочие приложения. Графический интерфейс, браузер, терминал остается со всеми базовыми настройками.
![](img/08.png)
Оставляем по умолчанию стирание виртуального диска перед установкой
![](img/09.png)
Создаем пользователя, под которым будем входить в систему.
![](img/10.png)
Как только установка закончится, нажимаем *Restart*.
![](img/11.png)
У меня после перезагрузки черный экран. Поэтому я просто закрываю и снова запускаю вирутальную машину.

### Вход в систему

После запуска системы выбираем *Boot from next volume. Первым по умолчанию будет запуск с вирутального образа, но у нас уже есть система на диске, поэтому выбираем запуск со следующего по очереди диска.
![](img/12.png)
Входим под своим пользователем
![](img/13.png)
Система предлагает скачать обновления для системы. Нажимаю установить.
![](img/14.png)
Теперь можно пользоваться системой и все данные будут сохраняться после перезагрузки.
![Kinetic Kudu 22.10](img/15.png)

## Ссылки

- [Kinetic Kudu Release Schedule](https://discourse.ubuntu.com/t/kinetic-kudu-release-schedule/27263)
- [Daily Builds](https://cdimage.ubuntu.com/daily-live/current/)
