---
title: 104. Maximum Depth of Binary Tree
seoTitle: LeetCode 104. Maximum Depth of Binary Tree | Решение на Python.
description: LeetCode 104. Нахождение максимальной глубины бинарного дерева. Разбор задачи.
toc: true
tags: [Binary Tree, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-09-05
lastMod: 2023-09-05
featuredImage: https://picsum.photos/700/241?grayscale
weight: 104
---

[LeetCode задача 104](<https://leetcode.com/problems/maximum-depth-of-binary-tree/>)

## Задача

Дан корень бинарного дерева. Задача состоит в том, чтобы найти его максимальную глубину. Глубина бинарного дерева определяется как максимальное количество узлов на пути от корня дерева до любого листового узла, включая сам корень.

## Подсказки

Бинарное дерево представляет собой иерархическую структуру, в которой каждый узел имеет максимум двух потомков: левого и правого.

## Подход / Идея решения

Чтобы найти максимальную глубину бинарного дерева, можно использовать рекурсивный метод. Для каждого узла дерева, максимальная глубина поддерева с этим узлом в качестве корня будет равна максимуму из глубин левого и правого поддеревьев, увеличенному на 1 (сам узел).

Сам алгоритм кажется интуитивно понятным, если представить дерево как иерархию: чтобы узнать, насколько "глубоко" уходит каждая ветвь, просто спуститесь по ней, пока не достигнете конца, затем вернитесь, собирая информацию о глубине каждого поддерева.

## Алгоритм

1. Если узел пуст, вернуть 0 (глубина пустого дерева равна 0).
2. Рекурсивно найти глубину левого поддерева.
3. Рекурсивно найти глубину правого поддерева.
4. Максимальная глубина для текущего узла равна максимуму из глубин левого и правого поддеревьев, увеличенному на 1.

## Решение

```python
# Определение для бинарного дерева.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def maxDepth(root):
    if not root:
        return 0
    left_depth = maxDepth(root.left)
    right_depth = maxDepth(root.right)
    return max(left_depth, right_depth) + 1
```
