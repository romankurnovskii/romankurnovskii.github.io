---
title: 251. Flatten 2D Vector
seoTitle: LeetCode 251. Flatten 2D Vector | Решение на Python
description: LeetCode 251. Преобразование 2D вектора в 1D вектор.
toc: true
tags: [Design, Iterators, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastMod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 251
---

[LeetCode задача 251](https://leetcode.com/problems/flatten-2d-vector/)

## Задача

Дизайн и реализация итератора для 2D вектора. Итератор должен быть инициализирован 2D вектором (`vector<vector<int>>`) и должен поддерживать следующие операции:

- `next()`: Возвращает следующий элемент из 2D вектора. Если нет больше элементов, возвращает 0.
- `hasNext()`: Возвращает `True`, если в 2D векторе есть следующий элемент, и `False` в противном случае.

## Подход

Мы можем использовать две переменные: одну для текущего индекса строки и одну для текущего индекса столбца, чтобы навигироваться по 2D вектору.

## Алгоритм

1. Инициализируем переменные `row` и `col` в конструкторе.
2. В методе `next()`, возвращаем элемент в текущем `row` и `col`, и двигаем индексы на следующий доступный элемент.
3. В методе `hasNext()`, проверяем, есть ли следующий доступный элемент в 2D векторе.

## Решение

```python
class Vector2D:

    def __init__(self, vec: list[list[int]]):
        self.vec = vec
        self.row = 0
        self.col = 0

    def next(self) -> int:
        self._advance_to_next()
        result = self.vec[self.row][self.col]
        self.col += 1
        return result

    def hasNext(self) -> bool:
        self._advance_to_next()
        return self.row < len(self.vec)

    def _advance_to_next(self):
        while self.row < len(self.vec) and self.col == len(self.vec[self.row]):
            self.row += 1
            self.col = 0
```
