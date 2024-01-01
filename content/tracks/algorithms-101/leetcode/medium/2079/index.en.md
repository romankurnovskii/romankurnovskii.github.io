---
title: 2079. Watering Plants
seoTitle: LeetCode 2079. Watering Plants | Python solution and explanation
description: 2079. Watering Plants
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2079
---

[LeetCode problem 2079](https://leetcode.com/problems/watering-plants/)

```python
class Solution:
    def wateringPlants(self, plants: List[int], capacity: int) -> int:
        res, cap = 0, capacity
        for i, x in enumerate(plants):
            if cap >= x:
                cap -= x
                res += 1
            else:
                cap = capacity - x
                res += i * 2 + 1
        return res

```
