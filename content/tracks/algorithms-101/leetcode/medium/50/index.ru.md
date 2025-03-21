---
title: 50. Pow(x, n)
description: LeetCode 50. Pow(x, n)
toc: true
authors: []
tags: [Math, Recursion]
categories: [Algorithms, Medium]
series:
date: 2022-12-22
featuredImage:
weight: 50
---

[LeetCode problem](https://leetcode.com/problems/powx-n/)

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).

**Example 1:**

    Input: x = 2.00000, n = 10
    Output: 1024.00000

**Example 2:**

    Input: x = 2.10000, n = 3
    Output: 9.26100

**Example 3:**

    Input: x = 2.00000, n = -2
    Output: 0.25000
    Explanation: 2-2 = 1/22 = 1/4 = 0.25

**Approach 1:**

```python
class Solution:
    def myPow(self, x: float, n: int) -> float:
        return x ** n
```

**Approach 2:**

Recursive

```python
class Solution:
    def myPow(self, x, n):
        if not n:
            return 1
        if n < 0:
            return 1 / self.myPow(x, -n)
        if n % 2:
            return x * self.myPow(x, n-1)
        return self.myPow(x * x, n/2)
```

**Approach 3:**

```python
class Solution:
    def myPow(self, x, n):
        if n < 0:
            x = 1 / x
            n = -n
        pow = 1
        while n:
            if n & 1:
                pow *= x
            x *= x
            n >>= 1
        return pow
```
