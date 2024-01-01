---
title: 1271. Hexspeak
seoTitle: LeetCode 1271. Hexspeak | Python solution and explanation
description: 1271. Hexspeak
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1271
---

[LeetCode problem 1271](https://leetcode.com/problems/hexspeak/)

```python
class Solution:
    def toHexspeak(self, num: str) -> str:
        s = set('ABCDEFIO')
        t = hex(int(num))[2:].upper().replace('0', 'O').replace('1', 'I')
        return t if all(c in s for c in t) else 'ERROR'

```
