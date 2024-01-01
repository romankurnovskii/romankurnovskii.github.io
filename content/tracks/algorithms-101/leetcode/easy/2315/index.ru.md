---
title: 2315. Count Asterisks
seoTitle: LeetCode 2315. Count Asterisks | Python solution and explanation
description: 2315. Count Asterisks
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2315
---

[LeetCode problem 2315](https://leetcode.com/problems/count-asterisks/)

```python
class Solution:
    def countAsterisks(self, s: str) -> int:
        res, ok = 0, 1
        for c in s:
            if c == "*":
                res += ok
            elif c == "|":
                ok ^= 1
        return res

```
