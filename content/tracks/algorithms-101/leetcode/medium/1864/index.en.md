---
title: 1864. Minimum Number of Swaps to Make the Binary String Alternating
seoTitle: LeetCode 1864. Minimum Number of Swaps to Make the Binary String Alternating | Python solution and explanation
description: 1864. Minimum Number of Swaps to Make the Binary String Alternating
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1864
---

[LeetCode problem 1864](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/)

```python
class Solution:
    def minSwaps(self, s: str) -> int:
        s0n0 = s0n1 = s1n0 = s1n1 = 0
        for i in range(len(s)):
            if (i & 1) == 0:
                if s[i] != '0':
                    s0n0 += 1
                else:
                    s1n1 += 1
            else:
                if s[i] != '0':
                    s1n0 += 1
                else:
                    s0n1 += 1
        if s0n0 != s0n1 and s1n0 != s1n1:
            return -1
        if s0n0 != s0n1:
            return s1n0
        if s1n0 != s1n1:
            return s0n0
        return min(s0n0, s1n0)

```
