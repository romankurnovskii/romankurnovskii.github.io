---
title: 1979. Find Greatest Common Divisor of Array
seoTitle: LeetCode 1979. Find Greatest Common Divisor of Array | Python solution and explanation
description: 1979. Find Greatest Common Divisor of Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1979
---

[LeetCode problem 1979](https://leetcode.com/problems/find-greatest-common-divisor-of-array/)

```python
class Solution:
    def findGCD(self, nums: List[int]) -> int:
        return gcd(max(nums), min(nums))

```
