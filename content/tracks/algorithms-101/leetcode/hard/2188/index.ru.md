---
title: 2188. Minimum Time to Finish the Race
seoTitle: LeetCode 2188. Minimum Time to Finish the Race | Python solution and explanation
description: 2188. Minimum Time to Finish the Race
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2188
---

[LeetCode problem 2188](https://leetcode.com/problems/minimum-time-to-finish-the-race/)

```python
class Solution:
    def minimumFinishTime(
        self, tires: List[List[int]], changeTime: int, numLaps: int
    ) -> int:
        cost = [inf] * 18
        for f, r in tires:
            i, s, t = 1, 0, f
            while t <= changeTime + f:
                s += t
                cost[i] = min(cost[i], s)
                t *= r
                i += 1
        f = [inf] * (numLaps + 1)
        f[0] = -changeTime
        for i in range(1, numLaps + 1):
            for j in range(1, min(18, i + 1)):
                f[i] = min(f[i], f[i - j] + cost[j])
            f[i] += changeTime
        return f[numLaps]

```
