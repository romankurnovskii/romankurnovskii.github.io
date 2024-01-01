---
title: 1266. Minimum Time Visiting All Points
seoTitle: LeetCode 1266. Minimum Time Visiting All Points | Python solution and explanation
description: 1266. Minimum Time Visiting All Points
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1266
---

[LeetCode problem 1266](https://leetcode.com/problems/minimum-time-visiting-all-points/)

```python
class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        return sum(
            max(abs(p1[0] - p2[0]), abs(p1[1] - p2[1])) for p1, p2 in pairwise(points)
        )

```
