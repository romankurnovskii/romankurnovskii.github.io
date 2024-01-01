---
title: 2262. Total Appeal of A String
seoTitle: LeetCode 2262. Total Appeal of A String | Python solution and explanation
description: 2262. Total Appeal of A String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2262
---

[LeetCode problem 2262](https://leetcode.com/problems/total-appeal-of-a-string/)

```python
class Solution:
    def appealSum(self, s: str) -> int:
        res = t = 0
        pos = [-1] * 26
        for i, c in enumerate(s):
            c = ord(c) - ord('a')
            t += i - pos[c]
            res += t
            pos[c] = i
        return res

```
