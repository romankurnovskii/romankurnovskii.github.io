---
title: 1987. Number of Unique Good Subsequences
seoTitle: LeetCode 1987. Number of Unique Good Subsequences | Python solution and explanation
description: 1987. Number of Unique Good Subsequences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1987
---

[LeetCode problem 1987](https://leetcode.com/problems/number-of-unique-good-subsequences/)

```python
class Solution:
    def numberOfUniqueGoodSubsequences(self, binary: str) -> int:
        f = g = 0
        res = 0
        mod = 10**9 + 7
        for c in binary:
            if c == "0":
                g = (g + f) % mod
                res = 1
            else:
                f = (f + g + 1) % mod
        res = (res + f + g) % mod
        return res

```
