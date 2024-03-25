---
title: 713. Subarray Product Less Than K
seoTitle: LeetCode 713. Subarray Product Less Than K | Python solution and explanation
description: 713. Subarray Product Less Than K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-03-27
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 713
---

[LeetCode problem 713](https://leetcode.com/problems/subarray-product-less-than-k/)

```python
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        res, s, j = 0, 1, 0
        for i, v in enumerate(nums):
            s *= v
            while j <= i and s >= k:
                s //= nums[j]
                j += 1
            res += i - j + 1
        return res
```
