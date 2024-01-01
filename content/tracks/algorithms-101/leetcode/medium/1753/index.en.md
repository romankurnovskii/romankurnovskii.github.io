---
title: 1753. Maximum Score From Removing Stones
seoTitle: LeetCode 1753. Maximum Score From Removing Stones | Python solution and explanation
description: 1753. Maximum Score From Removing Stones
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1753
---

[LeetCode problem 1753](https://leetcode.com/problems/maximum-score-from-removing-stones/)

```python
class Solution:
    def maximumScore(self, a: int, b: int, c: int) -> int:
        a, b, c = sorted([a, b, c])
        if a + b < c:
            return a + b
        return (a + b + c) >> 1

```
