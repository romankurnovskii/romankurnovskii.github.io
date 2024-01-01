---
title: 2309. Greatest English Letter in Upper and Lower Case
seoTitle: LeetCode 2309. Greatest English Letter in Upper and Lower Case | Python solution and explanation
description: 2309. Greatest English Letter in Upper and Lower Case
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2309
---

[LeetCode problem 2309](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/)

```python
class Solution:
    def greatestLetter(self, s: str) -> str:
        mask1 = mask2 = 0
        for c in s:
            if c.islower():
                mask1 |= 1 << (ord(c) - ord("a"))
            else:
                mask2 |= 1 << (ord(c) - ord("A"))
        mask = mask1 & mask2
        return chr(mask.bit_length() - 1 + ord("A")) if mask else ""

```
