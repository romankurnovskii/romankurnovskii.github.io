---
title: 1815. Maximum Number of Groups Getting Fresh Donuts
seoTitle: LeetCode 1815. Maximum Number of Groups Getting Fresh Donuts | Python solution and explanation
description: 1815. Maximum Number of Groups Getting Fresh Donuts
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1815
---

[LeetCode problem 1815](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/)

```python
class Solution:
    def maxHappyGroups(self, batchSize: int, groups: List[int]) -> int:
        @cache
        def dfs(state, x):
            if state == mask:
                return 0
            vis = [False] * batchSize
            res = 0
            for i, v in enumerate(g):
                if state >> i & 1 == 0 and not vis[v]:
                    vis[v] = True
                    y = (x + v) % batchSize
                    res = max(res, dfs(state | 1 << i, y))
            return res + (x == 0)

        g = [v % batchSize for v in groups if v % batchSize]
        mask = (1 << len(g)) - 1
        return len(groups) - len(g) + dfs(0, 0)

```
