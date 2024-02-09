---
title: 2409. Count Days Spent Together
seoTitle: LeetCode 2409. Count Days Spent Together | Python solution and explanation
description: 2409. Count Days Spent Together
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2409
---

[LeetCode problem 2409](https://leetcode.com/problems/count-days-spent-together/)

```python
class Solution:
    def countDaysTogether(
        self, arriveAlice: str, leaveAlice: str, arriveBob: str, leaveBob: str
    ) -> int:
        a = max(arriveAlice, arriveBob)
        b = min(leaveAlice, leaveBob)
        days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
        x = sum(days[: int(a[:2]) - 1]) + int(a[3:])
        y = sum(days[: int(b[:2]) - 1]) + int(b[3:])
        return max(y - x + 1, 0)

```