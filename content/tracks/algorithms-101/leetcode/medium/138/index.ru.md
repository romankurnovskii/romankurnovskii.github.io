---
title: 138. Copy List with Random Pointer
seoTitle: LeetCode 138. Copy List with Random Pointer | Решение на Python.
description: LeetCode 138. Создание глубокой копии связанного списка с произвольными указателями. Разбор задачи.
toc: true
tags: [LinkedList, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-05
lastMod: 2023-09-05
featuredImage: https://picsum.photos/700/241?grayscale
weight: 138
---

[LeetCode задача 138](<https://leetcode.com/problems/copy-list-with-random-pointer/>)

## Задача

Дан односвязный список, каждый узел которого содержит дополнительный "произвольный" указатель, который может указывать на любой узел в списке или быть `null`. Задача состоит в том, чтобы создать глубокую копию этого списка.

## Подсказки

Простое копирование значений не сработает. Нам нужно создать новые узлы и корректно установить как основные, так и "произвольные" указатели.

## Подход / Идея решения

Идея решения заключается в двухпроходном методе. В первом проходе мы создаем копии всех узлов исходного списка и сохраняем их в словаре, где ключом будет оригинальный узел, а значением — его копия. Таким образом, для каждого узла у нас будет доступна его копия.

Во втором проходе мы пересматриваем исходный список и используем созданный словарь для установки основных и "произвольных" указателей для узлов в копии списка.

## Алгоритм

1. Инициализировать словарь `node_map`.
2. Пройтись по исходному списку, создать копии узлов и сохранить их в `node_map`.
3. Пройтись по исходному списку второй раз, установить основные и "произвольные" указатели для узлов в копии, используя `node_map`.

## Решение

```python
# Определение для узла списка.
# class Node:
#     def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
#         self.val = int(x)
#         self.next = next
#         self.random = random

def copyRandomList(head):
    if not head:
        return None
    
    node_map = {}  # Словарь для хранения отображения оригинальных узлов на их копии
    
    # Первый проход: создаем копии узлов
    curr = head
    while curr:
        node_map[curr] = Node(curr.val)
        curr = curr.next
    
    # Второй проход: устанавливаем основные и "random" указатели
    curr = head
    while curr:
        if curr.next:
            node_map[curr].next = node_map[curr.next]
        if curr.random:
            node_map[curr].random = node_map[curr.random]
        curr = curr.next

    return node_map[head]
```
