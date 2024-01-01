---
title: 1762. Buildings With an Ocean View
seoTitle: LeetCode 1762. Buildings With an Ocean View | Python solution and explanation
description: 1762. Buildings With an Ocean View
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1762
---

[LeetCode problem 1762](https://leetcode.com/problems/buildings-with-an-ocean-view/)

```python
class Solution:
    def findBuildings(self, heights: List[int]) -> List[int]:
        res = []
        mx = 0
        for i in range(len(heights) - 1, -1, -1):
            if heights[i] > mx:
                res.append(i)
                mx = heights[i]
        return res[::-1]

```
