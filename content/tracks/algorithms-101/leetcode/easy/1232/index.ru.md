---
title: 1232. Check If It Is a Straight Line
seoTitle: LeetCode 1232. Check If It Is a Straight Line | Python solution and explanation
description: 1232. Check If It Is a Straight Line
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1232
---

[LeetCode problem 1232](https://leetcode.com/problems/check-if-it-is-a-straight-line/)

```python
class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        x1, y1 = coordinates[0]
        x2, y2 = coordinates[1]
        for x, y in coordinates[2:]:
            if (x - x1) * (y2 - y1) != (y - y1) * (x2 - x1):
                return False
        return True

```
