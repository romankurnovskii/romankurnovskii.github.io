---
title: 215. Kth Largest Element in an Array
seoTitle: LeetCode 215. Kth Largest Element in an Array | Решение на Python
description: LeetCode 215. Найти k-тый по величине элемент в неотсортированном массиве.
toc: true
tags: [Arrays, Sorting, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastMod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 215
---

[LeetCode задача 215](https://leetcode.com/problems/kth-largest-element-in-an-array/)

## Задача

Найти k-тый по величине элемент в неотсортированном массиве. Примечание: это k-тый по величине элемент в отсортированном порядке, а не k-тый различный элемент.

## Подсказки

1. Можно отсортировать массив и просто взять k-тый элемент с конца.
2. Для более эффективного решения можно использовать алгоритм быстрой выборки.

## Подход

В самом простом случае мы можем отсортировать массив и взять k-тый элемент с конца.

## Алгоритм

1. Сортируем массив.
2. Возвращаем k-тый элемент с конца.

## Решение

```python
def findKthLargest(nums, k):
    nums.sort()
    return nums[-k]
```
