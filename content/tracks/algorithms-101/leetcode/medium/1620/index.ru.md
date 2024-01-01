---
title: 1620. Coordinate With Maximum Network Quality
seoTitle: LeetCode 1620. Coordinate With Maximum Network Quality | Python solution and explanation
description: 1620. Coordinate With Maximum Network Quality
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1620
---

[LeetCode problem 1620](https://leetcode.com/problems/coordinate-with-maximum-network-quality/)

```python
class Solution:
    def bestCoordinate(self, towers: List[List[int]], radius: int) -> List[int]:
        mx = 0
        res = [0, 0]
        for i in range(51):
            for j in range(51):
                t = 0
                for x, y, q in towers:
                    d = ((x - i) ** 2 + (y - j) ** 2) ** 0.5
                    if d <= radius:
                        t += floor(q / (1 + d))
                if t > mx:
                    mx = t
                    res = [i, j]
        return res

```
