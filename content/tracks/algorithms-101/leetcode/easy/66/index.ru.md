---
title: 66. Plus One
description: LeetCode 66. Plus One
toc: true
authors: [roman-kurnovskii]
tags: [Array, Math]
categories: [Algorithms, Easy]
date: 2022-10-27
lastMod: 2023-06-17
featuredImage: https://picsum.photos/700/241?grayscale
series: [LeetCode Top Interview Questions]
weight: 66
---

[LeetCode problem](https://leetcode.com/problems/plus-one/)

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**

    Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
    Incrementing by one gives 123 + 1 = 124.
    Thus, the result should be [1,2,4].

**Example 2:**

    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.
    Incrementing by one gives 4321 + 1 = 4322.
    Thus, the result should be [4,3,2,2].

## First accepted

```python
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        i = len(digits) - 1
        
        while i >= 0 and digits[i] == 9:
            digits[i] = 0
            i -= 1
        
        if i < 0:
            return [1] + digits
        digits[i] = digits[i] + 1
        
        return digits
```
