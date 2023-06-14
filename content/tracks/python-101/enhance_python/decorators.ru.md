---
title: Декораторы
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: 2022-06-28
lastmod: 2023-02-04
draft: false
weight: 302
---

Декораторы в Python позволяют изменять поведение функций и методов, оборачивая их в другую функцию. В этом разделе мы рассмотрим несколько встроенных декораторов и создание собственного декоратора.

## @classmethod

Декоратор `@classmethod` используется для создания методов класса в Python. Методы класса имеют доступ к состоянию класса и могут использоваться без необходимости создания экземпляра класса. Методы класса можно вызывать как от самого класса, так и от его экземпляров.

Декоратор `@classmethod` применяется к методам класса. Он принимает первым аргументом класс (`cls`) вместо экземпляра класса (`self`).

```python
class MyClass:
    @classmethod
    def my_class_method(cls, arg1, arg2):
        print('Class:', cls, 'arg1:', arg1, 'arg2:', arg2)

MyClass.my_class_method('a', 'b')
```

## @staticmethod

Декоратор `@staticmethod` используется для создания статических методов в Python. Статические методы не имеют доступа к состоянию класса и могут использоваться без необходимости создания экземпляра класса. Статические методы можно вызывать как от самого класса, так и от его экземпляров.

Декоратор `@staticmethod` также применяется к методам класса. Он не принимает первый аргумент, связанный с классом.

```python
class MyClass:
    @staticmethod
    def my_static_method(arg1, arg2):
        print('arg1:', arg1, 'arg2:', arg2)

MyClass.my_static_method('a', 'b')
```

## @property

Декоратор `@property` используется для создания свойств класса в Python. Свойства класса обеспечивают доступ к закрытым переменным класса, так что они могут быть использованы без необходимости создания экземпляра класса. Доступ к свойствам можно получить как чтением, так и записью.

Декоратор `@property` используется для превращения метода в атрибут объекта. Метод, декорированный `@property`, может быть вызван как атрибут объекта, а не как метод.

```python
class MyClass:
    def __init__(self, x):
        self._x = x
    
    @property
    def x(self):
        return self._x

my_obj = MyClass(10)
print(my_obj.x) # 10
```

## @contextmanager

Декоратор `@contextmanager` используется для создания менеджера контекста в Python. Менеджеры контекста позволяют определять блоки кода, которые должны быть выполнены с определенными контекстными условиями, такими как открытие и закрытие файлов, установка и восстановление состояния объекта и т. д.

`@contextmanager` позволяет использовать функцию как менеджер контекста с использованием ключевого слова `with`.

```python
from contextlib import contextmanager

@contextmanager
def my_context():
    print('entering context')
    yield
    print('exiting context')

with my_context():
    print('inside context')
```

## @lru_cache

Декоратор `@lru_cache` используется для кэширования результатов функции. Он сохраняет результаты вызовов функции в памяти, чтобы избежать повторных вычислений.

`@lru_cache` использует алгоритм LRU (least recently used) для автоматического удаления наиболее неиспользуемых элементов из кэша.

```python
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(30))
```

## Создание декоратора

Для создания собственного декоратора в Python нужно определить функцию-обертку, которая будет принимать функцию в качестве аргумента и возвращать новую функцию, изменяющую поведение исходной функции.

Например, создадим декоратор, который будет выводить время выполнения функции:

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function '{func.__name__}' executed in {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timer
def my_func():
    time.sleep(2)

my_func()
```

Здесь мы определили функцию-обертку `wrapper`, которая принимает любое количество позиционных и именованных аргументов и вызывает исходную функцию `func` с этими аргументами. Затем мы измеряем время выполнения функции, выводим результат и возвращаем его.
