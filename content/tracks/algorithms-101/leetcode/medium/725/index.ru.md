---
title: 725. Split Linked List in Parts
seoTitle: LeetCode 725. Split Linked List in Parts | Решение на Python.
description: LeetCode 725. Разделение связного списка на k частей. Разбор задачи.
toc: true
tags: [Linked List, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-06
lastMod: 2023-09-06
featuredImage: https://picsum.photos/700/241?grayscale
weight: 725
---

[LeetCode задача 725](<https://leetcode.com/problems/split-linked-list-in-parts/>)

## Задача

Дан односвязный список и целое число `k`. Задача заключается в том, чтобы разделить односвязный список на `k` последовательных частей.

Длина каждой части должна быть максимально равномерной: любые две части не должны отличаться по размеру более чем на одну единицу. Это может привести к тому, что некоторые части будут пустыми (null).

Части должны идти в том порядке, в котором они встречаются в исходном списке, и ранее встречающиеся части всегда должны иметь размер больше или равный позднее встречающимся.

## Подсказки

Вам необходимо вычислить длину всего списка, затем разделить ее на `k` частей. Сохраняйте текущую голову каждой части и двигайтесь по списку, разрывая его на подсписки соответствующей длины.

## Подход / Идея решения

Основная идея решения заключается в вычислении длины исходного списка, а затем использовании этой информации для создания `k` частей с почти одинаковой длиной. Подход использует линейное время для прохода по списку и константное дополнительное пространство, что делает его эффективным и простым для понимания.

## Алгоритм / Абстрактный алгоритм

1. Вычисляем длину исходного односвязного списка.
2. Определяем базовый размер каждой из `k` частей.
   1. Т.к. части не обязательно должны быть все одной длины, но могут отличаться максимум на 1 элемент, узнаем количество "дополнительных" узлов(если они есть), которые должны быть распределены равномерно по частям. Например: если элементов в листе 3, а частей должно быть 2, то базовая длина у каждой части = 1, и дополнительно нужно распределить 1: ([[1], [1]+[1])
3. Инициализируем массив для хранения `k` частей
4. `k` раз создаем части, при этом:
   - рассчитываем длину каждой части (базовая длина + дополнительно 1, если необходимо)
   - определяем начало следующей части листа
   - обрезаем текущую часть от листа от следующей

## Решение

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        # get linked list length
        n = 0
        current = head
        while current:
            n += 1
            current = current.next
        
        # get batch length
        batch_len = n // k
        extra_nodes = n % k

        # generate k batches
        arr = []
        current = head
        for _ in range(k):
            batch = current  # define head of current batch

            extra_one = 1 if extra_nodes > 0 else 0
            for i in range(batch_len + extra_one -1):
                if current:
                    current = current.next
            
            if current:  # switch, cut current batch, get head of next batch
                next_batch = current.next
                current.next = None  # cut current batch from next
                current = next_batch
            
            arr.append(batch)
            extra_nodes -= 1

        return arr
```
