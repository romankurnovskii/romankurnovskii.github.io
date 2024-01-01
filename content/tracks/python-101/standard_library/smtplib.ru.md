---
title: Модуль email / smtplib
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: "2022-06-28"
lastMod: "2022-06-28"
draft: false
weight: 209
---

Модуль `smtplib` в Python предоставляет возможность отправки электронных писем через Simple Mail Transfer Protocol (SMTP).

Он предоставляет класс SMTP, который упрощает отправку электронной почты из Python-скрипта. Модуль `smtplib` позволяет отправлять электронные письма, как с аутентификацией, так и без, и можно отправлять как простые текстовые сообщения, так и письма с HTML-контентом.

Вот пример кода для отправки простого текстового сообщения:

```python
import smtplib

smtp_server = 'smtp.yandex.ru'
port = 587
login = 'example@yandex.ru'
password = 'password'
from_addr = 'example@yandex.ru'
to_addr = 'example2@yandex.ru'
message = 'Hello, world!'

with smtplib.SMTP(smtp_server, port) as server:
    server.starttls()
    server.login(login, password)
    server.sendmail(from_addr, to_addr, message)
```

В этом примере мы создаем объект SMTP, указывая адрес сервера и номер порта. Затем мы используем `starttls()`, чтобы начать безопасное соединение и `login()`, чтобы авторизоваться на сервере. Затем мы отправляем электронное письмо с помощью метода `sendmail()`.
