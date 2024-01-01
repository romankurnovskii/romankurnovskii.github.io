---
title: 384. Shuffle an Array
seoTitle: LeetCode 384. Shuffle an Array | Решение на Python.
description: LeetCode 384. Перемешивание массива. Разбор задачи.
toc: true
tags: [Array, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastMod: 2023-08-28
weight: 384
featuredImage: https://picsum.photos/700/241?grayscale
---

[LeetCode задача 384](<https://leetcode.com/problems/shuffle-an-array/>)

## Задача

Реализуйте класс, который принимает массив чисел в конструкторе и предоставляет метод для их случайного перемешивания, а также метод для возвращения исходного массива.

## Подсказки

Для создания случайного порядка элементов можно использовать алгоритм Фишера-Йетса или другие методы перемешивания.

## Подход

1. **Инициализация**: Сохранить исходный массив в переменной класса для дальнейшего использования.
2. **reset()**: Вернуть исходный массив.
3. **shuffle()**: Вернуть перемешанный массив.

Из всех возможных подходов к решению этой задачи, наиболее простым является использование встроенного метода `random.shuffle()` из Python стандартной библиотеки для перемешивания массива. В этом случае, вы просто создаете копию исходного массива и применяете к ней метод `random.shuffle()`.

## Алгоритм

1. Сохранить исходный массив в переменной класса.
2. В методе `reset()` просто вернуть исходный массив.
3. В методе `shuffle()` создать копию исходного массива, перемешать её и вернуть.

## Решение

```python
import random

class Solution:

    def __init__(self, nums):
        self.original = nums

    def reset(self):
        return self.original

    def shuffle(self):
        shuffled = self.original.copy()  # создаем копию исходного массива
        random.shuffle(shuffled)  # перемешиваем копию
        return shuffled
```
