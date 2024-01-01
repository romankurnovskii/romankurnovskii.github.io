---
title: 2017. Grid Game
seoTitle: LeetCode 2017. Grid Game | Python solution and explanation
description: 2017. Grid Game
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2017
---

[LeetCode problem 2017](https://leetcode.com/problems/grid-game/)

```python
class Solution:
    def gridGame(self, grid: List[List[int]]) -> int:
        res = inf
        s1, s2 = sum(grid[0]), 0
        for j, v in enumerate(grid[0]):
            s1 -= v
            res = min(res, max(s1, s2))
            s2 += grid[1][j]
        return res

```
