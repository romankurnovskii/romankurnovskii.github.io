---
title: 2328. Number of Increasing Paths in a Grid
seoTitle: LeetCode 2328. Number of Increasing Paths in a Grid | Python solution and explanation
description: 2328. Number of Increasing Paths in a Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2328
---

[LeetCode problem 2328](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/)

```python
class Solution:
    def countPaths(self, grid: List[List[int]]) -> int:
        @cache
        def dfs(i: int, j: int) -> int:
            res = 1
            for a, b in pairwise((-1, 0, 1, 0, -1)):
                x, y = i + a, j + b
                if 0 <= x < m and 0 <= y < n and grid[i][j] < grid[x][y]:
                    res = (res + dfs(x, y)) % mod
            return res

        mod = 10**9 + 7
        m, n = len(grid), len(grid[0])
        return sum(dfs(i, j) for i in range(m) for j in range(n)) % mod

```
