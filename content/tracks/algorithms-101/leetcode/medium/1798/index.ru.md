---
title: 1798. Maximum Number of Consecutive Values You Can Make
seoTitle: LeetCode 1798. Maximum Number of Consecutive Values You Can Make | Python solution and explanation
description: 1798. Maximum Number of Consecutive Values You Can Make
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1798
---

[LeetCode problem 1798](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/)

```python
class Solution:
    def getMaximumConsecutive(self, coins: List[int]) -> int:
        res = 1
        for v in sorted(coins):
            if v > res:
                break
            res += v
        return res

```
