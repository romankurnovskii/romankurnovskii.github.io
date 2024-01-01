---
title: 2310. Sum of Numbers With Units Digit K
seoTitle: LeetCode 2310. Sum of Numbers With Units Digit K | Python solution and explanation
description: 2310. Sum of Numbers With Units Digit K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2310
---

[LeetCode problem 2310](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/)

```python
class Solution:
    def minimumNumbers(self, num: int, k: int) -> int:
        @cache
        def dfs(v):
            if v == 0:
                return 0
            if v < 10 and v % k:
                return inf
            i = 0
            t = inf
            while (x := i * 10 + k) <= v:
                t = min(t, dfs(v - x))
                i += 1
            return t + 1

        if num == 0:
            return 0
        if k == 0:
            return -1 if num % 10 else 1
        res = dfs(num)
        return -1 if res >= inf else res

```
