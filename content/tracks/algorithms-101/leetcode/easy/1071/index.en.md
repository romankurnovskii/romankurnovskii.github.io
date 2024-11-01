---
title: 1071. Greatest Common Divisor of Strings
seoTitle: LeetCode 1071. Greatest Common Divisor of Strings | Python solution and explanation
description: Finding the greatest common divisor of two strings
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-07-30
lastMod: 2023-07-30
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1071
---

[LeetCode problem](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

## Problem Statement

The problem is about finding a <mark>greatest common divisor</mark> (GCD) of two strings. The term "GCD" might be familiar from mathematics, as the largest number that divides two numbers without leaving a remainder. Here, we extend the idea to strings: a string `x` is a GCD of strings `str1` and `str2` if `x` can be repeatedly appended to itself to obtain `str1` and `str2`.

## Naive Solution

A naive approach would be to find all possible divisors of `str1` and `str2`, and then find the largest common divisor. This would involve generating all substrings of `str1` and `str2` which is time-consuming and unnecessary.

## Solution

Observing the problem, we see a similarity with the Euclidean algorithm for calculating the GCD of two numbers. In the Euclidean algorithm, the GCD of two numbers `a` and `b` (`a > b`) is the same as the GCD of `b` and `a mod b`.

We can extend this logic to strings. If a string `x` is a GCD of `str1` and `str2`, then `str1` and `str2` can both be written in the form `x + x + ... + x`. Therefore, `str1 - str2` (which is similar to `a mod b`) should also be expressible in the form `x + x + ... + x`.

This observation allows us to use a similar approach to the Euclidean algorithm to solve this problem.

> Why finding Greatest common divisor?

In case smallest string consist multiple same parts.

Example: str1 = "ABABAB", str2 = "ABAB".

len(str1) = 6, len(str2) = 4. We can't use whole str2 but common minimum length -> 2.

## Steps

Here are the high-level steps of the algorithm:

1. If `str1` + `str2` is not equal to `str2` + `str1`, return an empty string.
2. Otherwise, find the GCD of the lengths of `str1` and `str2`.
3. Return the prefix substring of `str1` with length equal to the GCD.

## Solution

Here is a Python solution that implements the above algorithm:

```python
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        def gcd(a, b):
            while b != 0:
                a, b = b, a % b
            return a

        if str1 + str2 != str2 + str1:
            return ''
        
        max_substr_len = gcd(len(str1), len(str2))
        return str1[:max_substr_len]
```

In the `gcdOfStrings` method, we first check if `str1 + str2` is equal to `str2 + str1`. If they are not equal, no common divisor string exists, so we return an empty string. If they are equal, we find the GCD of the lengths of `str1` and `str2` and return the prefix substring of `str1` with length equal to the GCD.

The gcd method is a standard implementation of the Euclidean algorithm to find the GCD of two numbers.
