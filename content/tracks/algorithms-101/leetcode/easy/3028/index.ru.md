---
title: 3028. Ant on the Boundary
seoTitle: LeetCode 3028. Ant on the Boundary | Решение на Python.
description: 
toc: true
categories: [Algorithms, Easy, LeetCode]
tags: [Algorithms, Easy, LeetCode]
date: 2024-02-09
lastMod: 2024-02-09
featuredImage: https://picsum.photos/700/241?grayscale
weight: 3028
---

[LeetCode задача 3028](https://leetcode.com/problems/ant-on-the-boundary/description/)

Воспользуемся функцией [`accumulate`](https://docs.python.org/3/library/itertools.html#itertools.accumulate) из модуля `itertools`, чтобы упростить вычисление и подсчет количества раз, когда муравей возвращается на границу, пройдя через массив `nums`.

Применяем функцию `accumulate` для подсчета накопительной суммы и подсчитываем количество раз, когда накопительная сумма равна `0`.

## Решение

```python
class Solution:
    def returnToBoundaryCount(self, nums: List[int]) -> int:
        return sum(s == 0 for s in accumulate(nums))
```

Функция `accumulate(nums)` генерирует последовательность накопленных сумм элементов массива `nums`, начиная с первого элемента.

Затем с помощью генераторного выражения `s == 0 for s in accumulate(nums)` мы создаем последовательность `True` и `False`, в зависимости от того, равна ли накопленная сумма в каждой точке нулю.

Функция `sum` подсчитывает количество `True` в этой последовательности, что соответствует количеству возвращений муравья на границу.
