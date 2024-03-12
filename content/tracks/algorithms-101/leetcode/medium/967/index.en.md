---
title: 967. Numbers With Same Consecutive Differences
seoTitle: LeetCode Numbers With Same Consecutive Differences | Python solution and explanation
description: Numbers With Same Consecutive Differences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 967
---

[LeetCode problem 967](https://leetcode.com/problems/numbers-with-same-consecutive-differences/)

```python
class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        res = []

        def dfs(n, k, t):
            if n == 0:
                res.append(t)
                return
            last = t % 10
            if last + k <= 9:
                dfs(n - 1, k, t * 10 + last + k)
            if last - k >= 0 and k != 0:
                dfs(n - 1, k, t * 10 + last - k)

        for i in range(1, 10):
            dfs(n - 1, k, i)
        return res

```
