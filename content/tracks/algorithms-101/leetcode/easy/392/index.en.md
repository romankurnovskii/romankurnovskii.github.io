---
title: 392. Is Subsequence
seoTitle: LeetCode 392. Is Subsequence | Python solution and explanation
description: Exploring whether one string is a subsequence of another.
toc: true
tags: [String, Subsequence]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-06
lastMod: 2023-08-06
featuredImage: https://picsum.photos/700/241?grayscale
weight: 392
---

[LeetCode problem 392](https://leetcode.com/problems/is-subsequence/)

## Problem Statement

Given two strings `s` and `t`, you need to determine if `s` is a subsequence of `t`. To be a subsequence, you can remove characters from `t` without reordering to form `s`.

## Naive Solution

The naive approach would be to generate all subsequences of string `t` and then check if string `s` is one of them. However, generating all subsequences of `t` can be computationally expensive especially when the length of `t` is large.

## Hints & Tips

Understanding the nature of the problem is vital. This problem can be visualized as two pointers moving through both strings. If characters match, move both pointers. If not, only move the pointer in `t`.

## Approach

To determine if `s` is a subsequence of `t`, we can use a two-pointer technique.

1. Begin by initializing two pointers at the start of `s` and `t`.
2. Move through `t`, looking for a match with the current character of `s`.
3. If you find a match, move to the next character in `s`.
4. If you reach the end of `s` while doing this, it means `s` is a subsequence of `t`.

## Steps

1. Initialize two pointers `i` and `j` to 0. `i` points to characters in `s` while `j` points to characters in `t`.
2. Traverse through `t` using the pointer `j`.
3. When `s[i]` is equal to `t[j]`, increment `i`.
4. If `i` becomes equal to the length of `s`, return True since it means all characters of `s` are present in `t` in order.
5. If the loop completes and `i` is not equal to the length of `s`, return False.

## Solution

```python
def isSubsequence(s, t):
    # Initialize two pointers at the start of the strings.
    i, j = 0, 0
    
    while j < len(t):
        # If the current characters match, move to the next character in s.
        if i < len(s) and s[i] == t[j]:
            i += 1
        j += 1

    # If all characters in s were found in t, return True.
    return i == len(s)
```
