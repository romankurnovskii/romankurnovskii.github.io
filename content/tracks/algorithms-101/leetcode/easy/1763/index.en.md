---
title: 1763. Longest Nice Substring
seoTitle: LeetCode 1763. Longest Nice Substring | Python solution and explanation
description: 1763. Longest Nice Substring
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1763
---

[LeetCode problem 1763](https://leetcode.com/problems/longest-nice-substring/)

```python
class Solution:
    def longestNiceSubstring(self, s: str) -> str:
        n = len(s)
        res = ''
        for i in range(n):
            lower = upper = 0
            for j in range(i, n):
                if s[j].islower():
                    lower |= 1 << (ord(s[j]) - ord('a'))
                else:
                    upper |= 1 << (ord(s[j]) - ord('A'))
                if lower == upper and len(res) < j - i + 1:
                    res = s[i : j + 1]
        return res

```
