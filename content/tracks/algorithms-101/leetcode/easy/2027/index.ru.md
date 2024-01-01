---
title: 2027. Minimum Moves to Convert String
seoTitle: LeetCode 2027. Minimum Moves to Convert String | Python solution and explanation
description: 2027. Minimum Moves to Convert String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2027
---

[LeetCode problem 2027](https://leetcode.com/problems/minimum-moves-to-convert-string/)

```python
class Solution:
    def minimumMoves(self, s: str) -> int:
        res = i = 0
        while i < len(s):
            if s[i] == "X":
                res += 1
                i += 3
            else:
                i += 1
        return res

```
