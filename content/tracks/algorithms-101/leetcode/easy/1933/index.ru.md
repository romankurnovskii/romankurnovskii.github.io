---
title: 1933. Check if String Is Decomposable Into Value-Equal Substrings
seoTitle: LeetCode 1933. Check if String Is Decomposable Into Value-Equal Substrings | Python solution and explanation
description: 1933. Check if String Is Decomposable Into Value-Equal Substrings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1933
---

[LeetCode problem 1933](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/)

```python
class Solution:
    def isDecomposable(self, s: str) -> bool:
        cnt2 = 0
        for _, g in groupby(s):
            m = len(list(g))
            if m % 3 == 1:
                return False
            cnt2 += m % 3 == 2
            if cnt2 > 1:
                return False
        return cnt2 == 1

```
