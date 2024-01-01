---
title: 2028. Find Missing Observations
seoTitle: LeetCode 2028. Find Missing Observations | Python solution and explanation
description: 2028. Find Missing Observations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2028
---

[LeetCode problem 2028](https://leetcode.com/problems/find-missing-observations/)

```python
class Solution:
    def missingRolls(self, rolls: List[int], mean: int, n: int) -> List[int]:
        m = len(rolls)
        s = (n + m) * mean - sum(rolls)
        if s > n * 6 or s < n:
            return []
        res = [s // n] * n
        for i in range(s % n):
            res[i] += 1
        return res

```
