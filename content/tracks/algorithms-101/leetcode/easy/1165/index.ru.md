---
title: 1165. Single-Row Keyboard
seoTitle: LeetCode 1165. Single-Row Keyboard | Python solution and explanation
description: 1165. Single-Row Keyboard
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1165
---

[LeetCode problem 1165](https://leetcode.com/problems/single-row-keyboard/)

```python
class Solution:
    def calculateTime(self, keyboard: str, word: str) -> int:
        pos = {c: i for i, c in enumerate(keyboard)}
        res = i = 0
        for c in word:
            res += abs(pos[c] - i)
            i = pos[c]
        return res

```
