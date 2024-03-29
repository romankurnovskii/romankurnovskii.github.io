---
title: 300. Longest Increasing Subsequence
seoTitle: LeetCode 300. Longest Increasing Subsequence | Решение на Python.
description: LeetCode 300. Наибольшая возрастающая подпоследовательность. Разбор задачи.
toc: true
tags: [Dynamic Programming, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastMod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 300
---

[LeetCode задача 300](<https://leetcode.com/problems/longest-increasing-subsequence/>)

## Задача

Дан массив чисел, ваша задача — найти длину наибольшей возрастающей подпоследовательности.

## Подсказки

Для решения этой задачи вы можете использовать динамическое программирование.

## Подход

1. **Инициализация**: Инициализируйте массив, который будет хранить длины наибольших возрастающих подпоследовательностей для каждого элемента массива.
2. **Обход массива**: Обойдите массив, и для каждого элемента обновите массив длин наибольших возрастающих подпоследовательностей.
3. **Максимум**: По окончании обхода найдите максимальное значение в массиве длин.

Простейший способ решения — это использовать двойной цикл для обхода массива и поиска наибольшей возрастающей подпоследовательности для каждого элемента. Это не самый эффективный способ, но его легко понять.

## Алгоритм

1. Создать массив `dp` той же длины, что и исходный массив, и заполнить его единицами.
2. Для каждого элемента `nums[i]` обойти все предыдущие элементы `nums[j]` и, если `nums[i] > nums[j]`, обновить `dp[i]` как `max(dp[i], dp[j] + 1)`.
3. Найти и вернуть максимальное значение в массиве `dp`.

## Решение

```python
def lengthOfLIS(nums):
    if not nums:
        return 0

    dp = [1] * len(nums)  # массив для хранения длин LIS для каждого элемента
    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)  # обновление длины LIS для элемента nums[i]
    return max(dp)
```

В этом решении используется двойной цикл для обхода массива и обновления массива dp, который хранит длину наибольшей возрастающей подпоследовательности для каждого элемента. По окончании обхода находим и возвращаем максимальное значение в массиве dp.
