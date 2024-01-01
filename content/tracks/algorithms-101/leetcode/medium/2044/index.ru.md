---
title: 2044. Count Number of Maximum Bitwise-OR Subsets
seoTitle: LeetCode 2044. Count Number of Maximum Bitwise-OR Subsets | Python solution and explanation
description: 2044. Count Number of Maximum Bitwise-OR Subsets
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2044
---

[LeetCode problem 2044](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/)

```python
class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        n = len(nums)
        res = 0
        mx = 0
        for mask in range(1 << n):
            t = 0
            for i, v in enumerate(nums):
                if (mask >> i) & 1:
                    t |= v
            if mx < t:
                mx = t
                res = 1
            elif mx == t:
                res += 1
        return res

```
