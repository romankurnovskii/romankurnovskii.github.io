---
title: 1695. Maximum Erasure Value
seoTitle: LeetCode 1695. Maximum Erasure Value | Python solution and explanation
description: 1695. Maximum Erasure Value
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1695
---

[LeetCode problem 1695](https://leetcode.com/problems/maximum-erasure-value/)

```python
class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        d = defaultdict(int)
        s = list(accumulate(nums, initial=0))
        res = j = 0
        for i, v in enumerate(nums, 1):
            j = max(j, d[v])
            res = max(res, s[i] - s[j])
            d[v] = i
        return res

```
