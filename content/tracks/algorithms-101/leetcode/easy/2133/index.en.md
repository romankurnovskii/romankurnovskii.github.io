---
title: 2133. Check if Every Row and Column Contains All Numbers
seoTitle: LeetCode 2133. Check if Every Row and Column Contains All Numbers | Python solution and explanation
description: 2133. Check if Every Row and Column Contains All Numbers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2133
---

[LeetCode problem 2133](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/)

```python
class Solution:
    def checkValid(self, matrix: List[List[int]]) -> bool:
        n = len(matrix)
        for i in range(n):
            seen = [False] * n
            for j in range(n):
                v = matrix[i][j] - 1
                if seen[v]:
                    return False
                seen[v] = True
        for j in range(n):
            seen = [False] * n
            for i in range(n):
                v = matrix[i][j] - 1
                if seen[v]:
                    return False
                seen[v] = True
        return True

```
