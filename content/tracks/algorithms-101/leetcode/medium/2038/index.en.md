---
title: 2038. Remove Colored Pieces if Both Neighbors are the Same Color
seoTitle: LeetCode 2038. Remove Colored Pieces if Both Neighbors are the Same Color | Python solution and explanation
description: 2038. Remove Colored Pieces if Both Neighbors are the Same Color
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2038
---

[LeetCode problem 2038](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/)

```python
class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        a = b = 0
        for c, v in groupby(colors):
            m = len(list(v)) - 2
            if m > 0 and c == 'A':
                a += m
            elif m > 0 and c == 'B':
                b += m
        return a > b

```
