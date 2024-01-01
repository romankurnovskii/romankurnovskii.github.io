---
title: 1829. Maximum XOR for Each Query
seoTitle: LeetCode 1829. Maximum XOR for Each Query | Python solution and explanation
description: 1829. Maximum XOR for Each Query
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1829
---

[LeetCode problem 1829](https://leetcode.com/problems/maximum-xor-for-each-query/)

```python
class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        res = []
        xs = reduce(xor, nums)
        mask = (1 << maximumBit) - 1
        for x in nums[::-1]:
            k = xs ^ mask
            res.append(k)
            xs ^= x
        return res

```
