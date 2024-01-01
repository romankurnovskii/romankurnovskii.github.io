---
title: 2256. Minimum Average Difference
seoTitle: LeetCode 2256. Minimum Average Difference | Python solution and explanation
description: 2256. Minimum Average Difference
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2256
---

[LeetCode problem 2256](https://leetcode.com/problems/minimum-average-difference/)

```python
class Solution:
    def minimumAverageDifference(self, nums: List[int]) -> int:
        pre, suf = 0, sum(nums)
        n = len(nums)
        res, mi = 0, inf
        for i, x in enumerate(nums):
            pre += x
            suf -= x
            a = pre // (i + 1)
            b = 0 if n - i - 1 == 0 else suf // (n - i - 1)
            if (t := abs(a - b)) < mi:
                res = i
                mi = t
        return res

```
