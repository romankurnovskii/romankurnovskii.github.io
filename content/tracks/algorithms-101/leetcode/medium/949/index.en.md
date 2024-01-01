---
title: Largest Time for Given Digits
seoTitle: LeetCode Largest Time for Given Digits | Python solution and explanation
description: Largest Time for Given Digits
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 949
---

[LeetCode problem 949](https://leetcode.com/problems/largest-time-for-given-digits/)

```python
class Solution:
    def largestTimeFromDigits(self, arr: List[int]) -> str:
        res = -1
        for i in range(4):
            for j in range(4):
                for k in range(4):
                    if i != j and i != k and j != k:
                        h = arr[i] * 10 + arr[j]
                        m = arr[k] * 10 + arr[6 - i - j - k]
                        if h < 24 and m < 60:
                            res = max(res, h * 60 + m)
        return '' if res < 0 else f'{res // 60:02}:{res % 60:02}'

```
