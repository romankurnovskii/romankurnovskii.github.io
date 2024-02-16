---
title: 787. Cheapest Flights Within K Stops
seoTitle: LeetCode 787. Cheapest Flights Within K Stops | Python solution and explanation
description: 787. Cheapest Flights Within K Stops
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 787
---

[LeetCode problem 787](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

```python
class Solution:
    def findCheapestPrice(
        self, n: int, flights: List[List[int]], src: int, dst: int, k: int
    ) -> int:
        @cache
        def dfs(u, k):
            if u == dst:
                return 0
            if k <= 0:
                return inf
            k -= 1
            res = inf
            for v, p in g[u]:
                res = min(res, dfs(v, k) + p)
            return res

        g = defaultdict(list)
        for u, v, p in flights:
            g[u].append((v, p))
        res = dfs(src, k + 1)
        return -1 if res >= inf else res

```
