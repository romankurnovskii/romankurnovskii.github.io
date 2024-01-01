---
title: 1625. Lexicographically Smallest String After Applying Operations
seoTitle: LeetCode 1625. Lexicographically Smallest String After Applying Operations | Python solution and explanation
description: 1625. Lexicographically Smallest String After Applying Operations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1625
---

[LeetCode problem 1625](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/)

```python
class Solution:
    def findLexSmallestString(self, s: str, a: int, b: int) -> str:
        res = s
        n = len(s)
        s = list(s)
        for _ in range(n):
            s = s[-b:] + s[:-b]
            for j in range(10):
                for k in range(1, n, 2):
                    s[k] = str((int(s[k]) + a) % 10)
                if b & 1:
                    for p in range(10):
                        for k in range(0, n, 2):
                            s[k] = str((int(s[k]) + a) % 10)
                        t = ''.join(s)
                        if res > t:
                            res = t
                else:
                    t = ''.join(s)
                    if res > t:
                        res = t
        return res

```
