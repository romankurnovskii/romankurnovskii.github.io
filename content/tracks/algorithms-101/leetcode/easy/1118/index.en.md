---
title: 1118. Number of Days in a Month
seoTitle: LeetCode 1118. Number of Days in a Month | Python solution and explanation
description: 1118. Number of Days in a Month
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1118
---

[LeetCode problem 1118](https://leetcode.com/problems/number-of-days-in-a-month/)

```python
class Solution:
    def numberOfDays(self, year: int, month: int) -> int:
        leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
        days = [0, 31, 29 if leap else 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        return days[month]

```
