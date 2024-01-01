---
title: 1725. Number Of Rectangles That Can Form The Largest Square
seoTitle: LeetCode 1725. Number Of Rectangles That Can Form The Largest Square | Python solution and explanation
description: 1725. Number Of Rectangles That Can Form The Largest Square
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1725
---

[LeetCode problem 1725](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/)

```python
class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        res = mx = 0
        for l, w in rectangles:
            x = min(l, w)
            if mx < x:
                res = 1
                mx = x
            elif mx == x:
                res += 1
        return res

```
