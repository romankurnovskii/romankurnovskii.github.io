---
title: 1830. Minimum Number of Operations to Make String Sorted
seoTitle: LeetCode 1830. Minimum Number of Operations to Make String Sorted | Python solution and explanation
description: 1830. Minimum Number of Operations to Make String Sorted
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1830
---

[LeetCode problem 1830](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/)

```python
n = 3010
mod = 10**9 + 7
f = [1] + [0] * n
g = [1] + [0] * n

for i in range(1, n):
    f[i] = f[i - 1] * i % mod
    g[i] = pow(f[i], mod - 2, mod)


class Solution:
    def makeStringSorted(self, s: str) -> int:
        cnt = Counter(s)
        res, n = 0, len(s)
        for i, c in enumerate(s):
            m = sum(v for a, v in cnt.items() if a < c)
            t = f[n - i - 1] * m
            for v in cnt.values():
                t = t * g[v] % mod
            res = (res + t) % mod
            cnt[c] -= 1
            if cnt[c] == 0:
                cnt.pop(c)
        return res

```
