---
title: 2249. Count Lattice Points Inside a Circle
seoTitle: LeetCode 2249. Count Lattice Points Inside a Circle | Python solution and explanation
description: 2249. Count Lattice Points Inside a Circle
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2249
---

[LeetCode problem 2249](https://leetcode.com/problems/count-lattice-points-inside-a-circle/)

```python
class Solution:
    def countLatticePoints(self, circles: List[List[int]]) -> int:
        res = 0
        mx = max(x + r for x, _, r in circles)
        my = max(y + r for _, y, r in circles)
        for i in range(mx + 1):
            for j in range(my + 1):
                for x, y, r in circles:
                    dx, dy = i - x, j - y
                    if dx * dx + dy * dy <= r * r:
                        res += 1
                        break
        return res

```
