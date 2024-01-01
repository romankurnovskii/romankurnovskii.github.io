---
title: 2137. Pour Water Between Buckets to Make Water Levels Equal
seoTitle: LeetCode 2137. Pour Water Between Buckets to Make Water Levels Equal | Python solution and explanation
description: 2137. Pour Water Between Buckets to Make Water Levels Equal
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2137
---

[LeetCode problem 2137](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/)

```python
class Solution:
    def equalizeWater(self, buckets: List[int], loss: int) -> float:
        def check(v):
            a = b = 0
            for x in buckets:
                if x >= v:
                    a += x - v
                else:
                    b += (v - x) * 100 / (100 - loss)
            return a >= b

        l, r = 0, max(buckets)
        while r - l > 1e-5:
            mid = (l + r) / 2
            if check(mid):
                l = mid
            else:
                r = mid
        return l

```
