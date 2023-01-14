---
title: Среда разработки
seoTitle: Среда разработки Python
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: 2022-06-22
lastmod: 2023-02-12
draft: false
weight: 102
---


Для удобной работы с Python требуется хорошо настроенная рабочая среда. Я предпочитаю использовать [**Visual Studio Code**](https://code.visualstudio.com/) - бесплатный редактор кода, разработанный Microsoft.

Для начала, нужно установить Visual Studio Code на свой компьютер. Это можно сделать с помощью официального сайта https://code.visualstudio.com/.

Установка Python на MacOS и Linux очень проста. Для MacOS можно использовать менеджер пакетов brew, который позволяет установить последнюю версию Python одной командой:

```sh
brew install --cask visual-studio-code
```

Для Linux, в зависимости от дистрибутива, используется свой менеджер пакетов. Например, для Ubuntu это можно сделать командой:

```sh
sudo apt-get install code

```

После установки необходимо установить расширение **Python**. Для этого необходимо перейти во вкладку "Extensions", найти "Python" и нажать кнопку "Install".

![](../../img/vscode.ru.png)

Создайте файл для проекта, например, `example_1.py`.

Напишите код `print("Hello, world!")` и запустите его, нажав на кнопку с треугольником справа вверху:

![](../../img/vscode-01.ru.png)

VSCode запустит код и в нижнем окне программы в терминале вы увидите результат:

![](../../img/vscode-02.ru.png)
