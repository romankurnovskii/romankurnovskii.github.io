---
title: 2334. Subarray With Elements Greater Than Varying Threshold
seoTitle: LeetCode 2334. Subarray With Elements Greater Than Varying Threshold | Python solution and explanation
description: 2334. Subarray With Elements Greater Than Varying Threshold
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2334
---

[LeetCode problem 2334](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/)

```python
class Solution:
    def validSubarraySize(self, nums: List[int], threshold: int) -> int:
        n = len(nums)
        left = [-1] * n
        right = [n] * n
        stk = []
        for i, v in enumerate(nums):
            while stk and nums[stk[-1]] >= v:
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
        for i, v in enumerate(nums):
            k = right[i] - left[i] - 1
            if v > threshold // k:
                return k
        return -1

```
