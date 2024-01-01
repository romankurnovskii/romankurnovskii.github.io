---
title: 1828. Queries on Number of Points Inside a Circle
seoTitle: LeetCode 1828. Queries on Number of Points Inside a Circle | Python solution and explanation
description: 1828. Queries on Number of Points Inside a Circle
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1828
---

[LeetCode problem 1828](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/)

```python
class Solution:
    def countPoints(
        self, points: List[List[int]], queries: List[List[int]]
    ) -> List[int]:
        res = []
        for x, y, r in queries:
            cnt = 0
            for i, j in points:
                dx, dy = i - x, j - y
                cnt += dx * dx + dy * dy <= r * r
            res.append(cnt)
        return res

```
