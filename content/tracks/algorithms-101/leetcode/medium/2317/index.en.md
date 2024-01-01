---
title: 2317. Maximum XOR After Operations
seoTitle: LeetCode 2317. Maximum XOR After Operations | Python solution and explanation
description: 2317. Maximum XOR After Operations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2317
---

[LeetCode problem 2317](https://leetcode.com/problems/maximum-xor-after-operations/)

```python
class Solution:
    def maximumXOR(self, nums: List[int]) -> int:
        return reduce(or_, nums)

```
