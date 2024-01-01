---
title: 1872. Stone Game VIII
seoTitle: LeetCode 1872. Stone Game VIII | Python solution and explanation
description: 1872. Stone Game VIII
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1872
---

[LeetCode problem 1872](https://leetcode.com/problems/stone-game-viii/)

```python
class Solution:
    def stoneGameVIII(self, stones: List[int]) -> int:
        s = list(accumulate(stones))
        f = s[-1]
        for i in range(len(s) - 2, 0, -1):
            f = max(f, s[i] - f)
        return f

```
