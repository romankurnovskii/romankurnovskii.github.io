---
title: 605. Can Place Flowers
seoTitle: LeetCode 605. Can Place Flowers | Решение на Python.
description: LeetCode 605. Можно ли посадить n цветов на грядке, следуя правилу "нет соседних цветов".
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-28
lastmod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 605
---

[LeetCode задача 605](https://leetcode.com/problems/can-place-flowers/)

## Задача

Дана длинная грядка, на которой некоторые участки уже засажены, а некоторые нет. Однако цветы нельзя сажать на соседние участки.

## Подход

Чтобы решить эту задачу, мы будем итерироваться по каждому участку грядки. Если участок пустой и его соседи (если они существуют) тоже пусты, мы сажаем цветок и уменьшаем наш счетчик.

## Алгоритм

1. Итерируемся по каждому участку грядки.
2. Если участок пустой, проверяем его соседей.
   - Если левый сосед пустой или его нет (начало грядки), проверяем правого соседа.
   - Если правый сосед пустой или его нет (конец грядки), сажаем цветок на текущий участок и уменьшаем `n`.
3. В конце проверяем, достиг ли `n` нуля или стал отрицательным.
   - Если да, то это означает, что мы можем посадить все цветы.

## Решение

```python
def canPlaceFlowers(flowerbed, n):
    def check_neighbors(n):
        if i < len(flowerbed) - 1:
            if flowerbed[i+1] == 0: #2.2
                flowerbed[i] = 1
                n -= 1
        else:
            flowerbed[i] = 1
            n -= 1
        return n

    for i in range(len(flowerbed)):  #1
        if flowerbed[i] == 0:  #2
            if i > 0:
                if flowerbed[i-1] == 0: #2.1
                    n = check_neighbors(n)
            else:
                n = check_neighbors(n)
    return n <= 0  #3
```
