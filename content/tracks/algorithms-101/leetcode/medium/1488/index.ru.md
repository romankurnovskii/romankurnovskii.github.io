---
title: 1488. Avoid Flood in The City
seoTitle: LeetCode 1488. Avoid Flood in The City | Python solution and explanation
description: 1488. Avoid Flood in The City
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1488
---

[LeetCode problem 1488](https://leetcode.com/problems/avoid-flood-in-the-city/)

```python
from sortedcontainers import SortedList


class Solution:
    def avoidFlood(self, rains: List[int]) -> List[int]:
        n = len(rains)
        res = [-1] * n
        sunny = SortedList()
        rainy = {}
        for i, v in enumerate(rains):
            if v:
                if v in rainy:
                    idx = sunny.bisect_right(rainy[v])
                    if idx == len(sunny):
                        return []
                    res[sunny[idx]] = v
                    sunny.discard(sunny[idx])
                rainy[v] = i
            else:
                sunny.add(i)
                res[i] = 1
        return res

```
