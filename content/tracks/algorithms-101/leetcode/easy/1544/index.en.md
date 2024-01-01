---
title: 1544. Make The String Great
seoTitle: LeetCode 1544. Make The String Great | Python solution and explanation
description: 1544. Make The String Great
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1544
---

[LeetCode problem 1544](https://leetcode.com/problems/make-the-string-great/)

```python
class Solution:
    def makeGood(self, s: str) -> str:
        stk = []
        for c in s:
            if not stk or abs(ord(stk[-1]) - ord(c)) != 32:
                stk.append(c)
            else:
                stk.pop()
        return "".join(stk)

```
