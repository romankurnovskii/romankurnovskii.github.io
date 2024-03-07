---
title: 2157. Groups of Strings
seoTitle: LeetCode 2157. Groups of Strings | Python solution and explanation
description: 2157. Groups of Strings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2157
---

[LeetCode problem 2157](https://leetcode.com/problems/groups-of-strings/)

```python
class Solution:
    def groupStrings(self, words: List[str]) -> List[int]:
        def find(x):
            if p[x] != x:
                p[x] = find(p[x])
            return p[x]

        def union(a, b):
            nonlocal mx, n
            if b not in p:
                return
            pa, pb = find(a), find(b)
            if pa == pb:
                return
            p[pa] = pb
            size[pb] += size[pa]
            mx = max(mx, size[pb])
            n -= 1

        p = {}
        size = Counter()
        n = len(words)
        mx = 0
        for word in words:
            x = 0
            for c in word:
                x |= 1 << (ord(c) - ord('a'))
            p[x] = x
            size[x] += 1
            mx = max(mx, size[x])
            if size[x] > 1:
                n -= 1
        for x in p.keys():
            for i in range(26):
                union(x, x ^ (1 << i))
                if (x >> i) & 1:
                    for j in range(26):
                        if ((x >> j) & 1) == 0:
                            union(x, x ^ (1 << i) | (1 << j))
        return [n, mx]

```
