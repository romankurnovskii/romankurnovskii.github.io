---
title: 2285. Maximum Total Importance of Roads
seoTitle: LeetCode 2285. Maximum Total Importance of Roads | Python solution and explanation
description: 2285. Maximum Total Importance of Roads
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2285
---

[LeetCode problem 2285](https://leetcode.com/problems/maximum-total-importance-of-roads/)

```python
class Solution:
    def maximumImportance(self, n: int, roads: List[List[int]]) -> int:
        deg = [0] * n
        for a, b in roads:
            deg[a] += 1
            deg[b] += 1
        deg.sort()
        return sum(i * v for i, v in enumerate(deg, 1))

```
