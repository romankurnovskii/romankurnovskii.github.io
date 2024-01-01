---
title: 1583. Count Unhappy Friends
seoTitle: LeetCode 1583. Count Unhappy Friends | Python solution and explanation
description: 1583. Count Unhappy Friends
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1583
---

[LeetCode problem 1583](https://leetcode.com/problems/count-unhappy-friends/)

```python
class Solution:
    def unhappyFriends(
        self, n: int, preferences: List[List[int]], pairs: List[List[int]]
    ) -> int:
        d = [{p: i for i, p in enumerate(v)} for v in preferences]
        p = {}
        for x, y in pairs:
            p[x] = y
            p[y] = x
        res = 0
        for x in range(n):
            y = p[x]
            res += any(d[u][x] < d[u][p[u]] for u in preferences[x][: d[x][y]])
        return res

```
