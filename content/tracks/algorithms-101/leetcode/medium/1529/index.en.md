---
title: 1529. Minimum Suffix Flips
seoTitle: LeetCode 1529. Minimum Suffix Flips | Python solution and explanation
description: 1529. Minimum Suffix Flips
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1529
---

[LeetCode problem 1529](https://leetcode.com/problems/minimum-suffix-flips/)

```python
class Solution:
    def minFlips(self, target: str) -> int:
        res = 0
        for v in target:
            if (res & 1) ^ int(v):
                res += 1
        return res

```
