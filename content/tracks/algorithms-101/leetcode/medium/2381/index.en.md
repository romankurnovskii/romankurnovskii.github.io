---
title: 2381. Shifting Letters II
seoTitle: LeetCode 2381. Shifting Letters II | Python solution and explanation
description: 2381. Shifting Letters II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2381
---

[LeetCode problem 2381](https://leetcode.com/problems/shifting-letters-ii/)

```python
class Solution:
    def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
        n = len(s)
        d = [0] * (n + 1)
        for i, j, v in shifts:
            if v == 0:
                v = -1
            d[i] += v
            d[j + 1] -= v
        for i in range(1, n + 1):
            d[i] += d[i - 1]
        return ''.join(
            chr(ord('a') + (ord(s[i]) - ord('a') + d[i] + 26) % 26) for i in range(n)
        )

```