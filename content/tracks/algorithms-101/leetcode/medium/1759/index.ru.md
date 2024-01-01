---
title: 1759. Count Number of Homogenous Substrings
seoTitle: LeetCode 1759. Count Number of Homogenous Substrings | Python solution and explanation
description: 1759. Count Number of Homogenous Substrings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1759
---

[LeetCode problem 1759](https://leetcode.com/problems/count-number-of-homogenous-substrings/)

```python
class Solution:
    def countHomogenous(self, s: str) -> int:
        mod = 10**9 + 7
        res = cnt = 1
        for a, b in pairwise(s):
            cnt = cnt + 1 if a == b else 1
            res = (res + cnt) % mod
        return res

```
