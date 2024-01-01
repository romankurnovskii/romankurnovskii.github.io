---
title: 2187. Minimum Time to Complete Trips
seoTitle: LeetCode 2187. Minimum Time to Complete Trips | Python solution and explanation
description: 2187. Minimum Time to Complete Trips
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2187
---

[LeetCode problem 2187](https://leetcode.com/problems/minimum-time-to-complete-trips/)

```python
class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        mx = min(time) * totalTrips
        return bisect_left(
            range(mx), totalTrips, key=lambda x: sum(x // v for v in time)
        )

```
