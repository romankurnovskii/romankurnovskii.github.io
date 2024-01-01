---
title: 1908. Game of Nim
seoTitle: LeetCode 1908. Game of Nim | Python solution and explanation
description: 1908. Game of Nim
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1908
---

[LeetCode problem 1908](https://leetcode.com/problems/game-of-nim/)

```python
class Solution:
    def nimGame(self, piles: List[int]) -> bool:
        @cache
        def dfs(st):
            lst = list(st)
            for i, x in enumerate(lst):
                for j in range(1, x + 1):
                    lst[i] -= j
                    if not dfs(tuple(lst)):
                        return True
                    lst[i] += j
            return False

        return dfs(tuple(piles))

```
