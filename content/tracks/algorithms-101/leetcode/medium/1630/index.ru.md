---
title: 1630. Arithmetic Subarrays
seoTitle: LeetCode 1630. Arithmetic Subarrays | Python solution and explanation
description: 1630. Arithmetic Subarrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1630
---

[LeetCode problem 1630](https://leetcode.com/problems/arithmetic-subarrays/)

```python
class Solution:
    def checkArithmeticSubarrays(
        self, nums: List[int], l: List[int], r: List[int]
    ) -> List[bool]:
        def check(nums, l, r):
            n = r - l + 1
            s = set(nums[l : l + n])
            a1, an = min(nums[l : l + n]), max(nums[l : l + n])
            d, mod = divmod(an - a1, n - 1)
            return mod == 0 and all((a1 + (i - 1) * d) in s for i in range(1, n))

        return [check(nums, left, right) for left, right in zip(l, r)]

```
