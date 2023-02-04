---
title: 25. Декораторы
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: 2022-06-28
lastmod: 2023-01-09
draft: false
weight: 25
---

Декораторы в Python - это действительно здорово, но поначалу их может быть трудно понять. Декоратор в Python - это функция, которая принимает в качестве аргумента другую функцию. Декоратор обычно изменяет или улучшает функцию, которую он принял, и возвращает измененную функцию. Это означает, что при вызове декорированной функции вы получите функцию, которая может быть немного другой, иметь дополнительные возможности по сравнению с базовым определением. Но давайте вернемся немного назад. Возможно, нам следует рассмотреть основной строительный блок декоратора, а именно функцию.

## Простая функция

Функция - это блок кода, который начинается с ключевого слова **def** в Python, за которым следует фактическое имя функции. Функция может принимать от нуля и более аргументов, ключевые аргументы или сочетание этих аргументов. Функция всегда выдает результат. Если вы не укажете, что она должна возвращать, вернется **None**. Вот очень простая функция, которая просто возвращает строку:

```python
def a_function():
    """A pretty useless function"""
    return "1+1"

if __name__ == "__main__":
    value = a_function()
    print(value)
```

Все, что мы делаем в приведенном выше коде, - это вызываем функцию и печатаем возвращаемое значение. Давайте создадим еще одну функцию:

```python
def another_function(func):
    """
    A function that accepts another function
    """
    def other_func():
        val = "The result of %s is %s" % (func(),
                                          eval(func())
                                          )
        return val
    return other_func
```

Эта функция принимает один аргумент, и этот аргумент должен быть функцией или вызываемой. На самом деле, ее следует вызывать только с помощью ранее определенной функции. Вы заметите, что внутри этой функции есть вложенная функция, которую мы называем **other_func**. Она берет результат переданной ей функции, оценивает его и создает строку, рассказывающую о том, что она сделала, которую затем возвращает. Давайте посмотрим на полную версию кода:

```python
def another_function(func):
    """
    A function that accepts another function
    """

    def other_func():
        val = "The result of %s is %s" % (func(),
                                          eval(func())
                                          )
        return val
    return other_func

def a_function():
    """A pretty useless function"""
    return "1+1"

if __name__ == "__main__":
    value = a_function()
    print(value)
    decorator = another_function(a_function)
    print(decorator())
```

Вот как работает декоратор. Мы создаем одну функцию, а затем передаем ее во вторую функцию. Вторая функция является функцией **декоратора**. Декоратор изменяет или улучшает переданную ему функцию и возвращает модификацию. Если вы запустите этот код, вы должны увидеть следующее в качестве вывода в stdout:

```python
1+1
The result of 1+1 is 2
```

Давайте немного изменим код, чтобы превратить **another_function** в декоратор:

```python
def another_function(func):
    """
    A function that accepts another function
    """

    def other_func():
        val = "The result of %s is %s" % (func(),
                                          eval(func())
                                          )
        return val
    return other_func

@another_function
def a_function():
    """A pretty useless function"""
    return "1+1"

if __name__ == "__main__":
    value = a_function()
    print(value)
```

Вы заметите, что в Python декоратор начинается с символа @, за которым следует имя функции, которую мы собираемся "декорировать". Чтобы применить декоратор, достаточно поместить его в строку перед определением функции. Теперь, когда мы вызываем функцию **a_function**, она будет декорирована, и мы получим следующий результат:

```python
The result of 1+1 is 2
```

Давайте создадим декоратор, который действительно делает что-то полезное.

## Создание декоратора логирования

Иногда вы захотите создать лог того, что делает функция. В большинстве случаев вы, вероятно, будете вести журнал в самой функции. Иногда вы можете захотеть сделать это на уровне функции, чтобы получить представление о потоке программы или, возможно, для выполнения некоторых бизнес-правил, например, аудита. Вот небольшой декоратор, который мы можем использовать для записи имени любой функции и того, что она возвращает:

```python
import logging

def log(func):
    """
    Log what function is called
    """
    def wrap_log(*args, **kwargs):
        name = func.__name__
        logger = logging.getLogger(name)
        logger.setLevel(logging.INFO)

        # add file handler
        fh = logging.FileHandler("%s.log" % name)
        fmt = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        formatter = logging.Formatter(fmt)
        fh.setFormatter(formatter)
        logger.addHandler(fh)

        logger.info("Running function: %s" % name)
        result = func(*args, **kwargs)
        logger.info("Result: %s" % result)
        return func
    return wrap_log

@log
def double_function(a):
    """
    Double the input parameter
    """
    return a*2

if __name__ == "__main__":
    value = double_function(2)
```

Этот небольшой скрипт имеет функцию **log**, которая принимает функцию в качестве единственного аргумента. Она создаст объект logger и имя файла журнала на основе имени функции. Затем функция log будет записывать, какая функция была вызвана и что функция вернула, если таковая имеется.

