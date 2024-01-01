---
title: 1567. Maximum Length of Subarray With Positive Product
seoTitle: LeetCode 1567. Maximum Length of Subarray With Positive Product | Python solution and explanation
description: 1567. Maximum Length of Subarray With Positive Product
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1567
---

[LeetCode problem 1567](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/)

```python
class Solution:
    def getMaxLen(self, nums: List[int]) -> int:
        f1 = 1 if nums[0] > 0 else 0
        f2 = 1 if nums[0] < 0 else 0
        res = f1
        for num in nums[1:]:
            pf1, pf2 = f1, f2
            if num > 0:
                f1 += 1
                if f2 > 0:
                    f2 += 1
                else:
                    f2 = 0
            elif num < 0:
                pf1, pf2 = f1, f2
                f2 = pf1 + 1
                if pf2 > 0:
                    f1 = pf2 + 1
                else:
                    f1 = 0
            else:
                f1 = 0
                f2 = 0
            res = max(res, f1)
        return res

```
