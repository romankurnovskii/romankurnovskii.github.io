---
title: 1004. Max Consecutive Ones III
seoTitle: LeetCode 1004. Max Consecutive Ones III | Решение на Python.
description: LeetCode 1004. Наибольшая последовательность единиц III. Разбор задачи.
toc: true
tags: [Sliding Window, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastMod: 2023-08-28
weight: 1004
---

[LeetCode задача 1004](<https://leetcode.com/problems/max-consecutive-ones-iii/>)

## Задача

Дан массив `A` состоящий из 0 и 1, и число `K`. Найти максимальную длину подпоследовательности единиц, которую можно получить, преобразовав не более `K` нулей в единицы.

## Подсказки

Использование скользящего окна может значительно ускорить решение задачи.

## Подход

1. **Инициализация**: Создайте переменные для хранения начала и конца "окна" и максимальной длины подпоследовательности.
2. **Проход по массиву**: Перемещайте "окно" по массиву, подсчитывая количество нулей внутри.
3. **Сдвиг окна**: Если количество нулей превышает `K`, сдвигайте левый край окна, пока это не станет истиной.
4. **Обновление максимума**: На каждом шаге обновляйте максимальную длину подпоследовательности.

Этот метод является эффективным с точки зрения времени и простым для понимания.

## Алгоритм

1. Инициализируйте `start = 0` и `max_length = 0`.
2. Пройдите по массиву с индексом `end`.
3. Если элемент равен нулю, уменьшите `K`.
4. Пока `K < 0`, сдвигайте `start` и увеличивайте `K`, если элемент равен нулю.
5. Обновите `max_length`.

## Решение

```python
def longestOnes(A, K):
    start = 0
    max_length = 0
    
    for end in range(len(A)):
        # Если нуль, уменьшим K
        if A[end] == 0:
            K -= 1
        
        # Сдвигаем окно, если K отрицательно
        while K < 0:
            if A[start] == 0:
                K += 1
            start += 1
        
        # Обновляем max_length
        max_length = max(max_length, end - start + 1)
        
    return max_length
```
