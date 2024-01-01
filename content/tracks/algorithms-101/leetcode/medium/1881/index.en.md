---
title: 1881. Maximum Value after Insertion
seoTitle: LeetCode 1881. Maximum Value after Insertion | Python solution and explanation
description: 1881. Maximum Value after Insertion
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1881
---

[LeetCode problem 1881](https://leetcode.com/problems/maximum-value-after-insertion/)

```python
class Solution:
    def maxValue(self, n: str, x: int) -> str:
        if n[0] != '-':
            for i, c in enumerate(n):
                if int(c) < x:
                    return n[:i] + str(x) + n[i:]
            return n + str(x)
        else:
            for i, c in enumerate(n[1:]):
                if int(c) > x:
                    return n[: i + 1] + str(x) + n[i + 1 :]
            return n + str(x)

```