## Встроенные декораторы

Python поставляется с несколькими встроенными декораторами. Основных три:

-  @classmethod
-  @staticmethod
-  @property

Также декораторы есть в различных частях стандартной библиотеки Python. Примером может служить **functools.wraps**.

## @classmethod и @staticmethod

Я никогда не использовал их сам, поэтому провел небольшое исследование. Декоратор **@classmethod** может быть вызван с экземпляром класса или непосредственно самим классом в качестве первого аргумента. Согласно документации Python: *ОВ соответствии с документацией Python: он может быть вызван как в классе (например, C.f()), или в экземпляре (например, C().f()). Экземпляр игнорируется, за исключением его класса. Если метод класса вызван для выведенного класса, то объект выведенного класса передается в качестве подразумеваемого первого аргумента.* Основной случай использования декоратора @classmethod, который я обнаружил в своем исследовании, - это альтернативный конструктор или вспомогательный метод для инициализации.

Декоратор **@staticmethod** - это просто функция внутри класса. Вы можете вызывать его как с инстанцированием класса, так и без него. Типичный случай использования - когда у вас есть функция, которая, по вашему мнению, связана с классом. По большей части это стилистический выбор.

Возможно, вам поможет пример кода, показывающий, как работают эти два декоратора:

```python
class DecoratorTest(object):
    """
    Test regular method vs @classmethod vs @staticmethod
    """

    def __init__(self):
        """Constructor"""
        pass

    def doubler(self, x):
        
        print("running doubler")
        return x*2

    @classmethod
    def class_tripler(klass, x):
        
        print("running tripler: %s" % klass)
        return x*3

    @staticmethod
    def static_quad(x):
        
        print("running quad")
        return x*4

if __name__ == "__main__":
    decor = DecoratorTest()
    print(decor.doubler(5))
    print(decor.class_tripler(3))
    print(DecoratorTest.class_tripler(3))
    print(DecoratorTest.static_quad(2))
    print(decor.static_quad(3))

    print(decor.doubler)
    print(decor.class_tripler)
    print(decor.static_quad)
```

Этот пример демонстрирует, что вы можете одинаково вызывать обычный метод и оба декорированных метода. Вы заметите, что декорированные функции @classmethod и @staticmethod можно вызывать непосредственно из класса или из экземпляра класса. Если вы попытаетесь вызвать обычную функцию из класса (например, DecoratorTest.doubler(2)), вы получите **TypeError**. Вы также заметите, что последний оператор печати показывает, что decor.static_quad возвращает обычную функцию, а не связанный метод.

## @contextmanager

- https://docs.python.org/3/library/contextlib.html

В Python есть механизм менеджмента контекста, который поможет вам правильно управлять ресурсами.

На примере оператора **with**:

```python
with open("test.txt",'w') as f:
    f.write("Yang is writing!")
```

Как показано в приведенном выше коде, мы можем открыть файл с помощью оператора with, чтобы он был закрыт автоматически после записи. Нам не нужно явно вызывать функцию f.close(), чтобы закрыть файл.

Иногда нам нужно определить **индивидуальный** менеджер контекста для каких-то особых требований.

Например, следующий код реализует простой настраиваемый контекстный менеджер, который может выводить соответствующую информацию при открытии или закрытии файла.

```python
from contextlib import contextmanager

@contextmanager
def file_manager(filename, mode):
    print("The file is opening...")
    file = open(filename,mode)
    yield file
    print("The file is closing...")
    file.close()

with file_manager('test.txt', 'w') as f:
    f.write('Yang is writing!')
# The file is opening...
# The file is closing...
```


## @property

> Настраиваем геттеры и сеттеры для классов

В Python декоратор **property** позволяет:

-  Преобразовать методы класса в атрибуты, доступные только для чтения.
-  Реализовать сеттеры и геттеры.

Один из самых простых способов использования свойства - использовать его в качестве декоратора метода. Это позволяет превратить метод класса в атрибут класса. Я нахожу это полезным, когда мне нужно сделать какую-то комбинацию значений. Другие находят это полезным для написания методов преобразования, к которым они хотят иметь доступ как к методам. Давайте рассмотрим простой пример:

```python
class Person(object):

    def __init__(self, first_name, last_name):
        """Constructor"""
        self.first_name = first_name
        self.last_name = last_name

    @property
    def full_name(self):
        """Return the full name """
        return "%s %s" % (self.first_name, self.last_name)
```

В приведенном выше коде мы создаем два атрибута или свойства класса: **self.first_name** и **self.last_name**. Затем мы создаем метод **full_name**, к которому прикреплен декоратор **@property**. Это позволяет нам сделать следующее в сессии интерпретатора:

```python
>>> person = Person("Иван", "Иванов")
>>> person.full_name
'Иван Иванов'

>>> person.first_name
'Иван'

>>> person.full_name = "Александр Иванович"
Traceback (most recent call last):
  File "<string>", line 1, in <fragment>
AttributeError: can't set attribute
```

