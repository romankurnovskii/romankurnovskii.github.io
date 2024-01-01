---
title: 2116. Check if a Parentheses String Can Be Valid
seoTitle: LeetCode 2116. Check if a Parentheses String Can Be Valid | Python solution and explanation
description: 2116. Check if a Parentheses String Can Be Valid
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2116
---

[LeetCode problem 2116](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/)

```python
class Solution:
    def canBeValid(self, s: str, locked: str) -> bool:
        n = len(s)
        if n & 1:
            return False
        x = 0
        for i in range(n):
            if s[i] == '(' or locked[i] == '0':
                x += 1
            elif x:
                x -= 1
            else:
                return False
        x = 0
        for i in range(n - 1, -1, -1):
            if s[i] == ')' or locked[i] == '0':
                x += 1
            elif x:
                x -= 1
            else:
                return False
        return True

```
