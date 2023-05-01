---
title: Модуль os
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
weight: 201
---

Модуль `os` предоставляет функции для работы с операционной системой. Этот модуль позволяет получить доступ к файловой системе, управлять процессами, получать информацию об окружении и другие.

- os.listdir - получение списка файлов и директорий в указанной директории:
- os.mkdir() - создание директории
- os.system() - выполнение команды в командной строке
- os.getenv()
- os.putenv()
- os.remove() - удаление файла
- os.rename()
- os.startfile()
- os.walk() - дает способ итерации по пути корневого уровня
- [pathlib.Path.walk()](https://docs.python.org/3.12/library/pathlib.html#pathlib.Path.walk) - похожий на `os.walk()`. (Добавлен в 3.12)
- os.environ: словарь, содержащий переменные окружения, доступные в текущем процессе. Можно использовать для получения значения переменной окружения или для установки ее значения.
- os.getcwd(): возвращает текущую рабочую директорию.
- os.chdir(path): изменяет текущую рабочую директорию на указанную.
- os.path.join(path1, path2, ...): объединяет несколько путей в один, используя правильный разделитель для операционной системы.
- os.path.exists(path): возвращает True, если файл или директория по указанному пути существует.
- os.path.isfile(path): возвращает True, если путь указывает на существующий файл.
- os.path.isdir(path): возвращает True, если путь указывает на существующую директорию.
- os.makedirs(path): создает директории (в том числе вложенные), если они не существуют.
- os.rmdir(path): удаляет директорию, если она пуста.

```python
import os

files = os.listdir(".")
print(f"Files in current directory: {files}") #['file1.txt', 'file2.txt']

os.remove("file.txt")
os.system("ls -l")

# Получение значения переменной окружения
home_dir = os.environ['HOME']

# Установка значения переменной окружения
os.environ['MY_VAR'] = 'my_value'

# Получение текущей рабочей директории
current_dir = os.getcwd()

# Смена рабочей директории
os.chdir('/path/to/new/dir')

# Объединение нескольких путей
full_path = os.path.join('/path/to', 'file.txt')

# Проверка наличия файла
file_exists = os.path.exists('/path/to/file.txt')

# Проверка наличия директории
dir_exists = os.path.isdir('/path/to/dir')

# Создание директории
os.makedirs('/path/to/new/dir')

# Удаление директории
os.rmdir('/path/to/dir')

# Итерация по каталогам
for root, dirs, files in os.walk(path):
  print(root)
  for _dir in dirs:
      print(_dir)
  for _file in files:
      print(_file)
```
