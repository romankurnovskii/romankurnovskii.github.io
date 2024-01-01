---
title: 1213. Intersection of Three Sorted Arrays
seoTitle: LeetCode 1213. Intersection of Three Sorted Arrays | Python solution and explanation
description: 1213. Intersection of Three Sorted Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1213
---

[LeetCode problem 1213](https://leetcode.com/problems/intersection-of-three-sorted-arrays/)

```python
class Solution:
    def arraysIntersection(
        self, arr1: List[int], arr2: List[int], arr3: List[int]
    ) -> List[int]:
        res = []
        for x in arr1:
            i = bisect_left(arr2, x)
            j = bisect_left(arr3, x)
            if i < len(arr2) and j < len(arr3) and arr2[i] == x and arr3[j] == x:
                res.append(x)
        return res

```
