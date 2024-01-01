---
title: 1071. Greatest Common Divisor of Strings
seoTitle: LeetCode 1071. Greatest Common Divisor of Strings | Python solution and explanation
description: Finding the greatest common divisor of two strings
toc: true
tags: [Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-12-01
lastMod: 2023-12-01
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1071
draft: true
---

[LeetCode problem 1071. Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

## Problem Statement

- **Goal**: Find the largest string `x` that can divide both `str1` and `str2`.
- **Divides**: `t` divides `s` if `s` can be formed by repeating `t`.
- **Examples**:
  - `str1 = "ABCABC"`, `str2 = "ABC"` results in `"ABC"`.
  - `str1 = "LEET"`, `str2 = "CODE"` results in `""` (an empty string).

## Hint

Check if `str1 + str2` equals `str2 + str1`. If not, the answer is an empty string.

## Approach

1. **Concatenate and Compare**: Verify if `str1 + str2` is equal to `str2 + str1`.
2. **Find GCD**: If strings are equal when concatenated, find the GCD of their lengths.
3. **Return Substring**: The substring from 0 to the GCD length of `str1` is the answer.

## Solution

```python
def gcdOfStrings(str1, str2):
    # Check if concatenating str1 and str2 results in equal strings
    if str1 + str2 != str2 + str1:
        return ""

    # Import gcd function from the math module
    from math import gcd

    # The substring from 0 to the gcd of the lengths of str1 and str2
    return str1[:gcd(len(str1), len(str2))]
```

## Explanation

- Concatenation Check: Ensures str1 and str2 consist of the same repeating substring.
- GCD of Lengths: The length of the largest common divisor substring is the GCD of the lengths of str1 and str2.
- Return Substring: The substring of str1 from index 0 to the GCD length is the solution.
