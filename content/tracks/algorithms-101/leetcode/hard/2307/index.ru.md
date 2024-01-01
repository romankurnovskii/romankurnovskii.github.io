---
title: 2307. Check for Contradictions in Equations
seoTitle: LeetCode 2307. Check for Contradictions in Equations | Python solution and explanation
description: 2307. Check for Contradictions in Equations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2307
---

[LeetCode problem 2307](https://leetcode.com/problems/check-for-contradictions-in-equations/)

```python
class Solution:
    def checkContradictions(
        self, equations: List[List[str]], values: List[float]
    ) -> bool:
        def find(x: int) -> int:
            if p[x] != x:
                root = find(p[x])
                w[x] *= w[p[x]]
                p[x] = root
            return p[x]

        d = defaultdict(int)
        n = 0
        for e in equations:
            for s in e:
                if s not in d:
                    d[s] = n
                    n += 1
        p = list(range(n))
        w = [1.0] * n
        eps = 1e-5
        for (a, b), v in zip(equations, values):
            a, b = d[a], d[b]
            pa, pb = find(a), find(b)
            if pa != pb:
                p[pb] = pa
                w[pb] = v * w[a] / w[b]
            elif abs(v * w[a] - w[b]) >= eps:
                return True
        return False

```
