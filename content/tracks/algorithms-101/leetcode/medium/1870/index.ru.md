---
title: 1870. Minimum Speed to Arrive on Time
seoTitle: LeetCode 1870. Minimum Speed to Arrive on Time | Python solution and explanation
description: 1870. Minimum Speed to Arrive on Time
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1870
---

[LeetCode problem 1870](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/)

```python
class Solution:
    def minSpeedOnTime(self, dist: List[int], hour: float) -> int:
        def check(speed):
            res = 0
            for i, d in enumerate(dist):
                res += (d / speed) if i == len(dist) - 1 else math.ceil(d / speed)
            return res <= hour

        r = 10**7 + 1
        res = bisect_left(range(1, r), True, key=check) + 1
        return -1 if res == r else res

```
