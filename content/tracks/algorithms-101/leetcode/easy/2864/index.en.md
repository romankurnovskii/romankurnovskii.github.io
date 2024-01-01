---
title: 2864. Maximum Odd Binary Number
seoTitle: LeetCode Maximum Odd Binary Number | Python solution and explanation
description: Maximum Odd Binary Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2864
---

[LeetCode problem 2864](https://leetcode.com/problems/maximum-odd-binary-number/)

```python
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        ones = []
        zeros = []
        for c in s:
            if c == '0':
                zeros.append(c)
            else:
                ones.append(c)

        zeros = ''.join(zeros)
        ones = ''.join(ones)
        if len(ones) > 1:
            res = ones[1:] + zeros + '1'
            return res
        
        return zeros + ones
```

```python
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        cnt = s.count("1")
        return "1" * (cnt - 1) + (len(s) - cnt) * "0" + "1"
```
