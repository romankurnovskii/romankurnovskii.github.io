---
title: 2130. Maximum Twin Sum of a Linked List
seoTitle: LeetCode 2130. Maximum Twin Sum of a Linked List | Решение на Python.
description: LeetCode 2130. Maximum Twin Sum of a Linked List. Разбор задачи.
toc: true
tags: [Linked List, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-02
lastMod: 2023-09-02
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2130
---

[LeetCode задача 2130](<https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/>)

## Задача

Дан односвязный список четной длины. Узлы в этом списке имеют "близнецов" по определенным правилам.  Задача — найти максимальную сумму "близнецов".

Т.е. у первой половины узлов списка есть свой близнец из второй половины.

Пример:
    для списка длиной n = 8
    i = 0, twin = n-1-i = 8-1-0 = 7
    i = 1, twin = n-1-1 = 6
    i = 2, twin = n-1-2 = 5
    ...

## Подсказки

У первой половины узлов списка есть свой близнец из второй половины, т.е. нужно получить значения узлов и сложить значения из первой половины со значением из второй.

## Подход

Мы можем решить эту задачу, проходя список дважды. В первый проход мы можем сохранить все значения узлов в массиве для удобства доступа. Во втором проходе, мы используем этот массив для вычисления суммы "близнецов" и отслеживания максимальной такой суммы.

Массив здесь нужен для того, чтобы мы могли быстро получить доступ к "близнецу" каждого узла, не проходя список заново.

## Алгоритм

1. Пройдемся по связному списку, сохраняя значения всех узлов в массиве.
2. Инициализируем переменную `max_twin_sum` как 0, которая будет хранить максимальную сумму "близнецов".
3. Снова пройдемся по связному списку, вычисляя сумму "близнецов" для каждого узла и обновляя `max_twin_sum`, если текущая сумма больше максимальной.

## Решение

```python
# Определение односвязного списка.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def maxTwinSum(self, head: ListNode) -> int:
        # Проходим по списку, сохраняя все значения в массив.
        vals = []
        curr = head
        while curr:
            vals.append(curr.val)
            curr = curr.next
        
        # Инициализация максимальной суммы "близнецов".
        max_twin_sum = 0
        
        for i in range(len(vals) // 2 + 1): # проходим по первой половине
            twin_i = -i -1
            twin_sum = vals[i] + vals[twin_i]
            max_twin_sum = max(max_twin_sum, twin_sum)


        return max_twin_sum
```
