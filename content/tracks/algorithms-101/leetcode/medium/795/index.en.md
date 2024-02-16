---
title: 795. Number of Subarrays with Bounded Maximum
seoTitle: LeetCode 795. Number of Subarrays with Bounded Maximum | Python solution and explanation
description: 795. Number of Subarrays with Bounded Maximum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 795
---

[LeetCode problem 795](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/)

```python
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        n = len(nums)
        l, r = [-1] * n, [n] * n
        stk = []
        for i, v in enumerate(nums):
            while stk and nums[stk[-1]] <= v:
                stk.pop()
            if stk:
                l[i] = stk[-1]
            stk.append(i)
        stk = []
        for i in range(n - 1, -1, -1):
            while stk and nums[stk[-1]] < nums[i]:
                stk.pop()
            if stk:
                r[i] = stk[-1]
            stk.append(i)
        return sum(
            (i - l[i]) * (r[i] - i) for i, v in enumerate(nums) if left <= v <= right
        )

```
