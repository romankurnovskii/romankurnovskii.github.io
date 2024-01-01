---
title: 1647. Minimum Deletions to Make Character Frequencies Unique
seoTitle: LeetCode 1647. Minimum Deletions to Make Character Frequencies Unique | Решение на Python.
description: LeetCode 1647. Минимальное количество удалений, чтобы сделать частоты символов уникальными. Разбор задачи.
toc: true
tags: [String, Medium, LeetCode]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-12
lastMod: 2023-09-12
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1647
---

[LeetCode задача 1647](<https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/>)

## Задача

Строка `s` называется хорошей, если в ней нет двух разных символов с одинаковой частотой.

Дана строка `s`, верните минимальное количество символов, которое необходимо удалить, чтобы сделать `s` хорошим.

## Подход

Основная идея решения заключается в подсчете частот символов в строке и определении количества удалений, необходимых для того, чтобы все частоты были уникальными.

Если проверять <mark>встречалась ли частота текущего символа ранее</mark>, то

## Алгоритм / Абстрактный алгоритм

1. Считаем частоты всех символов в строке.
2. Сортируем частоты в порядке убывания.
3. Для каждой частоты, начиная с самой большой, если она не уникальна (т.е. есть другая такая же частота), уменьшаем ее на 1 и увеличиваем счетчик удалений.
4. Продолжаем, пока все частоты не станут уникальными.

## Решение

```python
from collections import Counter

class Solution:
    def minDeletions(self, s: str) -> int:
        freq = Counter(s)  # Подсчет частот символов
        
        freqs = sorted(freq.values(), reverse=True)  # Сортировка частот в порядке убывания
        deletions = 0
        seen = set()

        for f in freqs:
            while f in seen:
                f -= 1
                deletions += 1

            if f > 0:
                seen.add(f)

        return deletions
```
