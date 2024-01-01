---
title: 1546. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
seoTitle: LeetCode 1546. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target | Python solution and explanation
description: 1546. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1546
---

[LeetCode problem 1546](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/)

```python
class Solution:
    def maxNonOverlapping(self, nums: List[int], target: int) -> int:
        res = 0
        i, n = 0, len(nums)
        while i < n:
            s = 0
            vis = {0}
            while i < n:
                s += nums[i]
                if s - target in vis:
                    res += 1
                    break
                i += 1
                vis.add(s)
            i += 1
        return res

```
