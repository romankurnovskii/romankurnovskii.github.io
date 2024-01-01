---
title: 2400. Number of Ways to Reach a Position After Exactly k Steps
seoTitle: LeetCode 2400. Number of Ways to Reach a Position After Exactly k Steps | Python solution and explanation
description: 2400. Number of Ways to Reach a Position After Exactly k Steps
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2400
---

[LeetCode problem 2400](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/)

```python
class Solution:
    def numberOfWays(self, startPos: int, endPos: int, k: int) -> int:
        @cache
        def dfs(i: int, j: int) -> int:
            if i > j or j < 0:
                return 0
            if j == 0:
                return 1 if i == 0 else 0
            return (dfs(i + 1, j - 1) + dfs(abs(i - 1), j - 1)) % mod

        mod = 10**9 + 7
        return dfs(abs(startPos - endPos), k)

```
