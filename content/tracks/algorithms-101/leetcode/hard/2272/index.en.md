---
title: 2272. Substring With Largest Variance
seoTitle: LeetCode 2272. Substring With Largest Variance | Python solution and explanation
description: 2272. Substring With Largest Variance
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2272
---

[LeetCode problem 2272](https://leetcode.com/problems/substring-with-largest-variance/)

```python
class Solution:
    def largestVariance(self, s: str) -> int:
        res = 0
        for a, b in permutations(ascii_lowercase, 2):
            if a == b:
                continue
            f = [0, -inf]
            for c in s:
                if c == a:
                    f[0], f[1] = f[0] + 1, f[1] + 1
                elif c == b:
                    f[1] = max(f[1] - 1, f[0] - 1)
                    f[0] = 0
                if res < f[1]:
                    res = f[1]
        return res

```
