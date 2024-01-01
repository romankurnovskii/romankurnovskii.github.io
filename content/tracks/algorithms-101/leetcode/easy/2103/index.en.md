---
title: 2103. Rings and Rods
seoTitle: LeetCode 2103. Rings and Rods | Python solution and explanation
description: 2103. Rings and Rods
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2103
---

[LeetCode problem 2103](https://leetcode.com/problems/rings-and-rods/)

```python
class Solution:
    def countPoints(self, rings: str) -> int:
        mask = [0] * 10
        d = {"R": 1, "G": 2, "B": 4}
        for i in range(0, len(rings), 2):
            c = rings[i]
            j = int(rings[i + 1])
            mask[j] |= d[c]
        return mask.count(7)

```
