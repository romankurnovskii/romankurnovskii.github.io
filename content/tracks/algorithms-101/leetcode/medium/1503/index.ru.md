---
title: 1503. Last Moment Before All Ants Fall Out of a Plank
seoTitle: LeetCode 1503. Last Moment Before All Ants Fall Out of a Plank | Python solution and explanation
description: 1503. Last Moment Before All Ants Fall Out of a Plank
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1503
---

[LeetCode problem 1503](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/)

```python
class Solution:
    def getLastMoment(self, n: int, left: List[int], right: List[int]) -> int:
        res = 0
        for x in left:
            res = max(res, x)
        for x in right:
            res = max(res, n - x)
        return res

```
