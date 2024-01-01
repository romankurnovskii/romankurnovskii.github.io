---
title: 1835. Find XOR Sum of All Pairs Bitwise AND
seoTitle: LeetCode 1835. Find XOR Sum of All Pairs Bitwise AND | Python solution and explanation
description: 1835. Find XOR Sum of All Pairs Bitwise AND
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1835
---

[LeetCode problem 1835](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/)

```python
class Solution:
    def getXORSum(self, arr1: List[int], arr2: List[int]) -> int:
        a = reduce(xor, arr1)
        b = reduce(xor, arr2)
        return a & b

```
