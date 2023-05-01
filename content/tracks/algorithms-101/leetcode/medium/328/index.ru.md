---
title: 328. Odd Even Linked List
seoTitle: LeetCode 328. Odd Even Linked List | Решение на Python.
description: LeetCode 328. Разбор задачи на перестановку узлов односвязного списка так, чтобы все узлы с нечетными индексами были перед узлами с четными индексами.
toc: true
tags: [LinkedList, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
weight: 328
---

[LeetCode задача 328](<https://leetcode.com/problems/odd-even-linked-list/>)

## Задача

Вам дан односвязный список и ваша задача переставить его узлы таким образом, чтобы все узлы с нечетными индексами шли перед всеми узлами с четными индексами.

## Подсказки

Используйте несколько указателей для упрощения вашего кода.

## Подход

1. **Инициализация указателей**: Инициализируем указатели для нечетных и четных узлов, а также сохраняем начальный четный узел.
2. **Перестановка узлов**: Проходим по списку, меняя местами нечетные и четные узлы.
3. **Соединение списков**: После того как все узлы переставлены, последний нечетный узел должен указывать на первый четный узел.

## Алгоритм

1. Инициализация указателей `odd` и `even` на начальные нечетные и четные узлы.
2. Сохраните начальный четный узел в переменной `even_head`.
3. Пока четные и нечетные узлы не `None`, продолжайте перестановку.
4. В конце соедините последний нечетный узел с `even_head`.

## Решение

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def oddEvenList(head: ListNode) -> ListNode:
    if not head:
        return head
    
    odd = head
    even = head.next
    even_head = even
    
    while even and even.next:
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    
    # Соединяем последний нечетный узел с первым четным
    odd.next = even_head
    
    return head
```
