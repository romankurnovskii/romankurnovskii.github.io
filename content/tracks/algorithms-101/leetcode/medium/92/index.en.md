---
title: 92. Reverse Linked List II
seoTitle: LeetCode 92. Reverse Linked List II | Решение на Python.
description: LeetCode 92. Обращение подсписка односвязного списка. Разбор задачи.
toc: true
tags: [Linked List, Medium, "Reverse Linked List"]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-07
lastMod: 2023-09-07
featuredImage: https://picsum.photos/700/241?grayscale
weight: 92
---

[LeetCode задача 92](<https://leetcode.com/problems/reverse-linked-list-ii/>)

## Задача

Дан односвязный список и два целых числа `left` и `right`, где `left <= right`. Задача заключается в том, чтобы перевернуть узлы списка с позиции `left` до `right`

Т.е. если список 1-2-3-4-5-6-7-8-9, left=2, right=7, то итоговый список будет 1-**7-6-5-4-3-2**-8-9.

## Подсказки

Для решения задачи удобно использовать два указателя: один для сохранения начальной позиции участка, который нужно перевернуть, и второй для выполнения самого разворота.

## Подход

Основная идея решения заключается в использовании двух указателей: одного для начала подсписка, который нужно перевернуть, и второго для его конца. После этого, можно перевернуть этот подсписок "на лету", обновляя ссылки между узлами.

## Алгоритм

Основная логика разворота заключается в следующих действиях:

1. Определяем узел `next` как следующий узел от current.
1. Обновляем указатель `current.next`, чтобы он указывал на узел после узла `next`.
1. Обновляем указатель `next.next`, чтобы он указывал на узел, на который указывает `prev.next`.
1. Обновляем указатель `prev.next`, чтобы он указывал на узел `next`.

![LeetCode problem 166](/en/tracks/algorithms-101/leetcode/assets/92.jpg)

## Решение

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseBetween(self, head, left, right):
        # Создаем новый узел
        reversed = ListNode(0)
        reversed.next = head
        prev = reversed
        
        # Пройдем до узла, предшествующего левой границе
        for _ in range(left - 1):
            prev = prev.next
        
        current = prev.next

        for _ in range(right-left):
            # 1->2->3->4, current = 2
            # rule: 
            # 1. next should look to current (prev.next)
            #     for this need to switch links in proper order
            # 2. current.next should look to next.next
            # 3. prev.next should look to next
            # 4. next.next (3) should look to current (prev.next)
            #     prev.next instead of current because of avoid cycle

            # define next
            next = current.next #1 (3->4), need 2<-3

            # switch links
            current.next = next.next    #2
            next.next = prev.next       #4
            prev.next = next            #3

        return reversed.next
```
