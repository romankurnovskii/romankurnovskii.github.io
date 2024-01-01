---
title: 2222. Number of Ways to Select Buildings
seoTitle: LeetCode 2222. Number of Ways to Select Buildings | Python solution and explanation
description: 2222. Number of Ways to Select Buildings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2222
---

[LeetCode problem 2222](https://leetcode.com/problems/number-of-ways-to-select-buildings/)

```python
class Solution:
    def numberOfWays(self, s: str) -> int:
        n = len(s)
        cnt0 = s.count("0")
        cnt1 = n - cnt0
        c0 = c1 = 0
        res = 0
        for c in s:
            if c == "0":
                res += c1 * (cnt1 - c1)
                c0 += 1
            else:
                res += c0 * (cnt0 - c0)
                c1 += 1
        return res

```
