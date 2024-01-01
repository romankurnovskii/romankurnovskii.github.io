---
title: 2344. Minimum Deletions to Make Array Divisible
seoTitle: LeetCode 2344. Minimum Deletions to Make Array Divisible | Python solution and explanation
description: 2344. Minimum Deletions to Make Array Divisible
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2344
---

[LeetCode problem 2344](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/)

```python
class Solution:
    def minOperations(self, nums: List[int], numsDivide: List[int]) -> int:
        x = gcd(*numsDivide)
        y = min((v for v in nums if x % v == 0), default=0)
        return sum(v < y for v in nums) if y else -1

```
