---
title: 172. Factorial Trailing Zeroes
seoTitle: LeetCode 172. Factorial Trailing Zeroes | Python solution and explanation
description: 172. Factorial Trailing Zeroes
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 172
---

[LeetCode problem 172](https://leetcode.com/problems/factorial-trailing-zeroes/)

```python
class Solution:
    def trailingZeroes(self, n: int) -> int:
        res = 0
        while n:
            n //= 5
            res += n
        return res
```
