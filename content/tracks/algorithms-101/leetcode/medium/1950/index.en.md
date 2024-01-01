---
title: 1950. Maximum of Minimum Values in All Subarrays
seoTitle: LeetCode 1950. Maximum of Minimum Values in All Subarrays | Python solution and explanation
description: 1950. Maximum of Minimum Values in All Subarrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1950
---

[LeetCode problem 1950](https://leetcode.com/problems/maximum-of-minimum-values-in-all-subarrays/)

```python
class Solution:
    def findMaximums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        left = [-1] * n
        right = [n] * n
        stk = []
        for i, x in enumerate(nums):
            while stk and nums[stk[-1]] >= x:
                stk.pop()
            if stk:
                left[i] = stk[-1]
            stk.append(i)
        stk = []
        for i in range(n - 1, -1, -1):
            while stk and nums[stk[-1]] >= nums[i]:
                stk.pop()
            if stk:
                right[i] = stk[-1]
            stk.append(i)
        res = [0] * n
        for i in range(n):
            m = right[i] - left[i] - 1
            res[m - 1] = max(res[m - 1], nums[i])
        for i in range(n - 2, -1, -1):
            res[i] = max(res[i], res[i + 1])
        return res

```
