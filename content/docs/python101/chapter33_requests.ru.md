---
title: 33. Пакет requests
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: 2022-06-28
lastmod: "2022-06-28"
draft: false
weight: 33
---


Пакет `requests` - это более питоническая замена для собственного `urllib` в Python. API пакета requests во многом проще в работе. 

## Использование requests

Давайте рассмотрим несколько примеров использования пакета requests. Мы будем использовать серию небольших фрагментов кода, чтобы помочь объяснить, как использовать эту библиотеку.

```python
>>> r = requests.get("http://www.google.com")

```

Этот пример возвращает объект **Response**. Вы можете использовать методы объекта Response, чтобы узнать много нового о том, как можно использовать запросы. Давайте воспользуемся функцией **dir** в Python, чтобы посмотреть, какие методы нам доступны:

```python
>>> dir(r)
['__attrs__', '__bool__', '__class__', '__delattr__', '__dict__',
'__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__',
'__getstate__', '__gt__', '__hash__', '__init__', '__iter__', '__le__', '__lt__',
'__module__', '__ne__', '__new__', '__nonzero__', '__reduce__', '__reduce_ex__',
'__repr__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__',
'__weakref__', '_content', '_content_consumed', 'apparent_encoding', 'close',
'connection', 'content', 'cookies', 'elapsed', 'encoding', 'headers', 'history',
'iter_content', 'iter_lines', 'json', 'links', 'ok', 'raise_for_status', 'raw',
'reason', 'request', 'status_code', 'text', 'url']
```

Если вы запустите следующий метод, вы сможете увидеть исходный код веб-страницы:

```python
>>> r.text
```

Вывод этой команды слишком длинный, чтобы включать его в книгу, поэтому обязательно попробуйте сами. Если вы хотите взглянуть на заголовки веб-страниц, вы можете выполнить следующее:

```python
>>> r.headers
```

Обратите внимание, что атрибут **headers** возвращает диктоподобный объект и не является вызовом функции. Мы не показываем вывод, так как заголовки веб-страниц имеют тенденцию быть слишком широкими, чтобы правильно отображаться в книге. В объекте Response есть множество других замечательных функций и атрибутов. Например, вы можете получить cookies, ссылки на странице и status_code, который вернула страница.

Пакет requests поддерживает следующие типы HTTP-запросов: POST, GET, PUT, DELETE, HEAD и OPTIONS. Если страница возвращает json, вы можете получить к нему доступ, вызвав метод json объекта Response. Давайте рассмотрим практический пример.

## Как отправить веб-форму

В этом разделе мы сравним отправку веб-формы с помощью requests и urllib. Давайте начнем с изучения того, как отправить веб-форму. Мы будем выполнять веб-поиск на сайте **duckduckgo.com** по термину *python* и сохранять результат в виде HTML-файла. Мы начнем с примера, в котором используется urllib:

```python
import urllib.request
import urllib.parse
import webbrowser

data = urllib.parse.urlencode({'q': 'Python'})
url = 'http://duckduckgo.com/html/'
full_url = url + '?' + data
response = urllib.request.urlopen(full_url)
with open("results.html", "wb") as f:
    f.write(response.read())

webbrowser.open("results.html")
```

Первое, что вам нужно сделать, когда вы хотите отправить веб-форму, - это выяснить, как называется форма и каков url, на который вы будете отправлять сообщение. Если вы перейдете на сайт duckduckgo и просмотрите источник, вы заметите, что его действие указывает на относительную ссылку "/html". Таким образом, наш url будет "http://duckduckgo.com/html". Поле ввода имеет имя "q", поэтому, чтобы передать duckduckgo поисковый запрос, мы должны конкатенировать url с полем "q". Результаты считываются и записываются на диск. Теперь давайте выясним, чем отличается этот процесс при использовании пакета requests.

Пакет requests выполняет отправку форм немного более элегантно. Давайте посмотрим:

```python
import requests

url = 'https://duckduckgo.com/html/'
payload = {'q':'python'}
r = requests.get(url, params=payload)
with open("requests_results.html", "wb") as f:
    f.write(r.content)
```

При использовании запросов вам просто нужно создать словарь с именем поля в качестве ключа и поисковым термином в качестве значения. Затем вы используете **requests.get** для выполнения поиска. Наконец, вы используете полученный объект requests, "r", и обращаетесь к его свойству content, которое сохраняете на диске.

## Ресурсы

- https://www.w3schools.com/python/module_requests.asp