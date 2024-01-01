---
title: 1788. Maximize the Beauty of the Garden
seoTitle: LeetCode 1788. Maximize the Beauty of the Garden | Python solution and explanation
description: 1788. Maximize the Beauty of the Garden
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1788
---

[LeetCode problem 1788](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/)

```python
class Solution:
    def maximumBeauty(self, flowers: List[int]) -> int:
        s = [0] * (len(flowers) + 1)
        d = {}
        res = -inf
        for i, v in enumerate(flowers):
            if v in d:
                res = max(res, s[i] - s[d[v] + 1] + v * 2)
            else:
                d[v] = i
            s[i + 1] = s[i] + max(v, 0)
        return res

```
