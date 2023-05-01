---
title: 1448. Count Good Nodes in Binary Tree
seoTitle: LeetCode 1448. Count Good Nodes in Binary Tree | Решение на Python.
description: LeetCode 1448. Задача о подсчете "хороших" узлов в бинарном дереве. Разбор задачи.
toc: true
tags: [Binary Tree, DFS, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
weight: 1448
---

[LeetCode задача 1448](<https://leetcode.com/problems/count-good-nodes-in-binary-tree/>)

## Задача

Вам дано бинарное дерево. Ваша задача подсчитать количество "хороших" узлов. Узел считается "хорошим", если на пути от корня дерева до этого узла (включительно) не встречается узлов с большим значением.

## Подсказки

Используйте метод обхода в глубину (DFS) для решения этой задачи.

## Подход

1. **Обход в глубину (DFS)**: Используйте рекурсивный метод для обхода дерева.
2. **Текущий максимум**: На каждом шаге рекурсии передавайте текущее максимальное значение на пути от корня.
3. **Сравнение узлов**: Сравните значение текущего узла с текущим максимумом. Если значение узла больше или равно, увеличьте счетчик "хороших" узлов.

## Алгоритм

1. Инициализируйте счетчик "хороших" узлов как 0.
2. Запустите рекурсивный DFS, начиная с корня дерева и передавая значение корня как текущий максимум.
3. В рекурсивной функции сравните значение текущего узла с переданным максимумом.
4. Обновите текущий максимум, если значение текущего узла больше.
5. Повторите шаги 2-4 для всех дочерних узлов.

## Решение

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def goodNodes(root: TreeNode) -> int:
    def dfs(node, cur_max):
        if not node:
            return 0
        
        count = 0
        if node.val >= cur_max:
            count += 1
            cur_max = node.val
        
        count += dfs(node.left, cur_max)
        count += dfs(node.right, cur_max)
        
        return count
    
    return dfs(root, root.val)
```
