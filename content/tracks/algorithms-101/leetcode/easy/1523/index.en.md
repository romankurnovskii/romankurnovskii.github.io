---
title: 1523. Count Odd Numbers in an Interval Range
seoTitle: LeetCode 1523. Count Odd Numbers in an Interval Range | Python solution and explanation
description: 1523. Count Odd Numbers in an Interval Range
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1523
---

[LeetCode problem 1523](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/)

```python
class Solution:
    def countOdds(self, low: int, high: int) -> int:
        return ((high + 1) >> 1) - (low >> 1)

```
