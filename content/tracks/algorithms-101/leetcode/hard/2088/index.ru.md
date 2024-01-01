---
title: 2088. Count Fertile Pyramids in a Land
seoTitle: LeetCode 2088. Count Fertile Pyramids in a Land | Python solution and explanation
description: 2088. Count Fertile Pyramids in a Land
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2088
---

[LeetCode problem 2088](https://leetcode.com/problems/count-fertile-pyramids-in-a-land/)

```python
class Solution:
    def countPyramids(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        f = [[0] * n for _ in range(m)]
        res = 0
        for i in range(m - 1, -1, -1):
            for j in range(n):
                if grid[i][j] == 0:
                    f[i][j] = -1
                elif not (i == m - 1 or j == 0 or j == n - 1):
                    f[i][j] = min(f[i + 1][j - 1], f[i + 1][j], f[i + 1][j + 1]) + 1
                    res += f[i][j]
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    f[i][j] = -1
                elif i == 0 or j == 0 or j == n - 1:
                    f[i][j] = 0
                else:
                    f[i][j] = min(f[i - 1][j - 1], f[i - 1][j], f[i - 1][j + 1]) + 1
                    res += f[i][j]
        return res

```
