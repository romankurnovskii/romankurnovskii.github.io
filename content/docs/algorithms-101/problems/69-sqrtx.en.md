---
title: 69. Sqrt(x)
description: Leetcode. 69. Sqrt(x)
toc: false
authors: [roman-kurnovskii]
tags: []
categories: [Algorithms]
series:
date: 2022-10-28
featuredImage:
weight: 1110
draft: true
---

[LeetCode problem](https://leetcode.com/problems/sqrtx/)

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**Example 1:**

    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.

**Example 2:**

    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


## First accepted

```python
class Solution:
    def mySqrt(self, x: int, div=2) -> int:
        s = x // div
        s1 = (s + div) // 2
        if s1 * s1 > x:
            s1 = self.mySqrt(x, s1)
            return s1
        else:
            return s1
```
