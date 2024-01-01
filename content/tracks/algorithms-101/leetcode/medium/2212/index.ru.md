---
title: 2212. Maximum Points in an Archery Competition
seoTitle: LeetCode 2212. Maximum Points in an Archery Competition | Python solution and explanation
description: 2212. Maximum Points in an Archery Competition
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2212
---

[LeetCode problem 2212](https://leetcode.com/problems/maximum-points-in-an-archery-competition/)

```python
class Solution:
    def maximumBobPoints(self, numArrows: int, aliceArrows: List[int]) -> List[int]:
        n = len(aliceArrows)
        state = 0
        mx = -1
        for mask in range(1 << n):
            cnt = points = 0
            for i, alice in enumerate(aliceArrows):
                if (mask >> i) & 1:
                    cnt += alice + 1
                    points += i
            if cnt <= numArrows and mx < points:
                state = mask
                mx = points
        res = [0] * n
        for i, alice in enumerate(aliceArrows):
            if (state >> i) & 1:
                res[i] = alice + 1
                numArrows -= res[i]
        res[0] = numArrows
        return res

```
