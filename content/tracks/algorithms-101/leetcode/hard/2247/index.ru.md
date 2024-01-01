---
title: 2247. Maximum Cost of Trip With K Highways
seoTitle: LeetCode 2247. Maximum Cost of Trip With K Highways | Python solution and explanation
description: 2247. Maximum Cost of Trip With K Highways
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2247
---

[LeetCode problem 2247](https://leetcode.com/problems/maximum-cost-of-trip-with-k-highways/)

```python
class Solution:
    def maximumCost(self, n: int, highways: List[List[int]], k: int) -> int:
        if k >= n:
            return -1
        g = defaultdict(list)
        for a, b, cost in highways:
            g[a].append((b, cost))
            g[b].append((a, cost))
        f = [[-inf] * n for _ in range(1 << n)]
        for i in range(n):
            f[1 << i][i] = 0
        res = -1
        for i in range(1 << n):
            for j in range(n):
                if i >> j & 1:
                    for h, cost in g[j]:
                        if i >> h & 1:
                            f[i][j] = max(f[i][j], f[i ^ (1 << j)][h] + cost)
                if i.bit_count() == k + 1:
                    res = max(res, f[i][j])
        return res

```
