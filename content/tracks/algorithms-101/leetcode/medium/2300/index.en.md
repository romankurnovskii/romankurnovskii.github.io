---
title: 2300. Successful Pairs of Spells and Potions
seoTitle: LeetCode 2300. Successful Pairs of Spells and Potions | Python solution and explanation
description: 2300. Successful Pairs of Spells and Potions
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2300
---

[LeetCode problem 2300](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)

```python
class Solution:
    def successfulPairs(
        self, spells: List[int], potions: List[int], success: int
    ) -> List[int]:
        potions.sort()
        m = len(potions)
        return [m - bisect_left(potions, success / v) for v in spells]

```
