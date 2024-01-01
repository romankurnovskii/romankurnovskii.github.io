---
title: 962. Maximum Width Ramp
seoTitle: LeetCode Maximum Width Ramp | Python solution and explanation
description: Maximum Width Ramp
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 962
---

[LeetCode problem 962](https://leetcode.com/problems/maximum-width-ramp/)

```python
class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        stk = []
        for i, v in enumerate(nums):
            if not stk or nums[stk[-1]] > v:
                stk.append(i)
        res = 0
        for i in range(len(nums) - 1, -1, -1):
            while stk and nums[stk[-1]] <= nums[i]:
                res = max(res, i - stk.pop())
            if not stk:
                break
        return res

```
