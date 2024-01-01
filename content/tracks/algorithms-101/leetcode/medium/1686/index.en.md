---
title: 1686. Stone Game VI
seoTitle: LeetCode 1686. Stone Game VI | Python solution and explanation
description: 1686. Stone Game VI
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1686
---

[LeetCode problem 1686](https://leetcode.com/problems/stone-game-vi/)

```python
class Solution:
    def stoneGameVI(self, aliceValues: List[int], bobValues: List[int]) -> int:
        vals = [(a + b, i) for i, (a, b) in enumerate(zip(aliceValues, bobValues))]
        vals.sort(reverse=True)
        a = sum(aliceValues[i] for _, i in vals[::2])
        b = sum(bobValues[i] for _, i in vals[1::2])
        if a > b:
            return 1
        if a < b:
            return -1
        return 0

```
