---
title: 1796. Second Largest Digit in a String
seoTitle: LeetCode 1796. Second Largest Digit in a String | Python solution and explanation
description: 1796. Second Largest Digit in a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1796
---

[LeetCode problem 1796](https://leetcode.com/problems/second-largest-digit-in-a-string/)

```python
class Solution:
    def secondHighest(self, s: str) -> int:
        mask = reduce(or_, (1 << int(c) for c in s if c.isdigit()), 0)
        cnt = 0
        for i in range(9, -1, -1):
            if (mask >> i) & 1:
                cnt += 1
            if cnt == 2:
                return i
        return -1

```
