---
title: 2012. Sum of Beauty in the Array
seoTitle: LeetCode 2012. Sum of Beauty in the Array | Python solution and explanation
description: 2012. Sum of Beauty in the Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2012
---

[LeetCode problem 2012](https://leetcode.com/problems/sum-of-beauty-in-the-array/)

```python
class Solution:
    def sumOfBeauties(self, nums: List[int]) -> int:
        n = len(nums)
        right = [nums[-1]] * n
        for i in range(n - 2, -1, -1):
            right[i] = min(right[i + 1], nums[i])
        res = 0
        l = nums[0]
        for i in range(1, n - 1):
            r = right[i + 1]
            if l < nums[i] < r:
                res += 2
            elif nums[i - 1] < nums[i] < nums[i + 1]:
                res += 1
            l = max(l, nums[i])
        return res

```
