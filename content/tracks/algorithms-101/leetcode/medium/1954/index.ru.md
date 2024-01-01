---
title: 1954. Minimum Garden Perimeter to Collect Enough Apples
seoTitle: LeetCode 1954. Minimum Garden Perimeter to Collect Enough Apples | Python solution and explanation
description: 1954. Minimum Garden Perimeter to Collect Enough Apples
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1954
---

[LeetCode problem 1954](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/)

```python
class Solution:
    def minimumPerimeter(self, neededApples: int) -> int:
        l, r = 1, 100000
        while l < r:
            mid = (l + r) >> 1
            if 2 * mid * (mid + 1) * (2 * mid + 1) >= neededApples:
                r = mid
            else:
                l = mid + 1
        return l * 8

```
