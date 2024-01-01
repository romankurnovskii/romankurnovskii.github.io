---
title: 1937. Maximum Number of Points with Cost
seoTitle: LeetCode 1937. Maximum Number of Points with Cost | Python solution and explanation
description: 1937. Maximum Number of Points with Cost
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1937
---

[LeetCode problem 1937](https://leetcode.com/problems/maximum-number-of-points-with-cost/)

```python
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        n = len(points[0])
        f = points[0][:]
        for p in points[1:]:
            g = [0] * n
            lmx = -inf
            for j in range(n):
                lmx = max(lmx, f[j] + j)
                g[j] = max(g[j], p[j] + lmx - j)
            rmx = -inf
            for j in range(n - 1, -1, -1):
                rmx = max(rmx, f[j] - j)
                g[j] = max(g[j], p[j] + rmx + j)
            f = g
        return max(f)

```
