---
title: 2299. Strong Password Checker II
seoTitle: LeetCode 2299. Strong Password Checker II | Python solution and explanation
description: 2299. Strong Password Checker II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2299
---

[LeetCode problem 2299](https://leetcode.com/problems/strong-password-checker-ii/)

```python
class Solution:
    def strongPasswordCheckerII(self, password: str) -> bool:
        if len(password) < 8:
            return False
        mask = 0
        for i, c in enumerate(password):
            if i and c == password[i - 1]:
                return False
            if c.islower():
                mask |= 1
            elif c.isupper():
                mask |= 2
            elif c.isdigit():
                mask |= 4
            else:
                mask |= 8
        return mask == 15

```
