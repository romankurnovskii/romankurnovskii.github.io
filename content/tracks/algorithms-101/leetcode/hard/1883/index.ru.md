---
title: 1883. Minimum Skips to Arrive at Meeting On Time
seoTitle: LeetCode 1883. Minimum Skips to Arrive at Meeting On Time | Python solution and explanation
description: 1883. Minimum Skips to Arrive at Meeting On Time
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1883
---

[LeetCode problem 1883](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/)

```python
class Solution:
    def minSkips(self, dist: List[int], speed: int, hoursBefore: int) -> int:
        n = len(dist)
        f = [[inf] * (n + 1) for _ in range(n + 1)]
        f[0][0] = 0
        for i, x in enumerate(dist, 1):
            for j in range(i + 1):
                if j < i:
                    f[i][j] = min(f[i][j], ((f[i - 1][j] + x - 1) // speed + 1) * speed)
                if j:
                    f[i][j] = min(f[i][j], f[i - 1][j - 1] + x)
        for j in range(n + 1):
            if f[n][j] <= hoursBefore * speed:
                return j
        return -1

```
