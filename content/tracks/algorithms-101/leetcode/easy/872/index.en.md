---
title: 872. Leaf-Similar Trees
seoTitle: LeetCode 872. Leaf-Similar Trees | Решение на Python.
description: LeetCode 872. Сравнение листовых узлов двух бинарных деревьев. Разбор задачи.
toc: true
tags: [Binary Tree, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-09-05
lastmod: 2023-09-05
featuredImage: https://picsum.photos/700/241?grayscale
weight: 872
draft: true
---

[LeetCode задача 872](<https://leetcode.com/problems/leaf-similar-trees/>)

## Задача

Даны два бинарных дерева с корнями `root1` и `root2`. Проверьте, являются ли эти деревья "листоподобными" (leaf-similar). Деревья считаются "листоподобными", если последовательность листовых узлов каждого дерева одинакова.

## Подсказки

Листовые узлы бинарного дерева — это узлы, у которых нет потомков. Для проверки "листоподобности" двух деревьев нужно сравнить последовательности листовых узлов этих деревьев.

## Подход / Идея решения

Идея решения заключается в построении списков листовых узлов для каждого дерева, а затем сравнении этих списков. Мы можем рекурсивно обойти каждое дерево, проверяя при каждом узле, является ли он листовым. Если это так, добавляем значение этого узла в соответствующий список.

Такой подход обеспечивает простое и понятное решение, несмотря на то, что он может быть не самым оптимальным по времени и памяти.

## Алгоритм

1. Обойти каждое дерево рекурсивно и собрать список листовых узлов.
2. Сравнить полученные списки.

## Решение

```python
# Определение для бинарного дерева.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def leafSimilar(root1, root2):
    def getLeaves(root):
        if not root:
            return []
        if not root.left and not root.right:
            return [root.val]
        return getLeaves(root.left) + getLeaves(root.right)
        
    return getLeaves(root1) == getLeaves(root2)
```

What does it mean to "get a leaf"?

We need to got to the end of the tree. The way to do it is to find on every iteration only left node. What happens then?

Since it is a recursion, it starts to "come back". And here we can start another logic. Which? Go and find the most right leaf.

What happens here?

Lets call it as runner.
1. Runner is in the head
2. Found a left node (root.left)
    1. Within this node the first thing in this recursion fucntion it again tries to find the most left.
    2. Once it finds the most left (this means that current `root.left` is None), runner goes to the next line of **current** function.
    3. Lets say next line is to find the most right. 