---
title: 1372. Longest ZigZag Path in a Binary Tree
seoTitle: LeetCode 1372. Longest ZigZag Path in a Binary Tree | Решение на Python.
description: LeetCode 1372. Находите самый длинный ZigZag путь в бинарном дереве. Разбор задачи.
toc: true
tags: [Binary Tree, DFS, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1372
todo: refactor, latest in en
---

[LeetCode задача 1372](<https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/>)

## Задача

Найти самый длинный "ZigZag" путь в бинарном дереве. Путь "ZigZag" означает альтернативное движение влево и вправо при переходе от одного узла к другому.

## Подсказки

Используйте Depth-First Search (DFS) для решения задачи.

## Подход

1. **DFS с состоянием**: Запустите DFS с дополнительным аргументом, который будет отслеживать, в какую сторону нужно двигаться следующим (влево или вправо).
2. **Обновление максимума**: На каждом уровне рекурсии проверьте, не превышает ли текущая длина пути максимальную известную длину.
3. **Рекурсивный вызов**: Продолжайте движение в обоих направлениях, но учитывайте, что направление должно изменяться.
4. **Возврат результата**: В конечном итоге верните максимальную длину, найденную во всех поддеревьях.

## Алгоритм

1. Инициализируйте переменную для хранения максимальной длины ZigZag пути.
2. Запустите DFS с корня, указав начальную длину пути и начальное направление.

## Решение

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

max_zigzag = 0

def dfs(node, length, direction):
    global max_zigzag
    if not node:
        return
    max_zigzag = max(max_zigzag, length)
    if direction == "left":
        if node.left:
            dfs(node.left, length + 1, "right")
        dfs(node.right, 1, "right")
    else:
        if node.right:
            dfs(node.right, length + 1, "left")
        dfs(node.left, 1, "left")

def longestZigZag(root: TreeNode) -> int:
    global max_zigzag
    max_zigzag = 0  # Сбросить значение между вызовами
    dfs(root, 0, "left")
    dfs(root, 0, "right")
    return max_zigzag

```
