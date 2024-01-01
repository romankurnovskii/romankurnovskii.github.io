---
title: 1558. Minimum Numbers of Function Calls to Make Target Array
seoTitle: LeetCode 1558. Minimum Numbers of Function Calls to Make Target Array | Python solution and explanation
description: 1558. Minimum Numbers of Function Calls to Make Target Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1558
---

[LeetCode problem 1558](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/)

```python
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        return sum(v.bit_count() for v in nums) + max(0, max(nums).bit_length() - 1)

```
