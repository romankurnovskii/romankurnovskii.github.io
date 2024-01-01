---
title: 2121. Intervals Between Identical Elements
seoTitle: LeetCode 2121. Intervals Between Identical Elements | Python solution and explanation
description: 2121. Intervals Between Identical Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2121
---

[LeetCode problem 2121](https://leetcode.com/problems/intervals-between-identical-elements/)

```python
class Solution:
    def getDistances(self, arr: List[int]) -> List[int]:
        d = defaultdict(list)
        n = len(arr)
        for i, v in enumerate(arr):
            d[v].append(i)
        res = [0] * n
        for v in d.values():
            m = len(v)
            val = sum(v) - v[0] * m
            for i, p in enumerate(v):
                delta = v[i] - v[i - 1] if i >= 1 else 0
                val += i * delta - (m - i) * delta
                res[p] = val
        return res

```
