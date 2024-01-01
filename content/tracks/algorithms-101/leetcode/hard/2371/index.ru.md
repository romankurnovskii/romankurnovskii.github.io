---
title: 2371. Minimize Maximum Value in a Grid
seoTitle: LeetCode 2371. Minimize Maximum Value in a Grid | Python solution and explanation
description: 2371. Minimize Maximum Value in a Grid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2371
---

[LeetCode problem 2371](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/)

```python
class Solution:
    def minScore(self, grid: List[List[int]]) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        nums = [(v, i, j) for i, row in enumerate(grid) for j, v in enumerate(row)]
        nums.sort()
        row_max = [0] * m
        col_max = [0] * n
        res = [[0] * n for _ in range(m)]
        for _, i, j in nums:
            res[i][j] = max(row_max[i], col_max[j]) + 1
            row_max[i] = col_max[j] = res[i][j]
        return res

```
