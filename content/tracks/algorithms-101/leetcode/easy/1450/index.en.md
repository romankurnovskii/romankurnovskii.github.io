---
title: 1450. Number of Students Doing Homework at a Given Time
seoTitle: LeetCode 1450. Number of Students Doing Homework at a Given Time | Python solution and explanation
description: 1450. Number of Students Doing Homework at a Given Time
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1450
---

[LeetCode problem 1450](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/)

```python
class Solution:
    def busyStudent(
        self, startTime: List[int], endTime: List[int], queryTime: int
    ) -> int:
        c = [0] * 1010
        for a, b in zip(startTime, endTime):
            c[a] += 1
            c[b + 1] -= 1
        return sum(c[: queryTime + 1])

```
