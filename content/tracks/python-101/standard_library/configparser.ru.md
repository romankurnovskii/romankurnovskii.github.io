---
title: Модуль configparser
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: "2022-06-28"
lastmod: "2022-06-28"
draft: false
weight: 208
---

Модуль `configparser` позволяет работать с конфигурационными файлами в Python.

Для использования модуля `configparser` нужно сначала импортировать его:

```python
import configparser
```

Для чтения конфигурационного файла используется метод `configparser.ConfigParser()` с методом `read()`:

```python
config = configparser.ConfigParser()
config.read('config.ini')
```

Для записи в конфигурационный файл используется метод write():

```python
config.set('section', 'option', 'value')
with open('config.ini', 'w') as f:
    config.write(f)
```

Пример работы с конфигурационным файлом:

```python
import configparser

# Создаем объект ConfigParser
config = configparser.ConfigParser()

# Читаем конфигурационный файл
config.read('config.ini')

# Получаем значение параметра из секции
db_name = config.get('database', 'db_name')

# Меняем значение параметра и записываем изменения в файл
config.set('database', 'db_name', 'new_db_name')
with open('config.ini', 'w') as f:
    config.write(f)
```

Конфигурационный файл может иметь несколько секций, каждая из которых может иметь набор параметров со значениями. Например:

```
[database]
db_name=my_db
db_user=user_name
db_password=secret_password

[server]
host=127.0.0.1
port=8080
```

В данном примере есть две секции: `[database]` и `[server]`. Каждая секция содержит набор параметров со значениями.

Модуль `configparser` позволяет легко работать с этими параметрами, как с обычными переменными. Например, для получения значения параметра db_name из секции database нужно выполнить следующий код:

```python
db_name = config.get('database', 'db_name')
```

Параметры в файле могут быть определены без значения, только с именем параметра. В этом случае для получения значения параметра нужно использовать метод `getboolean()`, `getint()` или `getfloat()` в зависимости от типа значения параметра.



