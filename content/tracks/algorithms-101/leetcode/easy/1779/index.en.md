---
title: 1779. Find Nearest Point That Has the Same X or Y Coordinate
seoTitle: LeetCode 1779. Find Nearest Point That Has the Same X or Y Coordinate | Python solution and explanation
description: 1779. Find Nearest Point That Has the Same X or Y Coordinate
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1779
---

[LeetCode problem 1779](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/)

```python
class Solution:
    def nearestValidPoint(self, x: int, y: int, points: List[List[int]]) -> int:
        res, mi = -1, inf
        for i, (a, b) in enumerate(points):
            if a == x or b == y:
                d = abs(a - x) + abs(b - y)
                if mi > d:
                    res, mi = i, d
        return res

```
