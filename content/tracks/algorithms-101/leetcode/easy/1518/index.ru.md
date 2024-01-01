---
title: 1518. Water Bottles
seoTitle: LeetCode 1518. Water Bottles | Python solution and explanation
description: 1518. Water Bottles
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1518
---

[LeetCode problem 1518](https://leetcode.com/problems/water-bottles/)

```python
class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        res = numBottles
        while numBottles >= numExchange:
            numBottles -= numExchange - 1
            res += 1
        return res

```
