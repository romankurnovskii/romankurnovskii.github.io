---
title: 2237. Count Positions on Street With Required Brightness
seoTitle: LeetCode 2237. Count Positions on Street With Required Brightness | Python solution and explanation
description: 2237. Count Positions on Street With Required Brightness
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2237
---

[LeetCode problem 2237](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/)

```python
class Solution:
    def meetRequirement(
        self, n: int, lights: List[List[int]], requirement: List[int]
    ) -> int:
        d = [0] * 100010
        for p, r in lights:
            i, j = max(0, p - r), min(n - 1, p + r)
            d[i] += 1
            d[j + 1] -= 1
        return sum(s >= r for s, r in zip(accumulate(d), requirement))

```
