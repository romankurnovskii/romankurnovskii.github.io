---
title: 1504. Count Submatrices With All Ones
seoTitle: LeetCode 1504. Count Submatrices With All Ones | Python solution and explanation
description: 1504. Count Submatrices With All Ones
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1504
---

[LeetCode problem 1504](https://leetcode.com/problems/count-submatrices-with-all-ones/)

```python
class Solution:
    def numSubmat(self, mat: List[List[int]]) -> int:
        m, n = len(mat), len(mat[0])
        g = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                if mat[i][j]:
                    g[i][j] = 1 if j == 0 else 1 + g[i][j - 1]
        res = 0
        for i in range(m):
            for j in range(n):
                col = inf
                for k in range(i, -1, -1):
                    col = min(col, g[k][j])
                    res += col
        return res

```
