---
title: 2894. Divisible and Non-divisible Sums Difference
seoTitle: LeetCode 2894.Divisible and Non-divisible Sums Difference | Python solution and explanation
description: Divisible and Non-divisible Sums Difference
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2894
---

[LeetCode problem 2894](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/)

```python
class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        return sum(i if i % m else -i for i in range(1, n + 1))
```
