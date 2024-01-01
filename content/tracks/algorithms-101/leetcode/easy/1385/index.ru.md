---
title: 1385. Find the Distance Value Between Two Arrays
seoTitle: LeetCode 1385. Find the Distance Value Between Two Arrays | Python solution and explanation
description: 1385. Find the Distance Value Between Two Arrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1385
---

[LeetCode problem 1385](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/)

```python
class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        def check(a: int) -> bool:
            i = bisect_left(arr2, a - d)
            return i == len(arr2) or arr2[i] > a + d

        arr2.sort()
        return sum(check(a) for a in arr1)

```
