---
title: 1099. Two Sum Less Than K
seoTitle: LeetCode 1099. Two Sum Less Than K | Python solution and explanation
description: 1099. Two Sum Less Than K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1099
---

[LeetCode problem 1099](https://leetcode.com/problems/two-sum-less-than-k/)

```python
class Solution:
    def twoSumLessThanK(self, nums: List[int], k: int) -> int:
        nums.sort()
        i, j = 0, len(nums) - 1
        res = -1
        while i < j:
            if (s := nums[i] + nums[j]) < k:
                res = max(res, s)
                i += 1
            else:
                j -= 1
        return res

```
