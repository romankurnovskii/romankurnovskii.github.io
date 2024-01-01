---
title: 2269. Find the K-Beauty of a Number
seoTitle: LeetCode 2269. Find the K-Beauty of a Number | Python solution and explanation
description: 2269. Find the K-Beauty of a Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2269
---

[LeetCode problem 2269](https://leetcode.com/problems/find-the-k-beauty-of-a-number/)

```python
class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        res = 0
        s = str(num)
        for i in range(len(s) - k + 1):
            t = int(s[i : i + k])
            if t and num % t == 0:
                res += 1
        return res

```
