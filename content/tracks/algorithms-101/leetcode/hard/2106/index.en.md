---
title: 2106. Maximum Fruits Harvested After at Most K Steps
seoTitle: LeetCode 2106. Maximum Fruits Harvested After at Most K Steps | Python solution and explanation
description: 2106. Maximum Fruits Harvested After at Most K Steps
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2106
---

[LeetCode problem 2106](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/)

```python
class Solution:
    def maxTotalFruits(self, fruits: List[List[int]], startPos: int, k: int) -> int:
        res = i = s = 0
        for j, (pj, fj) in enumerate(fruits):
            s += fj
            while (
                i <= j
                and pj
                - fruits[i][0]
                + min(abs(startPos - fruits[i][0]), abs(startPos - fruits[j][0]))
                > k
            ):
                s -= fruits[i][1]
                i += 1
            res = max(res, s)
        return res

```
