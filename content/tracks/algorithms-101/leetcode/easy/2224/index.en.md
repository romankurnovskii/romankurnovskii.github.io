---
title: 2224. Minimum Number of Operations to Convert Time
seoTitle: LeetCode 2224. Minimum Number of Operations to Convert Time | Python solution and explanation
description: 2224. Minimum Number of Operations to Convert Time
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2224
---

[LeetCode problem 2224](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/)

```python
class Solution:
    def convertTime(self, current: str, correct: str) -> int:
        a = int(current[:2]) * 60 + int(current[3:])
        b = int(correct[:2]) * 60 + int(correct[3:])
        res, d = 0, b - a
        for i in [60, 15, 5, 1]:
            res += d // i
            d %= i
        return res

```
