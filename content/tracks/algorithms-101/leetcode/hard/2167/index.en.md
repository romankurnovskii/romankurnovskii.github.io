---
title: 2167. Minimum Time to Remove All Cars Containing Illegal Goods
seoTitle: LeetCode 2167. Minimum Time to Remove All Cars Containing Illegal Goods | Python solution and explanation
description: 2167. Minimum Time to Remove All Cars Containing Illegal Goods
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2167
---

[LeetCode problem 2167](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/)

```python
class Solution:
    def minimumTime(self, s: str) -> int:
        n = len(s)
        pre = [0] * (n + 1)
        suf = [0] * (n + 1)
        for i, c in enumerate(s):
            pre[i + 1] = pre[i] if c == '0' else min(pre[i] + 2, i + 1)
        for i in range(n - 1, -1, -1):
            suf[i] = suf[i + 1] if s[i] == '0' else min(suf[i + 1] + 2, n - i)
        return min(a + b for a, b in zip(pre[1:], suf[1:]))

```
