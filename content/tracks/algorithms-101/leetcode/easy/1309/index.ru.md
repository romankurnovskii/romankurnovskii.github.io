---
title: 1309. Decrypt String from Alphabet to Integer Mapping
seoTitle: LeetCode 1309. Decrypt String from Alphabet to Integer Mapping | Python solution and explanation
description: 1309. Decrypt String from Alphabet to Integer Mapping
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1309
---

[LeetCode problem 1309](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/)

```python
class Solution:
    def freqAlphabets(self, s: str) -> str:
        def get(s):
            return chr(ord('a') + int(s) - 1)

        i, n = 0, len(s)
        res = []
        while i < n:
            if i + 2 < n and s[i + 2] == '#':
                res.append(get(s[i : i + 2]))
                i += 3
            else:
                res.append(get(s[i]))
                i += 1
        return ''.join(res)

```
