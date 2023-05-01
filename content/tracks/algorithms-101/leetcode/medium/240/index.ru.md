---
title: 240. Search a 2D Matrix II
seoTitle: LeetCode 240. Search a 2D Matrix II | Решение на Python
description: LeetCode 240. Найти элемент в 2D матрице.
toc: true
tags: [Arrays, Binary Search, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 240
---

[LeetCode задача 240](https://leetcode.com/problems/search-a-2d-matrix-ii/)

## Задача

Вам дана двумерная матрица размера m x n, представляющая прямоугольник, и целое число `target`. Отсортированные строки матрицы по неубыванию с лева направо и столбцы отсортированы по неубыванию сверху вниз.

Найдите элемент `target` в матрице. Верните `True`, если элемент `target` есть в матрице, и `False`, если его нет.

## Подсказки

Попробуйте использовать двоичный поиск для каждого ряда.

## Подход

Самый простой подход - использовать двоичный поиск для каждого ряда. Хотя это не самый эффективный метод, он достаточно прост для понимания.

## Алгоритм

1. Пройдитесь по каждому ряду в матрице.
2. В каждом ряду используйте двоичный поиск для поиска `target`.

## Решение

```python
from bisect import bisect_left

def searchMatrix(matrix, target):
    for row in matrix:
        pos = bisect_left(row, target)
        if pos != len(row) and row[pos] == target:
            return True
    return False
```
