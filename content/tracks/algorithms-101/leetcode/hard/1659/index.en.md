---
title: 1659. Maximize Grid Happiness
seoTitle: LeetCode 1659. Maximize Grid Happiness | Python solution and explanation
description: 1659. Maximize Grid Happiness
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1659
---

[LeetCode problem 1659](https://leetcode.com/problems/maximize-grid-happiness/)

```python
class Solution:
    def getMaxGridHappiness(
        self, m: int, n: int, introvertsCount: int, extrovertsCount: int
    ) -> int:
        @cache
        def dfs(pos: int, pre: int, ic: int, ec: int) -> int:
            if pos == m * n or (ic == 0 and ec == 0):
                return 0
            res = 0
            up = pre // p
            left = 0 if pos % n == 0 else pre % 3
            for i in range(3):
                if (i == 1 and ic == 0) or (i == 2 and ec == 0):
                    continue
                cur = pre % p * 3 + i
                a = h[up][i] + h[left][i]
                b = dfs(pos + 1, cur, ic - (i == 1), ec - (i == 2))
                c = 0
                if i == 1:
                    c = 120
                elif i == 2:
                    c = 40
                res = max(res, a + b + c)
            return res

        p = pow(3, n - 1)
        h = [[0, 0, 0], [0, -60, -10], [0, -10, 40]]
        return dfs(0, 0, introvertsCount, extrovertsCount)

```
