---
title: 2123. Minimum Operations to Remove Adjacent Ones in Matrix
seoTitle: LeetCode 2123. Minimum Operations to Remove Adjacent Ones in Matrix | Python solution and explanation
description: 2123. Minimum Operations to Remove Adjacent Ones in Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2123
---

[LeetCode problem 2123](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/)

```python
class Solution:
    def minimumOperations(self, grid: List[List[int]]) -> int:
        def find(i: int) -> int:
            for j in g[i]:
                if j not in vis:
                    vis.add(j)
                    if match[j] == -1 or find(match[j]):
                        match[j] = i
                        return 1
            return 0

        g = defaultdict(list)
        m, n = len(grid), len(grid[0])
        for i, row in enumerate(grid):
            for j, v in enumerate(row):
                if (i + j) % 2 and v:
                    x = i * n + j
                    if i < m - 1 and grid[i + 1][j]:
                        g[x].append(x + n)
                    if i and grid[i - 1][j]:
                        g[x].append(x - n)
                    if j < n - 1 and grid[i][j + 1]:
                        g[x].append(x + 1)
                    if j and grid[i][j - 1]:
                        g[x].append(x - 1)

        match = [-1] * (m * n)
        res = 0
        for i in g.keys():
            vis = set()
            res += find(i)
        return res

```
