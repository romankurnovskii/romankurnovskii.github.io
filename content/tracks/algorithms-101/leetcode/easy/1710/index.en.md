---
title: 1710. Maximum Units on a Truck
seoTitle: LeetCode 1710. Maximum Units on a Truck | Python solution and explanation
description: 1710. Maximum Units on a Truck
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1710
---

[LeetCode problem 1710](https://leetcode.com/problems/maximum-units-on-a-truck/)

```python
class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        cnt = [0] * 1001
        for a, b in boxTypes:
            cnt[b] += a
        res = 0
        for b in range(1000, 0, -1):
            a = cnt[b]
            if a:
                res += b * min(truckSize, a)
                truckSize -= a
                if truckSize <= 0:
                    break
        return res

```
