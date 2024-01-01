---
title: 2180. Count Integers With Even Digit Sum
seoTitle: LeetCode 2180. Count Integers With Even Digit Sum | Python solution and explanation
description: 2180. Count Integers With Even Digit Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2180
---

[LeetCode problem 2180](https://leetcode.com/problems/count-integers-with-even-digit-sum/)

```python
class Solution:
    def countEven(self, num: int) -> int:
        res = num // 10 * 5 - 1
        x, s = num // 10, 0
        while x:
            s += x % 10
            x //= 10
        res += (num % 10 + 2 - (s & 1)) >> 1
        return res

```
