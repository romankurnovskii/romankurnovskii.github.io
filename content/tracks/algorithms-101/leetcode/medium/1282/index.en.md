---
title: 1282. Group the People Given the Group Size They Belong To
seoTitle: LeetCode 1282. Group the People Given the Group Size They Belong To | Решение на Python.
description: LeetCode 1282. Группировка людей по размерам их групп. Разбор задачи.
toc: true
tags: [Array, Medium, LeetCode]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-06
lastMod: 2023-09-06
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1282
---

[LeetCode задача 1282](<https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/>)

## Задача

Есть `n` человек, которые разделены на неизвестное количество групп. Каждому человеку присвоен уникальный ID от 0 до n - 1.

Дан массив целых чисел `groupSizes`, где `groupSizes[i]` — это размер группы, в которой находится человек `i`. Задача заключается в том, чтобы вернуть список групп таким образом, чтобы каждый человек i был в группе размером `groupSizes[i]`.

## Подход

Основная идея решения заключается в использовании словаря для хранения временных групп, пока их размер не достигнет необходимого. Как только размер временной группы достигнет необходимого, добавьте ее в результат и начните новую группу с этим размером.

## Алгоритм

1. Инициализируем словарь для временного хранения групп по их размеру и список для итогового результата.
2. Итерируемся по `groupSizes`, добавляя каждого человека в соответствующую группу в словаре.
3. Когда группа достигает своего размера, добавьте ее в результат и очистите соответствующий список в словаре.

## Решение

```python
from typing import List

class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        groups = {}                             # временное хранение групп
        result = []                             # итоговый список групп

        for i, size in enumerate(groupSizes):
            if size not in groups:              # Если размер группы еще не существует в словаре, 
                groups[size] = []               # инициализируем его пустым списком

            groups[size].append(i)

            if len(groups[size]) == size:       # Если группа достигла своего размера,
                result.append(groups[size])     # добавляем ее в результат и очищаем список
                groups[size] = []

        return result
```
