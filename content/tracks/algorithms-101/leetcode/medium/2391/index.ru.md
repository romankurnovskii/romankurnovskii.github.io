---
title: 2391. Minimum Amount of Time to Collect Garbage
seoTitle: LeetCode 2391. Minimum Amount of Time to Collect Garbage | Python solution and explanation
description: 2391. Minimum Amount of Time to Collect Garbage
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2391
---

[LeetCode problem 2391](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/)

```python
class Solution:
    def garbageCollection(self, garbage: List[str], travel: List[int]) -> int:
        def f(x: str) -> int:
            res = 0
            st = 0
            for i, s in enumerate(garbage):
                if t := s.count(x):
                    res += t + st
                    st = 0
                if i < len(travel):
                    st += travel[i]
            return res

        return f('M') + f('P') + f('G')

```
