---
title: 1701. Average Waiting Time
seoTitle: LeetCode 1701. Average Waiting Time | Python solution and explanation
description: 1701. Average Waiting Time
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1701
---

[LeetCode problem 1701](https://leetcode.com/problems/average-waiting-time/)

```python
class Solution:
    def averageWaitingTime(self, customers: List[List[int]]) -> float:
        tot = t = 0
        for a, b in customers:
            t = max(t, a) + b
            tot += t - a
        return tot / len(customers)

```
