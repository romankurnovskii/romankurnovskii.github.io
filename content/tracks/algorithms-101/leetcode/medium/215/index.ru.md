---
title: 215. Kth Largest Element in an Array
seoTitle: LeetCode 215. Kth Largest Element in an Array | Решение на Python
description: LeetCode 215. Найти k-тый по величине элемент в неотсортированном массиве.
toc: true
tags: [Arrays, Sorting, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastmod: 2024-02-10
featuredImage: https://picsum.photos/700/218?grayscale
weight: 215
---

[LeetCode задача 215](https://leetcode.com/problems/kth-largest-element-in-an-array/)

## Задача

Найти `k`-й по величине элемент в неотсортированном массиве. Примечание: это `k`-й по величине элемент в отсортированном порядке, а не `k`-й различный элемент.

## Подсказки

1. Можно отсортировать массив и просто взять `k`-й элемент с конца.
2. Для более эффективного решения можно использовать алгоритм быстрой выборки.

## Подход

В самом простом случае мы можем отсортировать массив и взять `k`-й элемент с конца.

## Алгоритм

1. Сортируем массив.
2. Возвращаем `k`-й элемент с конца.

## Решение

```python
def findKthLargest(nums, k):
    nums.sort()
    return nums[-k]
```

## Оптимальное решение

На собеседованиях обычно ожидают от кандидата более эффективного решения. Существует два классических способа найти статистику порядка в линейное время `O(n)`:

Подход "медиана медиан" с худшим временем выполнения `O(n)`, однако реализация довольно сложная.
Метод быстрого выбора (**Quick Select**), использующий идею быстрой сортировки, со средней временной сложностью `O(n)`.

### Quick Select

Мы сосредоточимся на методе Quick Select, поскольку его проще реализовать:

Сначала выбираем опорный элемент (`pivot`) и разделяем элементы массива на три группы: элементы меньше опорного, равные опорному и больше опорного.
Затем смотрим, сколько элементов в каждой группе: если `k <= left_len`, где `left_len` - размер левой группы, то нужно искать элемент в левой части. Если `k > left_len + mid_len`, где `mid_len` - размер средней группы, то искать нужно в правой части. Если ни одно из этих условий не выполняется, значит, `k`-й элемент находится среди элементов, равных опорному, и мы можем сразу вернуть `mid[0]`.
Процесс повторяется рекурсивно, пока не будет найден `k`-й элемент.

### Решение

```python
def findKthLargest(self, nums: List[int], k: int) -> int:
    import random
    if not nums:
        return None
    pivot = random.choice(nums)
    left  = [x for x in nums if x > pivot] # greater than the pivot
    mid   = [x for x in nums if x == pivot] # equal to the pivot.
    right = [x for x in nums if x < pivot] # less than the pivot
    
    left_len = len(left)
    mid_len = len(mid)
    
    if k <= left_len:
        return self.findKthLargest(left, k)
    elif k > left_len + mid_len:
        return self.findKthLargest(right, k - left_len - mid_len)
    else:
        return mid[0]
```
