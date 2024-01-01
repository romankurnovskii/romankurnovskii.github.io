---
title: 1708. Largest Subarray Length K
seoTitle: LeetCode 1708. Largest Subarray Length K | Python solution and explanation
description: 1708. Largest Subarray Length K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1708
---

[LeetCode problem 1708](https://leetcode.com/problems/largest-subarray-length-k/)

```python
class Solution:
    def largestSubarray(self, nums: List[int], k: int) -> List[int]:
        i = nums.index(max(nums[: len(nums) - k + 1]))
        return nums[i : i + k]

```
