---
title: 2164. Sort Even and Odd Indices Independently
seoTitle: LeetCode 2164. Sort Even and Odd Indices Independently | Python solution and explanation
description: 2164. Sort Even and Odd Indices Independently
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2164
---

[LeetCode problem 2164](https://leetcode.com/problems/sort-even-and-odd-indices-independently/)

```python
class Solution:
    def sortEvenOdd(self, nums: List[int]) -> List[int]:
        a = sorted(nums[::2])
        b = sorted(nums[1::2], reverse=True)
        nums[::2] = a
        nums[1::2] = b
        return nums

```
