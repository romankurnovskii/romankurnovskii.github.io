---
title: 2358. Maximum Number of Groups Entering a Competition
seoTitle: LeetCode 2358. Maximum Number of Groups Entering a Competition | Python solution and explanation
description: 2358. Maximum Number of Groups Entering a Competition
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2358
---

[LeetCode problem 2358](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/)

```python
class Solution:
    def maximumGroups(self, grades: List[int]) -> int:
        n = len(grades)
        return bisect_right(range(n + 1), n * 2, key=lambda x: x * x + x) - 1

```
