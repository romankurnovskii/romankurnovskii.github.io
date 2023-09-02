---
title: 2839. Check if Strings Can be Made Equal With Operations I
seoTitle: LeetCode 2839. Check if Strings Can be Made Equal With Operations I | Python Solution and Explanation
description: 2839. Check if Strings Can be Made Equal With Operations I
toc: true
tags: [Algorithms, Easy, LeetCode]
date: 2023-09-02
lastmod: 2023-09-02
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2839
---

[LeetCode Problem](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/)

## Problem Statement

You are given two strings `s1` and `s2`, both of length 4, consisting of lowercase English letters. The objective is to find out if it's possible to make the two strings equal by swapping certain pairs of characters.

## Naive Solution

A naive approach would be to try out all possible swap combinations. However, this can be very inefficient, especially when the strings have a large number of characters.

## Hints & Tips

1. Observe that the swapping condition is quite specific: `j - i = 2`.
2. The strings should be permutations of each other.

## Approach

The efficient solution for this problem involves sorting the characters at even and odd positions separately for both strings and then comparing them.

## Steps

1. Sort the characters at even indices for `s1` and `s2`.
2. Sort the characters at odd indices for `s1` and `s2`.
3. Compare the sorted characters at even indices for both strings and the sorted characters at odd indices for both strings.

## Solution

```python
class Solution:
    def canBeEqual(self, s1: str, s2: str) -> bool:
        even_s1 = sorted(s1[::2])
        odd_s1 = sorted(s1[1::2])

        even_s2 = sorted(s2[::2])
        odd_s2 = sorted(s2[1::2])

        return even_s1 == even_s2 and odd_s1 == odd_s2
```
