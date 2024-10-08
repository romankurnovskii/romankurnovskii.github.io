---
title: 166. Fraction to Recurring Decimal
seoTitle: LeetCode 166. Fraction to Recurring Decimal | Python Solution and Explanation
description: "An in-depth explanation and Python solution for LeetCode problem 166: Fraction to Recurring Decimal"
toc: true
tags: ["LeetCode", "Python", "Medium", "Math"]
categories: [Algorithms, Medium]
series: [LeetCode Problem Solutions]
date: 2023-07-09
lastMod: 2023-07-09
featuredImage: https://picsum.photos/699/241?grayscale
weight: 166
---

[LeetCode problem 166](https://leetcode.com/problems/fraction-to-recurring-decimal/)

## Problem Statement

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format. If the fractional part is repeating, enclose the repeating part in parentheses.

This problem is about converting a fraction to its decimal representation in string format. The tricky part is dealing with repeating decimals. If a decimal repeats, we should enclose the repeating part in parentheses.

For example, if we have a fraction 1/3, the decimal representation would be 0.3333.... In this problem, we need to represent it as "0.(3)".

## Naive Solution

A naive solution could involve simple division - you divide the numerator by the denominator and convert it to a string. However, this wouldn't account for recurring decimals, and it would only be correct for fractions that result in a finite decimal.

## Approach

{{< img src="../../assets/long-division.png" float="right" height="250px" >}}

A better approach to solve this problem involves using the **long division method** and a hash map to keep track of remainders. If the same remainder appears again, it means we have found a repeating sequence.

In long division, we divide the numerator by the denominator, find the remainder, and then add a zero to the remainder and repeat the process.

While doing this, if we encounter the same remainder that we have seen before, it means the sequence will start to repeat from here.

![LeetCode problem 166](../../assets/166.jpg)

## Steps

1. First, handle the simple case where `numerator` is divisible by `denominator`.
2. If the division isn't exact, proceed with the long division method.
3. Keep dividing the `numerator` by the `denominator` and track the remainder.
4. Store the remainder and its corresponding index in the decimal part of the result in a dictionary.
5. If the remainder repeats, stop the division and enclose the repeating part in parentheses.

## Solution

```python
class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        if numerator % denominator == 0:
            return str(numerator // denominator)

        integer = str(abs(numerator) // abs(denominator))
        remainder = abs(numerator) % abs(denominator)
        decimal = []
        remainder_dict = {}
        
        while remainder != 0:
            if remainder in remainder_dict:
                decimal.insert(remainder_dict[remainder], "(") 
                decimal.append(")")
                break
            
            # future index of starting repeating part , i.e. 1.12(345)
            remainder_dict[remainder] = len(decimal)

            remainder *= 10
            decimal.append(str(remainder // abs(denominator)))
            remainder %= abs(denominator)
        
        res = integer + "." + "".join(decimal)
        if (numerator < 0) ^ (denominator < 0): 
            # Check if the result should be negative
            res = "-" + res
        return res
```

When doing the division, we are always considering the absolute value of the numerator and denominator. The remainder and the index at which it appears are stored in a dictionary. Whenever a remainder repeats, it means we have found a repeating sequence and the division process is stopped. The repeating part is then enclosed in parentheses.

Also, note the line if `(numerator < 0) ^ (denominator < 0)`:. This is checking if the result should be negative. If either, but not both, of the numerator and denominator are negative, the result should also be negative. Here `^` is the bitwise XOR operator in Python, which returns True if exactly one of the conditions is True.

After doing all this, if the numerator was negative, we add a negative sign to the front of our result. Otherwise, the result is returned as is.

{{< video src="../../assets/166.mp4" title="LeetCode 166 Solution" >}}
