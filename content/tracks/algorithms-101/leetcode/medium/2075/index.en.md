---
title: 2075. Decode the Slanted Ciphertext
seoTitle: LeetCode 2075. Decode the Slanted Ciphertext | Python solution and explanation
description: 2075. Decode the Slanted Ciphertext
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2075
---

[LeetCode problem 2075](https://leetcode.com/problems/decode-the-slanted-ciphertext/)

```python
class Solution:
    def decodeCiphertext(self, encodedText: str, rows: int) -> str:
        res = []
        cols = len(encodedText) // rows
        for j in range(cols):
            x, y = 0, j
            while x < rows and y < cols:
                res.append(encodedText[x * cols + y])
                x, y = x + 1, y + 1
        return ''.join(res).rstrip()

```
