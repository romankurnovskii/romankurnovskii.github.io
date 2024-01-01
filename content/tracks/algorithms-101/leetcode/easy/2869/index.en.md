---
title: Minimum Operations to Collect Elements
seoTitle: LeetCode Minimum Operations to Collect Elements | Python solution and explanation
description: Minimum Operations to Collect Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2869
---

[LeetCode problem 2869](https://leetcode.com/problems/minimum-operations-to-collect-elements/)

```python
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        is_added = [False] * k
        count = 0
        n = len(nums)
        for i in range(n - 1, -1, -1):
            if nums[i] > k or is_added[nums[i] - 1]:
                continue
            is_added[nums[i] - 1] = True
            count += 1
            if count == k:
                return n - i

```
