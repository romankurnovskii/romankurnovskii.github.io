---
title: 930. Binary Subarrays With Sum
seoTitle: LeetCode Binary 930. Subarrays With Sum | Python solution and explanation
description: Binary Subarrays With Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 930
---

[LeetCode problem 930](https://leetcode.com/problems/binary-subarrays-with-sum/)

```python
class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        i1 = i2 = s1 = s2 = j = 0
        res = 0
        n = len(nums)
        while j < n:
            s1 += nums[j]
            s2 += nums[j]
            while i1 <= j and s1 > goal:
                s1 -= nums[i1]
                i1 += 1
            while i2 <= j and s2 >= goal:
                s2 -= nums[i2]
                i2 += 1
            res += i2 - i1
            j += 1
        return res
```
