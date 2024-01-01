---
title: 1486. XOR Operation in an Array
seoTitle: LeetCode 1486. XOR Operation in an Array | Python solution and explanation
description: 1486. XOR Operation in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1486
---

[LeetCode problem 1486](https://leetcode.com/problems/xor-operation-in-an-array/)

```python
class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        return reduce(xor, ((start + 2 * i) for i in range(n)))

```
