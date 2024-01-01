---
title: Пакет requests
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: 2022-06-28
lastMod: "2022-06-28"
draft: false
weight: 352
---

Модуль `requests` - это сторонняя библиотека Python для отправки HTTP-запросов. Он предоставляет удобный и простой API для отправки GET-, POST-, PUT-, DELETE- и других типов запросов.

Установить `requests` можно с помощью менеджера пакетов pip:

```
pip install requests
```

Пример GET-запроса:

```python
import requests

response = requests.get("https://www.example.com")
print(response.status_code)
print(response.text)
```

Пример POST-запроса:

```python
import requests

payload = {'key1': 'value1', 'key2': 'value2'}
response = requests.post("https://site.org/post", data=payload)
print(response.status_code)
print(response.json())
```

Модуль requests также поддерживает отправку запросов с использованием сессий, установку заголовков, аутентификацию и другие полезные функции для работы с HTTP-запросами.

**Ресурсы:**

- <https://www.w3schools.com/python/module_requests.asp>
