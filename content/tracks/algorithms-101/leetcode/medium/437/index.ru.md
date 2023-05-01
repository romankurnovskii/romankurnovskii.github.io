---
title: 437. Path Sum III
seoTitle: LeetCode 437. Path Sum III | Решение на Python.
description: LeetCode 437. Найти количество всех путей в бинарном дереве, которые суммируются в определенное число. Разбор задачи.
toc: true
tags: [Binary Tree, DFS, Easy]
categories: [Algorithms, Easy, LeetCode]
date: 2023-08-28
lastmod: 2023-08-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 210
---

[LeetCode задача 437](<https://leetcode.com/problems/path-sum-iii/>)

## Задача

Вы должны вернуть количество путей в данном бинарном дереве, которые суммируются в определенное число. Путь не обязан начинаться или заканчиваться на корне или листьях, но он должен двигаться вниз (с родителя на потомка).

## Подсказки

Используйте Depth-First Search (DFS) для решения задачи.

## Подход

1. **DFS с "памятью"**: Мы можем использовать DFS, чтобы пройти по всем путям в дереве, и на каждом этапе проверить, сколько путей можно завершить в этом узле с нужной суммой.
2. **Хранение промежуточных сумм**: По мере движения вниз по дереву, мы можем хранить сумму всех узлов в текущем пути. Это позволит нам быстро проверить, можно ли создать подпуть с нужной суммой.
3. **Обновление ответа**: Когда мы достигаем листа, мы можем проверить, создает ли текущий путь нужную сумму. Если да, увеличьте счетчик.
4. **Возврат результата**: В конечном итоге верните количество всех подходящих путей.

## Алгоритм

1. Инициализируйте переменную для подсчета количества путей.
2. Запустите DFS с корня дерева.

## Решение

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def dfs(node, target, current_sum, prefix_sums):
    if not node:
        return 0
    
    count = 0
    current_sum += node.val
    
    # Найти нужное количество путей, которые заканчиваются на текущем узле
    count += prefix_sums.get(current_sum - target, 0)
    
    # Обновление префиксных сумм
    prefix_sums[current_sum] = prefix_sums.get(current_sum, 0) + 1
    
    # Рекурсивно проверить оба поддерева
    count += dfs(node.left, target, current_sum, prefix_sums)
    count += dfs(node.right, target, current_sum, prefix_sums)
    
    # Откат изменений
    prefix_sums[current_sum] -= 1
    
    return count

def pathSum(root: TreeNode, target: int) -> int:
    return dfs(root, target, 0, {0: 1})
```
