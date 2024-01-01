---
title: 1955. Count Number of Special Subsequences
seoTitle: LeetCode 1955. Count Number of Special Subsequences | Python solution and explanation
description: 1955. Count Number of Special Subsequences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1955
---

[LeetCode problem 1955](https://leetcode.com/problems/count-number-of-special-subsequences/)

```python
class Solution:
    def countSpecialSubsequences(self, nums: List[int]) -> int:
        mod = 10**9 + 7
        n = len(nums)
        f = [0] * 3
        f[0] = nums[0] == 0
        for i in range(1, n):
            if nums[i] == 0:
                f[0] = (2 * f[0] + 1) % mod
            elif nums[i] == 1:
                f[1] = (f[0] + 2 * f[1]) % mod
            else:
                f[2] = (f[1] + 2 * f[2]) % mod
        return f[2]

```
