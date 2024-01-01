---
title: 2104. Sum of Subarray Ranges
seoTitle: LeetCode 2104. Sum of Subarray Ranges | Python solution and explanation
description: 2104. Sum of Subarray Ranges
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2104
---

[LeetCode problem 2104](https://leetcode.com/problems/sum-of-subarray-ranges/)

```python
class Solution:
    def subArrayRanges(self, nums: List[int]) -> int:
        def f(nums):
            stk = []
            n = len(nums)
            left = [-1] * n
            right = [n] * n
            for i, v in enumerate(nums):
                while stk and nums[stk[-1]] <= v:
                    stk.pop()
                if stk:
                    left[i] = stk[-1]
                stk.append(i)
            stk = []
            for i in range(n - 1, -1, -1):
                while stk and nums[stk[-1]] < nums[i]:
                    stk.pop()
                if stk:
                    right[i] = stk[-1]
                stk.append(i)
            return sum((i - left[i]) * (right[i] - i) * v for i, v in enumerate(nums))

        mx = f(nums)
        mi = f([-v for v in nums])
        return mx + mi

```
