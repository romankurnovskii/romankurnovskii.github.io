---
title: 2429. Minimize XOR
seoTitle: LeetCode 2429. Minimize XOR | Python solution and explanation
description: 2429. Minimize XOR
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2429
---

[LeetCode problem 2429](https://leetcode.com/problems/minimize-xor/)

```python
class Solution:
    def minimizeXor(self, num1: int, num2: int) -> int:
        cnt1 = num1.bit_count()
        cnt2 = num2.bit_count()
        while cnt1 > cnt2:
            num1 &= num1 - 1
            cnt1 -= 1
        while cnt1 < cnt2:
            num1 |= num1 + 1
            cnt1 += 1
        return num1

```
