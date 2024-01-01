---
title: 1498. Number of Subsequences That Satisfy the Given Sum Condition
seoTitle: LeetCode 1498. Number of Subsequences That Satisfy the Given Sum Condition | Python solution and explanation
description: 1498. Number of Subsequences That Satisfy the Given Sum Condition
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1498
---

[LeetCode problem 1498](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/)

```python
class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        mod = 10**9 + 7
        nums.sort()
        n = len(nums)
        f = [1] + [0] * n
        for i in range(1, n + 1):
            f[i] = f[i - 1] * 2 % mod
        res = 0
        for i, x in enumerate(nums):
            if x * 2 > target:
                break
            j = bisect_right(nums, target - x, i + 1) - 1
            res = (res + f[j - i]) % mod
        return res

```
