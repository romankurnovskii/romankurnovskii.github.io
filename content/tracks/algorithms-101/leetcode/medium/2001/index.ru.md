---
title: 2001. Number of Pairs of Interchangeable Rectangles
seoTitle: LeetCode 2001. Number of Pairs of Interchangeable Rectangles | Python solution and explanation
description: 2001. Number of Pairs of Interchangeable Rectangles
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2001
---

[LeetCode problem 2001](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/)

```python
class Solution:
    def interchangeableRectangles(self, rectangles: List[List[int]]) -> int:
        res = 0
        cnt = Counter()
        for w, h in rectangles:
            g = gcd(w, h)
            w, h = w // g, h // g
            res += cnt[(w, h)]
            cnt[(w, h)] += 1
        return res

```
