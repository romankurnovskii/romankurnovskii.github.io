---
title: 9. Palindrome Number
seoTitle: LeetCode 9. Palindrome Number | Python solution and explanation
description: An introductory guide to understanding and determining if a number is a palindrome.
toc: true
tags: [Math, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-25
lastmod: 2023-08-25
featuredImage: https://picsum.photos/700/241?grayscale
weight: 9
---

[LeetCode problem](<https://leetcode.com/problems/palindrome-number/>)

## Problem Statement

Determine whether an integer is a palindrome without converting it to a string.

## Naive Solution

A straightforward solution might be to convert the integer to a string and check if it reads the same both ways. However, this challenge encourages solving it without such conversion.

## Hints & Tips

By reversing the number and comparing it to the original, you can determine if it's a palindrome.

## Approach

Instead of converting the number to a string, we can reverse its digits using mathematical operations and then compare the reversed number to the original number.

## Steps

1. If the number is negative, it's not a palindrome.
2. Initialize a Variable for the Reversed Number: We'll be constructing this number step-by-step.
3. Reversing the Number:
   - This is achieved by repeatedly taking the last digit of the number and adding it to a running total after shifting the current digits of the running total.
   - For instance, if you have the number 123, you'll first take 3, then 2, and finally 1, to construct the reversed number as 321.
3. Comparison: If the reversed number equals the original number, then it's a palindrome.

## Solution

```python
def isPalindrome(x: int) -> bool:
    # Negative numbers cannot be palindromes
    if x < 0:
        return False

    # Initialize a reversed number starting at 0
    reversed_num = 0

    # Use a temporary variable to avoid modifying the original number
    temp = x

    # Reverse the number
    while temp:
        # Extract the last digit of the current number
        last_digit = temp % 10  # 12345 % 10 => 5

        # Shift the current digits of reversed_num and add the last digit of temp
        reversed_num = reversed_num * 10 + last_digit
        
        # Remove the last digit from temp
        temp //= 10  # 12345 // 10 => 1234

    # Compare the reversed number to the original
    return reversed_num == x
```
