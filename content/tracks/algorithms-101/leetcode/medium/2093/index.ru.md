---
title: 2093. Minimum Cost to Reach City With Discounts
seoTitle: LeetCode 2093. Minimum Cost to Reach City With Discounts | Python solution and explanation
description: 2093. Minimum Cost to Reach City With Discounts
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2093
---

[LeetCode problem 2093](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/)

```python
class Solution:
    def minimumCost(self, n: int, highways: List[List[int]], discounts: int) -> int:
        g = defaultdict(list)
        for a, b, c in highways:
            g[a].append((b, c))
            g[b].append((a, c))
        q = [(0, 0, 0)]
        dist = [[inf] * (discounts + 1) for _ in range(n)]
        while q:
            cost, i, k = heappop(q)
            if k > discounts:
                continue
            if i == n - 1:
                return cost
            if dist[i][k] > cost:
                dist[i][k] = cost
                for j, v in g[i]:
                    heappush(q, (cost + v, j, k))
                    heappush(q, (cost + v // 2, j, k + 1))
        return -1

```
