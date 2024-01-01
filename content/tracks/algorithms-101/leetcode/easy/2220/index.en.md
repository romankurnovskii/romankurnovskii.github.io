---
title: 2220. Minimum Bit Flips to Convert Number
seoTitle: LeetCode 2220. Minimum Bit Flips to Convert Number | Python solution and explanation
description: 2220. Minimum Bit Flips to Convert Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2220
---

[LeetCode problem 2220](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/)

```python
class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        t = start ^ goal
        res = 0
        while t:
            res += t & 1
            t >>= 1
        return res

```
