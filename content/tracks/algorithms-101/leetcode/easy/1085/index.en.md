---
title: 1085. Sum of Digits in the Minimum Number
seoTitle: LeetCode 1085. Sum of Digits in the Minimum Number | Python solution and explanation
description: 1085. Sum of Digits in the Minimum Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1085
---

[LeetCode problem 1085](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/)

```python
class Solution:
    def sumOfDigits(self, nums: List[int]) -> int:
        x = min(nums)
        s = 0
        while x:
            s += x % 10
            x //= 10
        return s & 1 ^ 1

```
