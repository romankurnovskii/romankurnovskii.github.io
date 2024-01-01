---
title: 287. Find the Duplicate Number
seoTitle: LeetCode 287. Find the Duplicate Number | Решение на Python
description: LeetCode 287. Найти дублирующее число в массиве.
toc: true
tags: [Array, Binary Search, Two Pointers, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastMod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 287
---

[LeetCode задача 287](https://leetcode.com/problems/find-the-duplicate-number/)

## Задача

Дан массив `nums` размера `n + 1`, в котором каждый элемент принимает значение от `1` до `n`, что означает, что как минимум одно число будет дублироваться.

Найдите это дублирующееся число.

## Подход

Один из способов решения задачи — использование двух указателей (`tortoise` и `hare`), что известно как "алгоритм зайца и черепахи" для нахождения цикла в связанном списке.

## Алгоритм

1. Инициализируем два указателя: `tortoise` и `hare`.
2. Используем их для прохода по массиву: `tortoise` двигается на один шаг, а `hare` — на два.
3. Как только они встретятся, начнем новый проход с `tortoise` из начального положения и `hare` из точки встречи, двигая их на один шаг, пока они не встретятся снова.

## Решение

```python
def findDuplicate(nums):
    tortoise = hare = nums[0]   # 1: Using Floyd's Tortoise and Hare (Cycle Detection)
    while True:
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]
        if tortoise == hare:
            break

    tortoise = nums[0]          # 2: Find the entrance to the cycle
    while tortoise != hare:
        tortoise = nums[tortoise]
        hare = nums[hare]
        
    return hare
```
