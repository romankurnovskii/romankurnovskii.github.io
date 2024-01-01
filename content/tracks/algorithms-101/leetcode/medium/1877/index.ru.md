---
title: 1877. Minimize Maximum Pair Sum in Array
seoTitle: LeetCode 1877. Minimize Maximum Pair Sum in Array | Python solution and explanation
description: 1877. Minimize Maximum Pair Sum in Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1877
---

[LeetCode problem 1877](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/)

```python
class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()
        n = len(nums)
        return max(x + nums[n - i - 1] for i, x in enumerate(nums[: n >> 1]))

```
