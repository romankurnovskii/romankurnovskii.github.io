---
title: Классы
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
weight: 114
---


Все в Python является объектом. Это означает, что каждая сущность в Python имеет методы и значения. Причина в том, что в основе всего лежит класс.

```sh
>>> x = "Some String"
>>> dir(x)
['__add__', '__class__', '__contains__', '__delattr__', '__doc__', '__eq__',
'__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__',
'__getslice__', '__gt__', '__hash__', '__init__', '__le__', '__len__', '__lt__',
'__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__',
'__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__',
'_formatter_field_name_split', '_formatter_parser', 'capitalize', 'center', 'count',
'decode', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'index', 'isalnum',
'isalpha', 'isdigit', 'islower', 'isspace', 'istitle', 'isupper', 'join', 'ljust',
'lower', 'lstrip', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition',
'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title',
'translate', 'upper', 'zfill']
```

Здесь у нас есть строка, присвоенная переменной **x**. Может показаться, что это не так много, но у этой строки есть много методов. Если вы используете ключевое слово **dir** в Python, то сможете получить список всех методов, которые можно вызвать для вашей строки.

Технически мы не должны напрямую вызывать **методы**, начинающиеся с символов подчеркивания, но их можно вызвать.

Это значит, что строка основана на классе, а **x**- это **экземпляр** этого класса!

В Python мы можем создавать свои собственные классы.

## Создание класса

Создать класс в Python очень просто. Вот очень простой пример:

```python
class MyClass:
    my_attribute = 42

    def my_method(self):
        print("Hello, world!")
```

Здесь мы создали класс `MyClass`, который имеет атрибут `my_attribute` со значением `42` и метод `my_method`, который просто выводит сообщение в консоль.

Атрибуты класса могут быть доступны как через экземпляр класса, так и напрямую через класс:

```python
print(MyClass.my_attribute)  # 42

my_object = MyClass()
print(my_object.my_attribute)  # 42
```

Методы класса принимают в качестве первого аргумента экземпляр класса (`self`) и могут иметь доступ к атрибутам класса и вызывать другие методы класса:

```python
class MyClass:
    my_attribute = 42

    def my_method(self):
        print(self.my_attribute)

    def my_other_method(self):
        self.my_method()
```

Здесь мы добавили метод `my_other_method`, который просто вызывает метод `my_method`.

В Python существуют специальные методы, которые определяются с помощью двойного подчеркивания в начале и в конце названия метода. Например, метод `__init__` используется для инициализации экземпляра класса при его создании (конструкторы):

```python
class MyClass:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print("Hello, " + self.name + "!")
```

Здесь мы определили метод `__init__`, который принимает аргумент name и сохраняет его в атрибуте name. Метод say_hello использует этот атрибут для вывода сообщения.

Классы могут **наследовать** друг от друга, позволяя переопределять и расширять функциональность базового класса. Для этого используется ключевое слово super:

## Что такое self?

Классы Python нуждаются в способе обращения к самим себе. Это не какое-то самовлюбленное созерцание класса. Напротив, это способ отличить один экземпляр от другого.

Слово `self` - это способ самоописания любого объекта, в буквальном смысле.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        print("My name is {} and I'm {} years old.".format(self.name, self.age))

person1 = Person("Alice", 25)
person1.introduce()
```

Здесь `self.name` и `self.age` представляют атрибуты объекта `Person`, который вызывает метод `introduce`. Без использования `self` мы не могли бы получить доступ к атрибутам объекта из метода.

## Наследование

Наследование - это механизм, который позволяет создавать новый класс на основе уже существующего, наследуя его свойства и методы. Класс, от которого наследуется новый класс, называется родительским классом, а новый класс - дочерним классом.

Дочерний класс может использовать свойства и методы родительского класса, а также добавлять свои собственные свойства и методы. Это позволяет создавать более сложные иерархии классов, где дочерние классы наследуют общие свойства и методы от родительского класса, но могут быть уникальными в других отношениях.

```python
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def speak(self):
        print("I am an animal.")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, species="Canis")
        self.breed = breed
    
    def speak(self):
        print("Woof!")

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, species="Felis")
        self.color = color
    
    def speak(self):
        print("Meow!")

dog = Dog("Buddy", "Golden Retriever")
cat = Cat("Luna", "Black")

print(dog.name)   # Output: Buddy
print(dog.breed)  # Output: Golden Retriever
dog.speak()       # Output: Woof!

print(cat.name)   # Output: Luna
print(cat.color)  # Output: Black
cat.speak()       # Output: Meow!
```

В этом примере класс `Animal` является **родительским** классом для классов `Dog` и `Cat`.

Класс `Dog` **наследует** свойства `name` и `species` от класса `Animal` и добавляет свой собственный атрибут `breed`.

Класс `Cat` также наследует свойства `name` и `species` от класса `Animal` и добавляет свой собственный атрибут `color`.

У каждого класса есть свой метод `speak`, который переопределяет метод `speak` родительского класса `Animal`. Когда вызывается метод `speak` для экземпляра класса Dog, выводится строка "Woof!", а когда вызывается для экземпляра класса `Cat`, выводится строка "Meow!". (*Полиморфизм*)

**Ресурсы:**

- <https://vegibit.com/python-abstract-base-classes/>
