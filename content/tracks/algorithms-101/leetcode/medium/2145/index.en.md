---
title: 2145. Count the Hidden Sequences
seoTitle: LeetCode 2145. Count the Hidden Sequences | Python solution and explanation
description: 2145. Count the Hidden Sequences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2145
---

[LeetCode problem 2145](https://leetcode.com/problems/count-the-hidden-sequences/)

```python
class Solution:
    def numberOfArrays(self, differences: List[int], lower: int, upper: int) -> int:
        num = mi = mx = 0
        for d in differences:
            num += d
            mi = min(mi, num)
            mx = max(mx, num)
        return max(0, upper - lower - (mx - mi) + 1)

```
