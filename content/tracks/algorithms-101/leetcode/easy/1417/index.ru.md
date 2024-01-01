---
title: 1417. Reformat The String
seoTitle: LeetCode 1417. Reformat The String | Python solution and explanation
description: 1417. Reformat The String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1417
---

[LeetCode problem 1417](https://leetcode.com/problems/reformat-the-string/)

```python
class Solution:
    def reformat(self, s: str) -> str:
        a = [c for c in s if c.islower()]
        b = [c for c in s if c.isdigit()]
        if abs(len(a) - len(b)) > 1:
            return ''
        if len(a) < len(b):
            a, b = b, a
        res = []
        for x, y in zip(a, b):
            res.append(x + y)
        if len(a) > len(b):
            res.append(a[-1])
        return ''.join(res)

```
