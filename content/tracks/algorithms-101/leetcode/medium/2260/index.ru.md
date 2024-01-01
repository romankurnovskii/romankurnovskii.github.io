---
title: 2260. Minimum Consecutive Cards to Pick Up
seoTitle: LeetCode 2260. Minimum Consecutive Cards to Pick Up | Python solution and explanation
description: 2260. Minimum Consecutive Cards to Pick Up
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2260
---

[LeetCode problem 2260](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/)

```python
class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        last = {}
        res = inf
        for i, x in enumerate(cards):
            if x in last:
                res = min(res, i - last[x] + 1)
            last[x] = i
        return -1 if res == inf else res

```
