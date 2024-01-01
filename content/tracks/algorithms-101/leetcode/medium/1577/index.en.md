---
title: 1577. Number of Ways Where Square of Number Is Equal to Product of Two Numbers
seoTitle: LeetCode 1577. Number of Ways Where Square of Number Is Equal to Product of Two Numbers | Python solution and explanation
description: 1577. Number of Ways Where Square of Number Is Equal to Product of Two Numbers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1577
---

[LeetCode problem 1577](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/)

```python
class Solution:
    def numTriplets(self, nums1: List[int], nums2: List[int]) -> int:
        cnt1 = Counter(nums1)
        cnt2 = Counter(nums2)
        res = 0
        for a, x in cnt1.items():
            for b, y in cnt2.items():
                if a * a % b == 0:
                    c = a * a // b
                    if b == c:
                        res += x * y * (y - 1)
                    else:
                        res += x * y * cnt2[c]
                if b * b % a == 0:
                    c = b * b // a
                    if a == c:
                        res += x * (x - 1) * y
                    else:
                        res += x * y * cnt1[c]
        return res >> 1

```
