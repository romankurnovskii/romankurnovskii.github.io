---
title: 12. Integer to Roman
seoTitle: LeetCode 12. Integer to Roman | Python solution and explanation
description: 12. Integer to Roman
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 12
---

[LeetCode problem 12](https://leetcode.com/problems/integer-to-roman/)

```python
class Solution:
    def intToRoman(self, num: int) -> str:
        cs = ('M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I')
        vs = (1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
        res = []
        for c, v in zip(cs, vs):
            while num >= v:
                num -= v
                res.append(c)
        return ''.join(res)

```
