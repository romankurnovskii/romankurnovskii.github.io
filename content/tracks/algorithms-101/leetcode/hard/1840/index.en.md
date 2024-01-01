---
title: 1840. Maximum Building Height
seoTitle: LeetCode 1840. Maximum Building Height | Python solution and explanation
description: 1840. Maximum Building Height
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1840
---

[LeetCode problem 1840](https://leetcode.com/problems/maximum-building-height/)

```python
class Solution:
    def maxBuilding(self, n: int, restrictions: List[List[int]]) -> int:
        r = restrictions
        r.append([1, 0])
        r.sort()
        if r[-1][0] != n:
            r.append([n, n - 1])
        m = len(r)
        for i in range(1, m):
            r[i][1] = min(r[i][1], r[i - 1][1] + r[i][0] - r[i - 1][0])
        for i in range(m - 2, 0, -1):
            r[i][1] = min(r[i][1], r[i + 1][1] + r[i + 1][0] - r[i][0])
        res = 0
        for i in range(m - 1):
            t = (r[i][1] + r[i + 1][1] + r[i + 1][0] - r[i][0]) // 2
            res = max(res, t)
        return res

```
