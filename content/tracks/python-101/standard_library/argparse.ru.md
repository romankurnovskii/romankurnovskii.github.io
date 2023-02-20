---
title: Модуль argparse
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: 2023-02-20
lastmod: 2023-02-20
draft: false
weight: 207
---

Модуль `argparse` позволяет легко парсить аргументы командной строки.

Это может быть полезно для создания сценариев командной строки, которые должны принимать аргументы от пользователя, например, при написании утилит командной строки.

Пример:

```python
#script.py
import argparse

parser = argparse.ArgumentParser(description='Process some integers.')
parser.add_argument('integers', metavar='N', type=int, nargs='+',
                    help='an integer for the accumulator')
parser.add_argument('--sum', dest='accumulate', action='store_const',
                    const=sum, default=max,
                    help='sum the integers (default: find the max)')

args = parser.parse_args()
print(args.accumulate(args.integers))
```

В этом примере мы создали парсер аргументов командной строки с помощью argparse, который принимает целочисленные значения и может вычислить их сумму или максимальное значение. При запуске скрипта мы можем указать значения, например:

```python
python script.py 1 2 3 4 --sum
```

**Resources:**

- [argparse tutorial | python.org](https://docs.python.org/3/howto/argparse.html#id1)
