---
title: 1502. Can Make Arithmetic Progression From Sequence
seoTitle: LeetCode 1502. Can Make Arithmetic Progression From Sequence | Python solution and explanation
description: 1502. Can Make Arithmetic Progression From Sequence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1502
---

[LeetCode problem 1502](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/)

```python
class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        a = min(arr)
        b = max(arr)
        n = len(arr)
        if (b - a) % (n - 1):
            return False
        d = (b - a) // (n - 1)
        s = set(arr)
        return all(a + d * i in s for i in range(n))

```
