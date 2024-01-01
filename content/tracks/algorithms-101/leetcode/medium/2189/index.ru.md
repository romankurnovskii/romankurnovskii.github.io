---
title: 2189. Number of Ways to Build House of Cards
seoTitle: LeetCode 2189. Number of Ways to Build House of Cards | Python solution and explanation
description: 2189. Number of Ways to Build House of Cards
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2189
---

[LeetCode problem 2189](https://leetcode.com/problems/number-of-ways-to-build-house-of-cards/)

```python
class Solution:
    def houseOfCards(self, n: int) -> int:
        @cache
        def dfs(n: int, k: int) -> int:
            x = 3 * k + 2
            if x > n:
                return 0
            if x == n:
                return 1
            return dfs(n - x, k + 1) + dfs(n, k + 1)

        return dfs(n, 0)

```
