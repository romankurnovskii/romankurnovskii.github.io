---
title: 1184. Distance Between Bus Stops
seoTitle: LeetCode 1184. Distance Between Bus Stops | Python solution and explanation
description: 1184. Distance Between Bus Stops
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1184
---

[LeetCode problem 1184](https://leetcode.com/problems/distance-between-bus-stops/)

```python
class Solution:
    def distanceBetweenBusStops(
        self, distance: List[int], start: int, destination: int
    ) -> int:
        a, n = 0, len(distance)
        while start != destination:
            a += distance[start]
            start = (start + 1) % n
        return min(a, sum(distance) - a)

```
