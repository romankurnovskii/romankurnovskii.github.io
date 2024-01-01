---
title: 1217. Minimum Cost to Move Chips to The Same Position
seoTitle: LeetCode 1217. Minimum Cost to Move Chips to The Same Position | Python solution and explanation
description: 1217. Minimum Cost to Move Chips to The Same Position
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1217
---

[LeetCode problem 1217](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/)

```python
class Solution:
    def minCostToMoveChips(self, position: List[int]) -> int:
        a = sum(p % 2 for p in position)
        b = len(position) - a
        return min(a, b)

```
