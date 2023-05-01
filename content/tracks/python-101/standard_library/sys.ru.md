---
title: Модуль sys
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
weight: 202
---

Модуль **sys** предоставляет специфические для системы параметры и функции. Он содержит системную информацию и функции для взаимодействия со стандартными потоками ввода/вывода, аргументами командной строки и другими модулями Python.

`sys.argv` - список аргументов командной строки, переданных в программу при ее запуске. Первым аргументом обычно является имя файла программы.

`sys.executable` - путь к интерпретатору Python, который используется для запуска текущей программы.

`sys.exit([arg])` - завершает выполнение программы. Если задан аргумент, то он возвращается в качестве кода выхода.

`sys.modules` - словарь, содержащий все загруженные модули Python, включая стандартные и сторонние модули.

`sys.path` - список путей поиска модулей Python. Включает директории, содержащие стандартные модули, а также директории, перечисленные в переменной окружения `PYTHONPATH`.

`sys.platform` - строка, содержащая название операционной системы, на которой запущен Python.

`sys.stdin`, `sys.stdout`, `sys.stderr` - объекты для взаимодействия со стандартными потоками ввода/вывода.

Мы можем использовать `sys.argv` для получения доступа к аргументам командной строки:

```python
import sys

# Запуск: python my_program.py arg1 arg2
print(sys.argv)  # ['my_program.py', 'arg1', 'arg2']
```

Атрибут `sys.executable` может быть полезен, если требуется запустить текущую программу с другим интерпретатором Python:

```python
import sys
import subprocess

if 'win' in sys.platform:
    python_executable = 'python.exe'
else:
    python_executable = 'python'

subprocess.call([python_executable, 'my_program.py'])
```

`sys.exit()` используется для выхода из программы. Можно передать ей код возврата в качестве аргумента, который будет использоваться для определения статуса выхода:

```python
import sys

if len(sys.argv) < 2:
    print('Please specify a file to read')
    sys.exit(1)

filename = sys.argv[1]

# Чтение файла...
```

Мы можем использовать `sys.modules` для получения списка всех загруженных модулей:

```python
import sys

for name, module in sys.modules.items():
    print(name)
```

Константы `sys.stdin`, `sys.stdout` и `sys.stderr` являются стандартными потоками ввода, вывода и ошибок соответственно.

Например, если мы хотим написать программу, которая запрашивает у пользователя ввод и выводит результат на экран, мы можем использовать `sys.stdin` и `sys.stdout`:

```python
import sys

name = input("What is your name? ")
sys.stdout.write(f"Hello, {name}!\n")
```

Здесь мы запрашиваем у пользователя ввод с помощью функции `inp()` и выводим результат на экран с помощью `sys.stdout.write()`.

Аналогично, мы можем перенаправить вывод в файл, например:

```python
import sys

with open('output.txt', 'w') as f:
    sys.stdout = f
    print('Hello, world!')
```

Здесь мы перенаправляем стандартный вывод в файл "output.txt" с помощью операции присваивания `sys`.`stdout = f`. Далее, когда мы вызываем функцию print(), результат будет записан в файл вместо вывода на экран.
