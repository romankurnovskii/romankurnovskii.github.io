---
title: 2411. Smallest Subarrays With Maximum Bitwise OR
seoTitle: LeetCode 2411. Smallest Subarrays With Maximum Bitwise OR | Python solution and explanation
description: 2411. Smallest Subarrays With Maximum Bitwise OR
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2411
---

[LeetCode problem 2411](https://leetcode.com/problems/smallest-subarrays-with-maximum-bitwise-or/)

```python
class Solution:
    def smallestSubarrays(self, nums: List[int]) -> List[int]:
        n = len(nums)
        res = [1] * n
        f = [-1] * 32
        for i in range(n - 1, -1, -1):
            t = 1
            for j in range(32):
                if (nums[i] >> j) & 1:
                    f[j] = i
                elif f[j] != -1:
                    t = max(t, f[j] - i + 1)
            res[i] = t
        return res

```