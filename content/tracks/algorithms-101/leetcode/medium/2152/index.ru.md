---
title: 2152. Minimum Number of Lines to Cover Points
seoTitle: LeetCode 2152. Minimum Number of Lines to Cover Points | Python solution and explanation
description: 2152. Minimum Number of Lines to Cover Points
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2152
---

[LeetCode problem 2152](https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/)

```python
class Solution:
    def minimumLines(self, points: List[List[int]]) -> int:
        def check(i, j, k):
            x1, y1 = points[i]
            x2, y2 = points[j]
            x3, y3 = points[k]
            return (x2 - x1) * (y3 - y1) == (x3 - x1) * (y2 - y1)

        @cache
        def dfs(state):
            if state == (1 << n) - 1:
                return 0
            res = inf
            for i in range(n):
                if not (state >> i & 1):
                    for j in range(i + 1, n):
                        nxt = state | 1 << i | 1 << j
                        for k in range(j + 1, n):
                            if not (nxt >> k & 1) and check(i, j, k):
                                nxt |= 1 << k
                        res = min(res, dfs(nxt) + 1)
                    if i == n - 1:
                        res = min(res, dfs(state | 1 << i) + 1)
            return res

        n = len(points)
        return dfs(0)

```
