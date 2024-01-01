---
title: 1966. Binary Searchable Numbers in an Unsorted Array
seoTitle: LeetCode 1966. Binary Searchable Numbers in an Unsorted Array | Python solution and explanation
description: 1966. Binary Searchable Numbers in an Unsorted Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1966
---

[LeetCode problem 1966](https://leetcode.com/problems/binary-searchable-numbers-in-an-unsorted-array/)

```python
class Solution:
    def binarySearchableNumbers(self, nums: List[int]) -> int:
        n = len(nums)
        ok = [1] * n
        mx, mi = -1000000, 1000000
        for i, x in enumerate(nums):
            if x < mx:
                ok[i] = 0
            else:
                mx = x
        for i in range(n - 1, -1, -1):
            if nums[i] > mi:
                ok[i] = 0
            else:
                mi = nums[i]
        return sum(ok)

```
