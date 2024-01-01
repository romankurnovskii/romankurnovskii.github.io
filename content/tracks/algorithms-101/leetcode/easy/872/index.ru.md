---
title: 872. Leaf-Similar Trees
seoTitle: LeetCode 872. Leaf-Similar Trees | Решение на Python.
description: LeetCode 872. Сравнение листовых узлов двух бинарных деревьев. Разбор задачи.
toc: true
tags: [Binary Tree, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-09-05
lastMod: 2023-09-05
featuredImage: https://picsum.photos/700/241?grayscale
weight: 872
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
