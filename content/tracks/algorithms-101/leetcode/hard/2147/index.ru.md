---
title: 2147. Number of Ways to Divide a Long Corridor
seoTitle: LeetCode 2147. Number of Ways to Divide a Long Corridor | Python solution and explanation
description: 2147. Number of Ways to Divide a Long Corridor
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2147
---

[LeetCode problem 2147](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/)

```python
class Solution:
    def numberOfWays(self, corridor: str) -> int:
        @cache
        def dfs(i, cnt):
            if i == n:
                return int(cnt == 2)
            cnt += corridor[i] == 'S'
            if cnt > 2:
                return 0
            res = dfs(i + 1, cnt)
            if cnt == 2:
                res += dfs(i + 1, 0)
                res %= mod
            return res

        n = len(corridor)
        mod = 10**9 + 7
        res = dfs(0, 0)
        dfs.cache_clear()
        return res

```
