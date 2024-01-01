---
title: 2289. Steps to Make Array Non-decreasing
seoTitle: LeetCode 2289. Steps to Make Array Non-decreasing | Python solution and explanation
description: 2289. Steps to Make Array Non-decreasing
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2289
---

[LeetCode problem 2289](https://leetcode.com/problems/steps-to-make-array-non-decreasing/)

```python
class Solution:
    def totalSteps(self, nums: List[int]) -> int:
        stk = []
        res, n = 0, len(nums)
        dp = [0] * n
        for i in range(n - 1, -1, -1):
            while stk and nums[i] > nums[stk[-1]]:
                dp[i] = max(dp[i] + 1, dp[stk.pop()])
            stk.append(i)
        return max(dp)

```
