---
title: 1413. Minimum Value to Get Positive Step by Step Sum
seoTitle: LeetCode 1413. Minimum Value to Get Positive Step by Step Sum | Python solution and explanation
description: 1413. Minimum Value to Get Positive Step by Step Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1413
---

[LeetCode problem 1413](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/)

```python
class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        s = list(accumulate(nums))
        return 1 if min(s) >= 0 else abs(min(s)) + 1

```
