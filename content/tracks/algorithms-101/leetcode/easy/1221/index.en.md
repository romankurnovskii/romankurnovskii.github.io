---
title: 1221. Split a String in Balanced Strings
seoTitle: LeetCode 1221. Split a String in Balanced Strings | Python solution and explanation
description: 1221. Split a String in Balanced Strings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1221
---

[LeetCode problem 1221](https://leetcode.com/problems/split-a-string-in-balanced-strings/)

```python
class Solution:
    def balancedStringSplit(self, s: str) -> int:
        res = l = 0
        for c in s:
            if c == 'L':
                l += 1
            else:
                l -= 1
            if l == 0:
                res += 1
        return res

```
