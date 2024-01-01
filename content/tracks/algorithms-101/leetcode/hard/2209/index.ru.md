---
title: 2209. Minimum White Tiles After Covering With Carpets
seoTitle: LeetCode 2209. Minimum White Tiles After Covering With Carpets | Python solution and explanation
description: 2209. Minimum White Tiles After Covering With Carpets
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2209
---

[LeetCode problem 2209](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/)

```python
class Solution:
    def minimumWhiteTiles(self, floor: str, numCarpets: int, carpetLen: int) -> int:
        @cache
        def dfs(i, j):
            if i >= n:
                return 0
            if floor[i] == '0':
                return dfs(i + 1, j)
            if j == 0:
                return s[-1] - s[i]
            return min(1 + dfs(i + 1, j), dfs(i + carpetLen, j - 1))

        n = len(floor)
        s = [0] * (n + 1)
        for i, c in enumerate(floor):
            s[i + 1] = s[i] + int(c == '1')
        res = dfs(0, numCarpets)
        dfs.cache_clear()
        return res

```
