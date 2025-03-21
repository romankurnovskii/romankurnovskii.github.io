---
title: Как переименовать файлы в Python 
description: Различные способы переименовывания файлов в Python
toc: true
tags: [Python]
series:
categories: [программирование, Python]
date: "2022-06-04"
lastMod: "2022-06-04"
featuredImage: featured.ru.jpg
authors: []
---

## os.rename

Если имеется весь путь до пути файла:

```python
old_source = '/Users/r/Desktop/old_source.txt'
new_source = '/Users/r/Desktop/new_source.txt'
os.rename("old_source", "new_source")
```

Если имеется только имя файла, воспользуемся `os.path.splitext()`, который возвращает кортеж из имени файла и расширения:

```python
import os
for file in os.listdir():
    name, ext = os.path.splitext(file) # return ('путь до файла без расщирения', '.txt')
    new_name = f"{name}_new{ext}"
    os.rename(file, new_name)
```

## pathlib

С помощью встроенного модуля [pathlib](https://docs.python.org/3/library/pathlib.html)

```python
Path.rename(new_name)
```

```python
from pathlib import Path
for file in os.listdir():
    f = Path(file)
    new_name = f"{f.stem}_new{f.suffix}"
    f.rename(new_name)
```

## shutil.move

Модуль [Shutil](https://docs.python.org/3/library/shutil.html) предлагает ряд высокоуровневых операций с файлами и коллекциями файлов. В частности, предусмотрены функции, поддерживающие копирование и удаление файлов.

```python
import shutil

old_source = '/Users/r/Desktop/old_source.txt'
new_source = '/Users/r/Desktop/new_source.txt'

newFileName = shutil.move(old_source, new_source)

print("Новый файл:", newFileName)
# Новый файл: /Users/r/Desktop/new_source.txt
```
