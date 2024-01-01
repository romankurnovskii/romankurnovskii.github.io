---
title: 1851. Minimum Interval to Include Each Query
seoTitle: LeetCode 1851. Minimum Interval to Include Each Query | Python solution and explanation
description: 1851. Minimum Interval to Include Each Query
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1851
---

[LeetCode problem 1851](https://leetcode.com/problems/minimum-interval-to-include-each-query/)

```python
class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        n, m = len(intervals), len(queries)
        intervals.sort()
        queries = sorted((x, i) for i, x in enumerate(queries))
        res = [-1] * m
        pq = []
        i = 0
        for x, j in queries:
            while i < n and intervals[i][0] <= x:
                a, b = intervals[i]
                heappush(pq, (b - a + 1, b))
                i += 1
            while pq and pq[0][1] < x:
                heappop(pq)
            if pq:
                res[j] = pq[0][0]
        return res

```
