---
title: 1663. Smallest String With A Given Numeric Value
seoTitle: LeetCode 1663. Smallest String With A Given Numeric Value | Python solution and explanation
description: 1663. Smallest String With A Given Numeric Value
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1663
---

[LeetCode problem 1663](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/)

```python
class Solution:
    def getSmallestString(self, n: int, k: int) -> str:
        res = ['a'] * n
        i, d = n - 1, k - n
        while d > 25:
            res[i] = 'z'
            d -= 25
            i -= 1
        res[i] = chr(ord(res[i]) + d)
        return ''.join(res)

```
