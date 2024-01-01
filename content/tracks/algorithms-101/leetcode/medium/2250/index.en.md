---
title: 2250. Count Number of Rectangles Containing Each Point
seoTitle: LeetCode 2250. Count Number of Rectangles Containing Each Point | Python solution and explanation
description: 2250. Count Number of Rectangles Containing Each Point
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2250
---

[LeetCode problem 2250](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/)

```python
class Solution:
    def countRectangles(
        self, rectangles: List[List[int]], points: List[List[int]]
    ) -> List[int]:
        d = defaultdict(list)
        for x, y in rectangles:
            d[y].append(x)
        for y in d.keys():
            d[y].sort()
        res = []
        for x, y in points:
            cnt = 0
            for h in range(y, 101):
                xs = d[h]
                cnt += len(xs) - bisect_left(xs, x)
            res.append(cnt)
        return res

```
