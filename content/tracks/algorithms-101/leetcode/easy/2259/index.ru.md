---
title: 2259. Remove Digit From Number to Maximize Result
seoTitle: LeetCode 2259. Remove Digit From Number to Maximize Result | Python solution and explanation
description: 2259. Remove Digit From Number to Maximize Result
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2259
---

[LeetCode problem 2259](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/)

```python
class Solution:
    def removeDigit(self, number: str, digit: str) -> str:
        last = -1
        n = len(number)
        for i, d in enumerate(number):
            if d == digit:
                last = i
                if i + 1 < n and d < number[i + 1]:
                    break
        return number[:last] + number[last + 1 :]

```
