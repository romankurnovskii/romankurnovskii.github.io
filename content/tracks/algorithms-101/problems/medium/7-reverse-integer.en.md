---
title: 7. Reverse Integer
description: LeetCode 7. Reverse Integer
toc: false
authors: [roman-kurnovskii]
tags: [Math]
categories: [Algorithms, Medium]
series:
date: 2022-11-01
featuredImage:
weight: 150
---

[LeetCode problem](https://leetcode.com/problems/reverse-integer/)

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

**Example 1:**

Input: x = 123
Output: 321

**Example 2:**

Input: x = -123
Output: -321

**Example 3:**

Input: x = 120
Output: 21

## First accepted

**Idea:**

1. Convert number to int
2. Remove `minus` if exist (or convert module of number)
3. reverse

```python
class Solution:
    def reverse(self, x: int) -> int:
        reversed_int = []
        str_int = str(x)
        if x < 0:
            str_int = str_int[1:]
        for i in reversed(range(len(str_int))):
            reversed_int.append(str_int[i])
        res = int(''.join(reversed_int))
        if x < 0:
            res = -res
        return res if (res >= -2147483648 and res <= 2147483647) else 0
```


## Better solution

```python
class Solution:
    def reverse(self, x: int) -> int:
        s = str(abs(x))
        rev = int(s[::-1])
        
        if rev > 2147483647:
            return 0

        return rev if x > 0 else (rev * -1)
```
