---
title: 2266. Count Number of Texts
seoTitle: LeetCode 2266. Count Number of Texts | Python solution and explanation
description: 2266. Count Number of Texts
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2266
---

[LeetCode problem 2266](https://leetcode.com/problems/count-number-of-texts/)

```python
mod = 10**9 + 7
f = [1, 1, 2, 4]
g = [1, 1, 2, 4]
for _ in range(100000):
    f.append((f[-1] + f[-2] + f[-3]) % mod)
    g.append((g[-1] + g[-2] + g[-3] + g[-4]) % mod)


class Solution:
    def countTexts(self, pressedKeys: str) -> int:
        res = 1
        for ch, s in groupby(pressedKeys):
            m = len(list(s))
            res = res * (g[m] if ch in "79" else f[m]) % mod
        return res

```
