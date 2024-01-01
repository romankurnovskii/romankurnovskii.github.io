---
title: 2002. Maximum Product of the Length of Two Palindromic Subsequences
seoTitle: LeetCode 2002. Maximum Product of the Length of Two Palindromic Subsequences | Python solution and explanation
description: 2002. Maximum Product of the Length of Two Palindromic Subsequences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2002
---

[LeetCode problem 2002](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/)

```python
class Solution:
    def maxProduct(self, s: str) -> int:
        n = len(s)
        p = [True] * (1 << n)
        for k in range(1, 1 << n):
            i, j = 0, n - 1
            while i < j:
                while i < j and (k >> i & 1) == 0:
                    i += 1
                while i < j and (k >> j & 1) == 0:
                    j -= 1
                if i < j and s[i] != s[j]:
                    p[k] = False
                    break
                i, j = i + 1, j - 1
        res = 0
        for i in range(1, 1 << n):
            if p[i]:
                mx = ((1 << n) - 1) ^ i
                j = mx
                a = i.bit_count()
                while j:
                    if p[j]:
                        b = j.bit_count()
                        res = max(res, a * b)
                    j = (j - 1) & mx
        return res

```
