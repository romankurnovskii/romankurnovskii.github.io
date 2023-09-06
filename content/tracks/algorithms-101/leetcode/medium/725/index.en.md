---
title: 725. Split Linked List in Parts
seoTitle: LeetCode 725. Split Linked List in Parts | Решение на Python.
description: LeetCode 725. Разделение связного списка на k частей. Разбор задачи.
toc: true
tags: [Linked List, Medium]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-09-06
lastmod: 2023-09-06
featuredImage: https://picsum.photos/700/241?grayscale
weight: 725
draft: true
---

[LeetCode задача 725](<https://leetcode.com/problems/split-linked-list-in-parts/>)

## Задача

Дана голова односвязного списка и целое число k. Разделите связный список на k последовательных частей.

Длина каждой части должна быть максимально равномерной: ни две части не должны отличаться по размеру более чем на одну единицу. Это может привести к тому, что некоторые части будут пустыми (null).

Части должны идти в том порядке, в котором они встречаются в исходном списке, и ранее встречающиеся части всегда должны иметь размер больше или равный позднее встречающимся.

Верните массив из k частей.

## Подсказки

Можно решить задачу, пройдя по связному списку дважды: первый раз, чтобы определить его длину, и второй раз, чтобы разделить его.

## Подход

В первую очередь, мы должны определить длину исходного связного списка. Это даст нам возможность вычислить, как много узлов должно быть в каждой из k частей.

После этого, мы можем пройти по списку второй раз и разделить его на части, следуя ранее вычисленным размерам. Основная идея заключается в том, чтобы разбить список на части, каждая из которых имеет размер, не отличающийся от других более чем на 1.

## Алгоритм

We need to resolve three blocks:
- length of each part of linked list
- 

1. Пройдите по связному списку, чтобы определить его длину `n`.
2. Вычислите базовый размер каждой части (`n // k`) и количество частей, которые будут на один элемент больше (`n % k`).
3. Пройдите по связному списку второй раз, создавая новые части и добавляя их в результирующий массив.

## Решение

```python
# Определение для односвязного списка.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def splitListToParts(head, k):
    # get linked list length
    n = 0
    current = head
    while current:
        n += 1
        current = current.next
    
    # get batch length
    batch_len = n // k
    extra_nodes = n % k

    # generate k bathces
    arr = []
    for _ in range(k):
        batch = cur  # define head of current batch

        extra_one = 1 if extra_nodes > 0 else 0
        for i in range(batch_len + extra_one -1):
            if current:
                current = current.next
        
        if current:  # switch, cut current batch, get head of next batch
            next_batch = current.next
            current.next = None
            current = next_batch
        
        arr.append(batch)

    return arr
```
