---
title: 4. Median of Two Sorted Arrays
seoTitle: LeetCode 4. Median of Two Sorted Arrays | Решение на Python
description: LeetCode 4. Найти медиану двух отсортированных массивов. Разбор задачи.
toc: true
tags: [Array, Binary Search, Hard]
categories: [Algorithms, Hard, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 4
---

[LeetCode задача 4](https://leetcode.com/problems/median-of-two-sorted-arrays)

## Задача

Даны два отсортированных массива nums1 и nums2 размера m и n соответственно. Найти медиану двух отсортированных массивов.

## Подсказки

Чтобы найти медиану, нужно сначала объединить два массива и отсортировать их. После этого медиана будет либо средним элементом, если общее количество элементов нечетное, либо средним значением двух центральных элементов, если общее количество элементов четное.

## Подход

Мы можем объединить два массива в один большой отсортированный массив и найти медиану этого массива. Этот подход не самый эффективный, но он прост и понятен.

## Алгоритм

Объедините два массива.
Отсортируйте объединенный массив.
Найдите медиану отсортированного массива.

## Решение

```python
def findMedianSortedArrays(nums1, nums2):
    # Шаг 1: Объединение двух массивов
    merged = nums1 + nums2
    
    # Шаг 2: Сортировка объединенного массива
    merged.sort()
    
    # Шаг 3: Поиск медианы
    n = len(merged)
    middle = n // 2
    
    # Если n четное
    if n % 2 == 0:
        return (merged[middle - 1] + merged[middle]) / 2
    # Если n нечетное
    else:
        return merged[middle]
```
