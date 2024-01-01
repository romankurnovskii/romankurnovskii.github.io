---
title: 1776. Car Fleet II
seoTitle: LeetCode 1776. Car Fleet II | Python solution and explanation
description: 1776. Car Fleet II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1776
---

[LeetCode problem 1776](https://leetcode.com/problems/car-fleet-ii/)

```python
class Solution:
    def getCollisionTimes(self, cars: List[List[int]]) -> List[float]:
        stk = []
        n = len(cars)
        res = [-1] * n
        for i in range(n - 1, -1, -1):
            while stk:
                j = stk[-1]
                if cars[i][1] > cars[j][1]:
                    t = (cars[j][0] - cars[i][0]) / (cars[i][1] - cars[j][1])
                    if res[j] == -1 or t <= res[j]:
                        res[i] = t
                        break
                stk.pop()
            stk.append(i)
        return res

```
