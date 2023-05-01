---
title: 236. Lowest Common Ancestor of a Binary Tree
seoTitle: LeetCode 236. Lowest Common Ancestor of a Binary Tree | Решение на Python.
description: LeetCode 236. Находите наименьшего общего предка в бинарном дереве. Разбор задачи.
toc: true
tags: [Binary Tree, DFS, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
weight: 236
---

[LeetCode задача 236](<https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/>)

## Задача

Найдите наименьшего общего предка (LCA) двух заданных узлов в бинарном дереве.

## Подсказки

Используйте метод обхода в глубину (DFS) для решения этой задачи.

## Подход

1. **Обход в глубину (DFS)**: Используйте рекурсивный метод для обхода дерева.
2. **Поиск узлов**: При обходе дерева ищите заданные узлы p и q.
3. **Возврат значения**: Если найден один из узлов, верните его как потенциального предка.
4. **Сравнение результатов**: Если оба поддерева возвращают узлы, текущий узел является LCA.
5. **Пропуск пустых узлов**: Если узел пуст, верните `None`.

## Алгоритм

1. Запустите рекурсивный DFS, начиная с корня дерева.
2. В каждой итерации рекурсии:
   - Проверьте, является ли текущий узел одним из искомых (p или q).
   - Произведите обход левого и правого поддеревьев.
   - Если оба поддерева возвращают не-`None` значения, текущий узел является LCA.

## Решение

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    if not root:
        return None
    
    # Если текущий узел является одним из искомых, вернуть его
    if root.val == p.val or root.val == q.val:
        return root
    
    # Обход левого и правого поддеревьев
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    
    # Если оба поддерева возвращают узлы, текущий узел является LCA
    if left and right:
        return root

    return left or right
```
