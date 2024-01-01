---
title: 1802. Maximum Value at a Given Index in a Bounded Array
seoTitle: LeetCode 1802. Maximum Value at a Given Index in a Bounded Array | Python solution and explanation
description: 1802. Maximum Value at a Given Index in a Bounded Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1802
---

[LeetCode problem 1802](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/)

```python
class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        def sum(x, cnt):
            return (
                (x + x - cnt + 1) * cnt // 2 if x >= cnt else (x + 1) * x // 2 + cnt - x
            )

        left, right = 1, maxSum
        while left < right:
            mid = (left + right + 1) >> 1
            if sum(mid - 1, index) + sum(mid, n - index) <= maxSum:
                left = mid
            else:
                right = mid - 1
        return left

```
