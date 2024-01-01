---
title: 1317. Convert Integer to the Sum of Two No-Zero Integers
seoTitle: LeetCode 1317. Convert Integer to the Sum of Two No-Zero Integers | Python solution and explanation
description: 1317. Convert Integer to the Sum of Two No-Zero Integers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1317
---

[LeetCode problem 1317](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/)

```python
class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        def f(x):
            while x:
                if x % 10 == 0:
                    return False
                x //= 10
            return True

        for a in range(1, n):
            b = n - a
            if f(a) and f(b):
                return [a, b]

```