Как видите, поскольку мы превратили метод в свойство, мы можем обращаться к нему, используя обычную точечную нотацию. Однако, если мы попытаемся установить свойство на что-то другое, мы вызовем ошибку **AttributeError.** Единственный способ изменить свойство **full_name** - сделать это косвенно:

```python
>>> person.first_name = "Иван"
>>> person.full_name
'Иван Иванов'
```

Это несколько ограничивает возможности, поэтому давайте рассмотрим другой пример, где мы можем создать свойство, которое позволит нам устанавливать его.

### Замена сеттеров и геттеров с помощью @property

Давайте представим, что у нас есть старый код, который написал кто-то, кто не очень хорошо понимал Python. Если вы похожи на меня, вы уже сталкивались с подобным кодом:

```python
from decimal import Decimal

class Fees(object):
    

    def __init__(self):
        """Constructor"""
        self._fee = None

    def get_fee(self):
        """
        Return the current fee
        """
        return self._fee

    def set_fee(self, value):
        """
        Set the fee
        """
        if isinstance(value, str):
            self._fee = Decimal(value)
        elif isinstance(value, Decimal):
            self._fee = value
```

Чтобы использовать этот класс, мы должны использовать сеттеры и геттеры, которые определены:

```python
>>> f = Fees()
>>> f.set_fee("1")
>>> f.get_fee()
Decimal('1')
```

Если вы хотите добавить в этот код обычный доступ к атрибутам в точечной нотации, не ломая все приложения, которые зависят от этого куска кода, вы можете изменить его очень просто, добавив свойство:

```python
from decimal import Decimal

class Fees(object):
    

    def __init__(self):
        """Constructor"""
        self._fee = None

    def get_fee(self):
        """
        Return the current fee
        """
        return self._fee

    def set_fee(self, value):
        """
        Set the fee
        """
        if isinstance(value, str):
            self._fee = Decimal(value)
        elif isinstance(value, Decimal):
            self._fee = value

    fee = property(get_fee, set_fee)

```

Мы добавили одну строку в конец этого кода. Теперь мы можем делать что-то вроде этого:

```python
>>> f = Fees()
>>> f.set_fee("1")
>>> f.fee
Decimal('1')
>>> f.fee = "2"
>>> f.get_fee()
Decimal('2')
```
Как вы можете видеть, когда мы используем **property** таким образом, это позволяет свойству fee устанавливать и получать значение самостоятельно, не нарушая унаследованный код. Давайте перепишем этот код с использованием декоратора property и посмотрим, сможем ли мы заставить его разрешить установку.

```python
from decimal import Decimal

class Fees(object):
    def __init__(self):
        """Constructor"""
        self._fee = None

    @property
    def fee(self):
        """
        The fee property - the getter
        """
        return self._fee

    @fee.setter
    def fee(self, value):
        """
        The setter of the fee property
        """
        if isinstance(value, str):
            self._fee = Decimal(value)
        elif isinstance(value, Decimal):
            self._fee = value

if __name__ == "__main__":
    f = Fees()

```

Приведенный выше код демонстрирует, как создать "сеттер" для свойства fee. Это можно сделать, украсив второй метод, который также называется fee, декоратором **@fee.setter**. Сеттер вызывается, когда вы делаете что-то вроде этого:

```python
>>> f = Fees()
>>> f.fee = "1"
```

Если вы посмотрите на сигнатуру для **property**, то в качестве "аргументов" в ней указаны fget, fset, fdel и doc. Вы можете создать другой декорированный метод с тем же именем, чтобы он соответствовал функции удаления, используя **@fee.deleter**, если вы хотите перехватить команду **del** для атрибута.

## @lru_cache

- https://docs.python.org/3/library/functools.html

> Ускоряем программы кэшированием

Этот декоратор можно использовать для кэширования результатов функции, так что последующие вызовы функции с теми же аргументами не будут выполняться снова.

Это особенно полезно для функций, которые требуют больших вычислительных затрат или часто вызываются с одними и теми же аргументами.

```python
from functools import lru_cache
import time


@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


start_time = time.perf_counter()
print(fibonacci(30))
end_time = time.perf_counter()
print(f"The execution time: {end_time - start_time:.8f} seconds")
# The execution time: 0.00002990 seconds
```

Декоратор `@lru_cache` имеет параметр `maxsize`, который определяет максимальное количество результатов для хранения в кэше. Когда кэш заполнен и необходимо сохранить новый результат, наименее использованный результат вытесняется из кэша, чтобы освободить место для нового. Это называется стратегией наименее использованного результата (LRU).

По умолчанию `maxsize` установлен на 128. Если для `maxsize` установлено значение None, функция LRU отключена, и кэш может неограниченно увеличиваться.


## Ресурсы

- https://habr.com/ru/post/709280/
