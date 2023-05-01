---
title: Условия
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: "2022-06-28"
lastmod: 2022-12-22
draft: false
weight: 111
---

В каждом компьютерном языке есть хотя бы один условный оператор. Чаще всего этот оператор представляет собой структуру **if/elif/else**.

В [Python 3.10](https://www.python.org/downloads/release/python-3100/) добавилась структура [**match/case**](https://peps.python.org/pep-0636/)

## Оператор if

Позволяет выполнить блок кода, если определенное условие истинно

```python
x = 5
if x > 0:
    print("x is positive")
elif x < 0:
    print("x is negative")
else:
    print("x is zero")
```

## match/case

```python
def get_day_name(day):
    match day:
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        case _:
            return "Invalid day"
```

```python
match command.split():
    case ["quit"]:
        print("Goodbye!")
        quit_game()
    case ["look"]:
        current_room.describe()
    case ["get", obj]:
        character.get(obj, current_room)
    case ["go", direction]:
        current_room = current_room.neighbor(direction)
```

## or/and/not

- `or` означает, что если любое условие, которое "перечислено" вместе, равно True, то выполняется следующее утверждение
- `and` означает, что для выполнения следующего утверждения все утверждения должны быть True
- `not` означает, что если условие оценивается как False, то оно является True. На мой взгляд, это самый запутанный вариант.

```python
x = 5
y = 10
if x > 0 and y > 0:
    print("Both x and y are positive")
if x > 0 or y > 0:
    print("At least one of x and y is positive")
if not x < 0:
    print("x is not negative")
```

```python
my_list = [1, 2, 3, 4]
x = 10
if x not in my_list:
    print("'x' is not in the list, so this is True!")
```

## Проверка на ничто (None)

В Python `None` используется, чтобы обозначить отсутствие значения. Это можно использовать в условных операторах, чтобы проверить, имеет ли переменная значение `None`.

Например, если мы хотим проверить, имеет ли переменная `x` значение `None`, мы можем написать:

```python
if x is None:
    print("x is None")
```

Мы также можем использовать оператор `is not` для проверки, имеет ли переменная значение, отличное от `None`:

```python
if x is not None:
    print("x is not None")
```

Здесь мы используем условный оператор if, чтобы проверить, имеет ли переменная x значение None. Если это так, мы выводим сообщение "x is None". Если переменная x имеет какое-то другое значение, мы ничего не выводим.

Это может быть полезно, если мы не знаем, какое значение будет иметь переменная, или если переменная может быть пустой.

## if **name** == “**main**”

Оператор if name == "main" используется для определения, запущен ли файл напрямую или импортирован как модуль. Если файл запущен напрямую, блок кода внутри этого условия будет выполнен, если же файл импортирован как модуль, этот блок кода не будет выполнен:

```python
if __name__ == "__main__":
    # код, который будет выполнен только при запуске файла напрямую
```

Располагается в конце файла. Это говорит Python, что вы хотите выполнить следующий код, только если эта программа будет выполнена как отдельный файл.
