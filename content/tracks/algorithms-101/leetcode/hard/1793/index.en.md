---
title: 1793. Maximum Score of a Good Subarray
seoTitle: LeetCode 1793. Maximum Score of a Good Subarray | Python solution and explanation
description: 1793. Maximum Score of a Good Subarray
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1793
---

[LeetCode problem 1793](https://leetcode.com/problems/maximum-score-of-a-good-subarray/)

```python
class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
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
            v = nums[i]
            while stk and nums[stk[-1]] > v:
                stk.pop()
            if stk:
                right[i] = stk[-1]
            stk.append(i)
        res = 0
        for i, v in enumerate(nums):
            if left[i] + 1 <= k <= right[i] - 1:
                res = max(res, v * (right[i] - left[i] - 1))
        return res

```
