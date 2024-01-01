---
title: 1936. Add Minimum Number of Rungs
seoTitle: LeetCode 1936. Add Minimum Number of Rungs | Python solution and explanation
description: 1936. Add Minimum Number of Rungs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1936
---

[LeetCode problem 1936](https://leetcode.com/problems/add-minimum-number-of-rungs/)

```python
class Solution:
    def addRungs(self, rungs: List[int], dist: int) -> int:
        rungs = [0] + rungs
        return sum((b - a - 1) // dist for a, b in pairwise(rungs))

```
