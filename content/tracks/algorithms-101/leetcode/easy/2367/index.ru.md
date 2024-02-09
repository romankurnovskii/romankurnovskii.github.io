---
title: 2367. Number of Arithmetic Triplets
seoTitle: LeetCode 2367. Number of Arithmetic Triplets | Python solution and explanation
description: 2367. Number of Arithmetic Triplets
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2367
---

[LeetCode problem 2367](https://leetcode.com/problems/number-of-arithmetic-triplets/)

```python
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        vis = set(nums)
        return sum(x + diff in vis and x + diff * 2 in vis for x in nums)

```