---
title: 1611. Minimum One Bit Operations to Make Integers Zero
seoTitle: LeetCode 1611. Minimum One Bit Operations to Make Integers Zero | Python solution and explanation
description: 1611. Minimum One Bit Operations to Make Integers Zero
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1611
---

[LeetCode problem 1611](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/)

```python
class Solution:
    def minimumOneBitOperations(self, n: int) -> int:
        if n == 0:
            return 0
        return n ^ self.minimumOneBitOperations(n >> 1)

```
