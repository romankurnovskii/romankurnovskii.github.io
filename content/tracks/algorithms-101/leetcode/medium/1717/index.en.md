---
title: 1717. Maximum Score From Removing Substrings
seoTitle: LeetCode 1717. Maximum Score From Removing Substrings | Python solution and explanation
description: 1717. Maximum Score From Removing Substrings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1717
---

[LeetCode problem 1717](https://leetcode.com/problems/maximum-score-from-removing-substrings/)

```python
class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        if x < y:
            return self.maximumGain(s[::-1], y, x)
        res = 0
        stk1, stk2 = [], []
        for c in s:
            if c != 'b':
                stk1.append(c)
            else:
                if stk1 and stk1[-1] == 'a':
                    stk1.pop()
                    res += x
                else:
                    stk1.append(c)
        while stk1:
            c = stk1.pop()
            if c != 'b':
                stk2.append(c)
            else:
                if stk2 and stk2[-1] == 'a':
                    stk2.pop()
                    res += y
                else:
                    stk2.append(c)
        return res

```
