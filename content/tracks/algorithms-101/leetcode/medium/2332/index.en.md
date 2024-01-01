---
title: 2332. The Latest Time to Catch a Bus
seoTitle: LeetCode 2332. The Latest Time to Catch a Bus | Python solution and explanation
description: 2332. The Latest Time to Catch a Bus
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2332
---

[LeetCode problem 2332](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/)

```python
class Solution:
    def latestTimeCatchTheBus(
        self, buses: List[int], passengers: List[int], capacity: int
    ) -> int:
        buses.sort()
        passengers.sort()
        j = 0
        for t in buses:
            c = capacity
            while c and j < len(passengers) and passengers[j] <= t:
                c, j = c - 1, j + 1
        j -= 1
        res = buses[-1] if c else passengers[j]
        while ~j and passengers[j] == res:
            res, j = res - 1, j - 1
        return res

```
