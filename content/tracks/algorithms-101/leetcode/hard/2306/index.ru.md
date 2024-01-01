---
title: 2306. Naming a Company
seoTitle: LeetCode 2306. Naming a Company | Python solution and explanation
description: 2306. Naming a Company
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2306
---

[LeetCode problem 2306](https://leetcode.com/problems/naming-a-company/)

```python
class Solution:
    def distinctNames(self, ideas: List[str]) -> int:
        s = set(ideas)
        f = [[0] * 26 for _ in range(26)]
        for v in ideas:
            i = ord(v[0]) - ord('a')
            t = list(v)
            for j in range(26):
                t[0] = chr(ord('a') + j)
                if ''.join(t) not in s:
                    f[i][j] += 1
        res = 0
        for v in ideas:
            i = ord(v[0]) - ord('a')
            t = list(v)
            for j in range(26):
                t[0] = chr(ord('a') + j)
                if ''.join(t) not in s:
                    res += f[j][i]
        return res

```
