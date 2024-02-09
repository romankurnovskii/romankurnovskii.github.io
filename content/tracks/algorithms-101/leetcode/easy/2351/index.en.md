---
title: 2351. First Letter to Appear Twice
seoTitle: LeetCode 2351. First Letter to Appear Twice | Python solution and explanation
description: 2351. First Letter to Appear Twice
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2351
---

[LeetCode problem 2351](https://leetcode.com/problems/first-letter-to-appear-twice/)

```python
class Solution:
    def repeatedCharacter(self, s: str) -> str:
        mask = 0
        for c in s:
            i = ord(c) - ord('a')
            if mask >> i & 1:
                return c
            mask |= 1 << i

```