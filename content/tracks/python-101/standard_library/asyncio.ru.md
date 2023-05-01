---
title: Модуль asyncio
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: 2023-01-10
draft: false
weight: 210
---

> Асинхронное программирование — это концепция программирования, при применении которой запуск длительных операций происходит без ожидания их завершения и не блокирует дальнейшее выполнение программы.

> Корутина — это более общая форма подпрограмм. Подпрограммы имеют одну точку входа и одну точку выхода. А корутины поддерживают множество точек входа, выхода и возобновления их выполнения.

Python модуль [`asyncio`](https://docs.python.org/3/library/asyncio.html) позволяет заниматься асинхронным программированием с применением конкурентного выполнения кода, основанного на корутинах.

Вот план использования модуля `asyncio`:

```python
import asyncio

# Определение асинхронной функции с помощью ключевого слова async.
async def my_coroutine():
    # code here

# Создание цикла событий
loop = asyncio.get_event_loop()

# Запуск сопрограммы 
loop.run_until_complete(my_coroutine())

# обход асинхронного итератора
async for item in async_iterator:
    print(item)
```

Можно использовать функцию `asyncio.gather()` для выполнения нескольких сопрограмм параллельно:

```python
async def coroutine1():
    print("coroutine1 start")
    await asyncio.sleep(1)
    print("coroutine1 end")

async def coroutine2():
    print("coroutine2 start")
    await asyncio.sleep(2)
    print("coroutine2 end")

async def main():
    await asyncio.gather(coroutine1(), coroutine2())

loop.run_until_complete(main())
```

В этом примере две сопрограммы `coroutine1()` и `coroutine2()` запускаются параллельно с помощью функции `asyncio.gather()`, которая возвращает результаты выполнения всех сопрограмм.

**Ресурсы:**

- [руководство по модулю asyncio в Python | habr](https://habr.com/ru/company/wunderfund/blog/700474/)
