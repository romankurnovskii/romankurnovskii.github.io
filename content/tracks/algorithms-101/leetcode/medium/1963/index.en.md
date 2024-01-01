---
title: 1963. Minimum Number of Swaps to Make the String Balanced
seoTitle: LeetCode 1963. Minimum Number of Swaps to Make the String Balanced | Python solution and explanation
description: 1963. Minimum Number of Swaps to Make the String Balanced
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1963
---

[LeetCode problem 1963](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/)

```python
class Solution:
    def minSwaps(self, s: str) -> int:
        x = 0
        for c in s:
            if c == "[":
                x += 1
            elif x:
                x -= 1
        return (x + 1) >> 1

```
