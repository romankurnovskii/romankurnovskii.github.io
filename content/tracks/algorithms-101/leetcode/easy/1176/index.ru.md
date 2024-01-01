---
title: 1176. Diet Plan Performance
seoTitle: LeetCode 1176. Diet Plan Performance | Python solution and explanation
description: 1176. Diet Plan Performance
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1176
---

[LeetCode problem 1176](https://leetcode.com/problems/diet-plan-performance/)

```python
class Solution:
    def dietPlanPerformance(
        self, calories: List[int], k: int, lower: int, upper: int
    ) -> int:
        def check(s):
            if s < lower:
                return -1
            if s > upper:
                return 1
            return 0

        s, n = sum(calories[:k]), len(calories)
        res = check(s)
        for i in range(k, n):
            s += calories[i] - calories[i - k]
            res += check(s)
        return res

```
