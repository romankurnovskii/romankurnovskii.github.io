---
title: 2840. Check if Strings Can be Made Equal With Operations II
seoTitle: LeetCode 2840. Check if Strings Can be Made Equal With Operations II | Python Solution and Explanation
description: 2840. Check if Strings Can be Made Equal With Operations II
toc: true
tags: [Algorithms, Medium, LeetCode, "LeetCode Contest 112"]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-02
lastMod: 2023-09-02
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2840
---

[LeetCode Problem 2840](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/)

## Problem Statement

You are given two strings `s1` and `s2`, both of length `n`, consisting of lowercase English letters. You can apply certain operations to make them equal. The question is, is it possible?

## Naive Solution

A naive approach would be to try all possible swap operations and compare the two strings at each step, which would be highly inefficient.

## Hints & Tips

1. Observe that swapping can only occur at indices `i` and `j` where `j - i` is even.
2. Separate the string into two different sequences, one containing characters at even indices and the other at odd indices.
3. Check the frequency of characters in both sequences.

## Approach

The efficient approach involves separating characters at even and odd positions into two different sequences for each string and then comparing the frequency of characters in these sequences.

## Steps

1. Initialize two empty lists for `s1` and `s2`, each to store characters at even and odd positions.
2. Populate these lists with characters from `s1` and `s2`.
3. Sort these lists.
4. Compare the sorted lists for equality.

## Solution

```python
from collections import Counter

def checkStrings(s1: str, s2: str) -> bool:
        even_s1 = sorted(s1[::2])
        odd_s1 = sorted(s1[1::2])

        even_s2 = sorted(s2[::2])
        odd_s2 = sorted(s2[1::2])

        return even_s1 == even_s2 and odd_s1 == odd_s2
```
