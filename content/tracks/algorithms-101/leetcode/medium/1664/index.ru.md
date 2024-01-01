---
title: 1664. Ways to Make a Fair Array
seoTitle: LeetCode 1664. Ways to Make a Fair Array | Python solution and explanation
description: 1664. Ways to Make a Fair Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1664
---

[LeetCode problem 1664](https://leetcode.com/problems/ways-to-make-a-fair-array/)

```python
class Solution:
    def waysToMakeFair(self, nums: List[int]) -> int:
        s1, s2 = sum(nums[::2]), sum(nums[1::2])
        res = t1 = t2 = 0
        for i, v in enumerate(nums):
            res += i % 2 == 0 and t2 + s1 - t1 - v == t1 + s2 - t2
            res += i % 2 == 1 and t2 + s1 - t1 == t1 + s2 - t2 - v
            t1 += v if i % 2 == 0 else 0
            t2 += v if i % 2 == 1 else 0
        return res

```
