---
title: 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
seoTitle: LeetCode 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts | Python solution and explanation
description: 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1465
---

[LeetCode problem 1465](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/)

```python
class Solution:
    def maxArea(
        self, h: int, w: int, horizontalCuts: List[int], verticalCuts: List[int]
    ) -> int:
        horizontalCuts.extend([0, h])
        verticalCuts.extend([0, w])
        horizontalCuts.sort()
        verticalCuts.sort()
        x = max(b - a for a, b in pairwise(horizontalCuts))
        y = max(b - a for a, b in pairwise(verticalCuts))
        return (x * y) % (10**9 + 7)

```
