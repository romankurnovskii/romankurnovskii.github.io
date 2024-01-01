---
title: 2421. Number of Good Paths
seoTitle: LeetCode 2421. Number of Good Paths | Python solution and explanation
description: 2421. Number of Good Paths
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2421
---

[LeetCode problem 2421](https://leetcode.com/problems/number-of-good-paths/)

```python
class Solution:
    def numberOfGoodPaths(self, vals: List[int], edges: List[List[int]]) -> int:
        def find(x):
            if p[x] != x:
                p[x] = find(p[x])
            return p[x]

        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)

        n = len(vals)
        p = list(range(n))
        size = defaultdict(Counter)
        for i, v in enumerate(vals):
            size[i][v] = 1

        res = n
        for v, a in sorted(zip(vals, range(n))):
            for b in g[a]:
                if vals[b] > v:
                    continue
                pa, pb = find(a), find(b)
                if pa != pb:
                    res += size[pa][v] * size[pb][v]
                    p[pa] = pb
                    size[pb][v] += size[pa][v]
        return res

```
