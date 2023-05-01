---
title: 238. Product of Array Except Self
seoTitle: LeetCode 238. Product of Array Except Self | Решение на Python.
description: LeetCode 238. Верните массив, где каждый элемент равен произведению всех элементов исходного массива, кроме самого этого элемента.
toc: true
tags: []
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-28
lastmod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 238
---

[LeetCode задача 238](https://leetcode.com/problems/product-of-array-except-self/)

## Задача

Дан целочисленный массив `nums`. Нужно вернуть массив `answer`, такой что `answer[i]` равен произведению всех элементов `nums`, кроме `nums[i]`.

## Подсказки

Чтобы не использовать операцию деления и оставаться в рамках времени $O(n)$, можно использовать концепцию <mark>префиксного и суффиксного произведения</mark> для каждого элемента.

## Подход

Создадим два массива: `prefix` и `suffix`.

- `prefix[i]` будет содержать произведение всех чисел слева от `i`
- `suffix[i]` будет содержать произведение всех чисел справа от `i`.
- Ответ для `i` будет равен `prefix[i] * suffix[i]`.

## Алгоритм

1. Создадим два массива: `prefix` и `suffix` с таким же размером, что и `nums`.
1. Проходим по `nums` слева направо, заполнив массив `prefix`, где `prefix[i]` - это произведение всех предыдущих элементов.
   1. Начинаем с 2-го элемента(`index=1`), т.к. нету элементов левее самого первого
   2. В каждую ячейку `prefix[i]` записываем результат произведения значения слева от числа `nums[i]`
2. Проходим по `nums` справа налево, заполнив массив `suffix` таким же образом.
   1. Начинаем с предпоследнего, т.к. нет элемента правее правого
3. Перемножаем произведения
   1. Для каждого `i`, `answer[i] = prefix[i] * suffix[i]`.

> [class range(start, stop, step=1)](https://docs.python.org/3/library/functions.html#func-range)

## Решение

```python
def productExceptSelf(nums: List[int]) -> List[int]:
    n = len(nums)

    prefix = [1] * n
    for i in range(1, n):
        prefix[i] = prefix[i - 1] * nums[i - 1]

    suffix = [1] * n
    for i in range(n-2, -1, -1):
        suffix[i] = suffix[i + 1] * nums[i + 1]

    answer = []
    for i in range(n):
        answer.append(prefix[i] * suffix[i])
    
    return answer
```

### С комментарием

```python
def productExceptSelf(nums: List[int]) -> List[int]:
    n = len(nums)

    # Слева от текущего. Направление ->
    prefix = [1] * n
    for i in range(1, n):
        prefix[i] = prefix[i - 1] * nums[i - 1]
        # 0. nums = [2,3,4,5], res = [1,1,1,1]
        # 1. i=1, res = [1, 1*2, 1,   1]
        # 2. i=2, res = [1, 2,   2*3, 1]
        # 3. i=3, res = [1, 2,   6,   6*4]

    # Справа от текущего. Направление <-
    suffix = [1] * n

    start = n - 2
    stop = -1  # Включая 0-й индекс
    step = -1  # в обратном порядке, справа налево
    for i in range(start, stop, step):
        # перемножаем элемент и результат предыдущего вычисления, что справа
        suffix[i] = suffix[i + 1] * nums[i + 1]

    res = []
    for i in range(n):
        res.append(prefix[i] * suffix[i])
```

{{< video src="../../assets/238.ru.mp4" title="Leetcode 238 Solution" >}}
