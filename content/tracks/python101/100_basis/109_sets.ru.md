---
title: Множества
description: Python 101
toc: true
authors:
tags:
categories:
series:
featuredImage:
date: "2022-06-28"
lastmod: 2023-02-16
draft: false
weight: 109
---

## Создание

Множество можно создать, используя фигурные скобки `{}` или функцию `set()`:

```python
my_set = {1, 2, 3}
print(my_set) # {1, 2, 3}

my_set = set([1, 2, 3])
print(my_set) # {1, 2, 3}
```


## Методы

- add(): добавляет элемент в множество.
- remove(): удаляет элемент из множества. Если элемента нет в множестве, возбуждается исключение.
- discard(): удаляет элемент из множества. Если элемента нет в множестве, ничего не происходит.
- union(): возвращает объединение двух множеств.
- intersection(): возвращает пересечение двух множеств.
- difference(): возвращает разность двух множеств.
- symmetric_difference(): возвращает симметрическую разность двух множеств.

Также: `'copy', 'difference', 'difference_update', 'discard', 'intersection', 'intersection_update', 'isdisjoint', 'issubset', 'issuperset', 'pop', 'remove', 'symmetric_difference', 'symmetric_difference_update', 'union', 'update'`

```python
my_set = {1, 2, 3}
print(my_set) # {1, 2, 3}

# Добавление элемента
my_set.add(4)
print(my_set) # {1, 2, 3, 4}

# Удаление элемента
my_set.remove(2)
print(my_set) # {1, 3, 4}

# Объединение множеств
other_set = {3, 4, 5}
union_set = my_set.union(other_set)
print(union_set) # {1, 3, 4, 5}

# Пересечение множеств
intersection_set = my_set.intersection(other_set)
print(intersection_set) # {3, 4}

# Разность множеств
difference_set = my_set.difference(other_set)
print(difference_set) # {1}

# Симметрическая разность множеств
symmetric_difference_set = my_set.symmetric_difference(other_set)
print(symmetric_difference_set) # {1, 5}
```

## Применение

Множества могут использоваться для проверки наличия элемента или для удаления дубликатов из списка:

```python
my_list = [1, 2, 2, 3, 4, 4, 5]
my_set = set(my_list)
print(my_set) # {1, 2, 3, 4, 5}

# Проверка наличия элемента
if 3 in my_set:
    print("3 есть в множестве")

# Удаление дубликатов из списка
my_list = list(my_set)
print(my_list) # [1, 2, 3, 4, 5]
```

## Ресурсы

- [Множества в Python](https://habr.com/ru/company/wunderfund/blog/693592/)