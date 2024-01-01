---
title: 1624. Largest Substring Between Two Equal Characters
seoTitle: LeetCode 1624. Largest Substring Between Two Equal Characters | Python solution and explanation
description: 1624. Largest Substring Between Two Equal Characters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1624
---

[LeetCode problem 1624](https://leetcode.com/problems/largest-substring-between-two-equal-characters/)

```python
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        d = {}
        res = -1
        for i, c in enumerate(s):
            if c in d:
                res = max(res, i - d[c] - 1)
            else:
                d[c] = i
        return res

```
