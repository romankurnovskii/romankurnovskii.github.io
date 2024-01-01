---
title: 2302. Count Subarrays With Score Less Than K
seoTitle: LeetCode 2302. Count Subarrays With Score Less Than K | Python solution and explanation
description: 2302. Count Subarrays With Score Less Than K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2302
---

[LeetCode problem 2302](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/)

```python
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        res = s = j = 0
        for i, v in enumerate(nums):
            s += v
            while s * (i - j + 1) >= k:
                s -= nums[j]
                j += 1
            res += i - j + 1
        return res

```
