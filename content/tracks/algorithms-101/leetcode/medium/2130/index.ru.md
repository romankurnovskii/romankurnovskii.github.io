---
title: 2130. Maximum Twin Sum of a Linked List
seoTitle: LeetCode 2130. Maximum Twin Sum of a Linked List | Решение на Python.
description: LeetCode 2130. Maximum Twin Sum of a Linked List. Разбор задачи.
toc: true
tags: [Linked List, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-02
lastmod: 2023-09-02
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2130
---

[LeetCode задача 2130](<https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/>)

## Задача

Вам дан односвязный список четной длины. Узлы в этом списке имеют "близнецов" по определенным правилам. Ваша задача — найти максимальную сумму "близнецов".

## Подсказки

Каждый узел i-й в списке имеет "близнеца", который является (n-1-i)-м узлом в списке, где n - общее число узлов в списке. "Близнецы" могут быть определены только для узлов, для которых 0 <= i <= (n / 2) - 1.

## Подход

Мы можем решить эту задачу, проходя список дважды. В первый проход мы можем сохранить все значения узлов в массиве для удобства доступа. Во втором проходе, мы используем этот массив для вычисления суммы "близнецов" и отслеживания максимальной такой суммы. Массив здесь нужен для того, чтобы мы могли быстро получить доступ к "близнецу" каждого узла, не проходя список заново.

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
        # Пройдемся по списку, сохраняя все значения в массив.
        vals = []
        curr = head
        while curr:
            vals.append(curr.val)
            curr = curr.next
        
        # Инициализация максимальной суммы "близнецов".
        max_twin_sum = 0
        
        # Снова пройдемся по списку, вычисляя сумму "близнецов".
        curr = head
        index = 0
        while curr:
            twin_sum = curr.val + vals[-(index + 1)]
            max_twin_sum = max(max_twin_sum, twin_sum)
            curr = curr.next
            index += 1
            
        return max_twin_sum
```
