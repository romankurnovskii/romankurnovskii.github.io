---
title: 1921. Eliminate Maximum Number of Monsters
seoTitle: LeetCode 1921. Eliminate Maximum Number of Monsters | Python solution and explanation
description: 1921. Eliminate Maximum Number of Monsters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1921
---

[LeetCode problem 1921](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/)

```python
class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        times = sorted((d - 1) // s for d, s in zip(dist, speed))
        for i, t in enumerate(times):
            if t < i:
                return i
        return len(times)

```
