---
title: 2413. Smallest Even Multiple
seoTitle: LeetCode 2413. Smallest Even Multiple | Python solution and explanation
description: 2413. Smallest Even Multiple
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2413
---

[LeetCode problem 2413](https://leetcode.com/problems/smallest-even-multiple/)

```python
class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        return n if n % 2 == 0 else n * 2

```
