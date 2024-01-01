---
title: 1691. Maximum Height by Stacking Cuboids
seoTitle: LeetCode 1691. Maximum Height by Stacking Cuboids | Python solution and explanation
description: 1691. Maximum Height by Stacking Cuboids
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1691
---

[LeetCode problem 1691](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/)

```python
class Solution:
    def maxHeight(self, cuboids: List[List[int]]) -> int:
        for c in cuboids:
            c.sort()
        cuboids.sort()
        n = len(cuboids)
        f = [0] * n
        for i in range(n):
            for j in range(i):
                if cuboids[j][1] <= cuboids[i][1] and cuboids[j][2] <= cuboids[i][2]:
                    f[i] = max(f[i], f[j])
            f[i] += cuboids[i][2]
        return max(f)

```
