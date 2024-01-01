---
title: 2369. Check if There is a Valid Partition For The Array
seoTitle: LeetCode 2369. Check if There is a Valid Partition For The Array | Python solution and explanation
description: 2369. Check if There is a Valid Partition For The Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2369
---

[LeetCode problem 2369](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/)

```python
class Solution:
    def validPartition(self, nums: List[int]) -> bool:
        n = len(nums)
        dp = [False] * (n + 1)
        dp[0] = True
        for i in range(2, n + 1):
            if nums[i - 1] == nums[i - 2]:
                dp[i] = dp[i] or dp[i - 2]
            if i > 2 and nums[i - 1] == nums[i - 2] == nums[i - 3]:
                dp[i] = dp[i] or dp[i - 3]
            if (
                i > 2
                and nums[i - 1] - nums[i - 2] == 1
                and nums[i - 2] - nums[i - 3] == 1
            ):
                dp[i] = dp[i] or dp[i - 3]
        return dp[-1]

```
