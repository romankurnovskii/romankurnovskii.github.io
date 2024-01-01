---
title: 2279. Maximum Bags With Full Capacity of Rocks
seoTitle: LeetCode 2279. Maximum Bags With Full Capacity of Rocks | Python solution and explanation
description: 2279. Maximum Bags With Full Capacity of Rocks
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2279
---

[LeetCode problem 2279](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/)

```python
class Solution:
    def maximumBags(
        self, capacity: List[int], rocks: List[int], additionalRocks: int
    ) -> int:
        d = [a - b for a, b in zip(capacity, rocks)]
        d.sort()
        res = 0
        for v in d:
            if v <= additionalRocks:
                res += 1
                additionalRocks -= v
        return res

```
