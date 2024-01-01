---
title: 2373. Largest Local Values in a Matrix
seoTitle: LeetCode 2373. Largest Local Values in a Matrix | Python solution and explanation
description: 2373. Largest Local Values in a Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2373
---

[LeetCode problem 2373](https://leetcode.com/problems/largest-local-values-in-a-matrix/)

```python
class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        n = len(grid)
        res = [[0] * (n - 2) for _ in range(n - 2)]
        for i in range(n - 2):
            for j in range(n - 2):
                res[i][j] = max(
                    grid[x][y] for x in range(i, i + 3) for y in range(j, j + 3)
                )
        return res

```
