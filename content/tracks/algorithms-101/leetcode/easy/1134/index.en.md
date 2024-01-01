---
title: 1134. Armstrong Number
seoTitle: LeetCode 1134. Armstrong Number | Python solution and explanation
description: 1134. Armstrong Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1134
---

[LeetCode problem 1134](https://leetcode.com/problems/armstrong-number/)

```python
class Solution:
    def isArmstrong(self, n: int) -> bool:
        k = len(str(n))
        s, x = 0, n
        while x:
            s += (x % 10) ** k
            x //= 10
        return s == n

```
