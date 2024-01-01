---
title: 1566. Detect Pattern of Length M Repeated K or More Times
seoTitle: LeetCode 1566. Detect Pattern of Length M Repeated K or More Times | Python solution and explanation
description: 1566. Detect Pattern of Length M Repeated K or More Times
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1566
---

[LeetCode problem 1566](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/)

```python
class Solution:
    def containsPattern(self, arr: List[int], m: int, k: int) -> bool:
        n = len(arr)
        for i in range(n - m * k + 1):
            j = 0
            while j < m * k:
                if arr[i + j] != arr[i + (j % m)]:
                    break
                j += 1
            if j == m * k:
                return True
        return False

```
