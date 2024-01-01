---
title: 1997. First Day Where You Have Been in All the Rooms
seoTitle: LeetCode 1997. First Day Where You Have Been in All the Rooms | Python solution and explanation
description: 1997. First Day Where You Have Been in All the Rooms
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1997
---

[LeetCode problem 1997](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/)

```python
class Solution:
    def firstDayBeenInAllRooms(self, nextVisit: List[int]) -> int:
        n = len(nextVisit)
        f = [0] * n
        mod = 10**9 + 7
        for i in range(1, n):
            f[i] = (f[i - 1] + 1 + f[i - 1] - f[nextVisit[i - 1]] + 1) % mod
        return f[-1]

```
