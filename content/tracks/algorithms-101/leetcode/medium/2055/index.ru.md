---
title: 2055. Plates Between Candles
seoTitle: LeetCode 2055. Plates Between Candles | Python solution and explanation
description: 2055. Plates Between Candles
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2055
---

[LeetCode problem 2055](https://leetcode.com/problems/plates-between-candles/)

```python
class Solution:
    def platesBetweenCandles(self, s: str, queries: List[List[int]]) -> List[int]:
        n = len(s)
        presum = [0] * (n + 1)
        for i, c in enumerate(s):
            presum[i + 1] = presum[i] + (c == '*')

        left, right = [0] * n, [0] * n
        l = r = -1
        for i, c in enumerate(s):
            if c == '|':
                l = i
            left[i] = l
        for i in range(n - 1, -1, -1):
            if s[i] == '|':
                r = i
            right[i] = r

        res = [0] * len(queries)
        for k, (l, r) in enumerate(queries):
            i, j = right[l], left[r]
            if i >= 0 and j >= 0 and i < j:
                res[k] = presum[j] - presum[i + 1]
        return res

```
