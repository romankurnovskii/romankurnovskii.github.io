---
title: 237. Delete Node in a Linked List
seoTitle: LeetCode 237. Delete Node in a Linked List | Решение на Python
description: LeetCode 237. Удалить узел в односвязном списке.
toc: true
tags: [Linked List, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 237
---

[LeetCode задача 237](https://leetcode.com/problems/delete-node-in-a-linked-list/)

## Задача

Написать функцию для удаления узла (за исключением хвостового) в односвязном списке, дан только доступ к этому узлу.

## Подсказки

1. Обычно, для удаления узла из односвязного списка, нам нужен доступ к предыдущему узлу. В этом случае, у нас такого доступа нет. Как это обойти?

## Подход

Поскольку доступа к предыдущему узлу нет, мы не можем просто "вырезать" текущий узел. Однако мы можем переписать значение текущего узла значением следующего узла и затем удалить следующий узел.

## Алгоритм

1. Перезаписываем значение текущего узла значением следующего узла.
2. Удаляем следующий узел.

## Решение

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def deleteNode(node):
    # Перезаписываем значение узла значением следующего узла
    node.val = node.next.val
    # Удаляем следующий узел
    node.next = node.next.next
```
