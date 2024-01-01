---
title: 2275. Largest Combination With Bitwise AND Greater Than Zero
seoTitle: LeetCode 2275. Largest Combination With Bitwise AND Greater Than Zero | Python solution and explanation
description: 2275. Largest Combination With Bitwise AND Greater Than Zero
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2275
---

[LeetCode problem 2275](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/)

```python
class Solution:
    def largestCombination(self, candidates: List[int]) -> int:
        res = 0
        for i in range(32):
            t = 0
            for x in candidates:
                t += (x >> i) & 1
            res = max(res, t)
        return res

```
