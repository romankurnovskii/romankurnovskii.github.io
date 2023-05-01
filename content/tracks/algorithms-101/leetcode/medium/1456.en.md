---
title: 1456. Maximum Number of Vowels in a Substring of Given Length
seoTitle: LeetCode 1456. Maximum Number of Vowels in a Substring of Given Length | Python Solution and Explanation
description: A comprehensive guide to understanding and solving the LeetCode problem of finding the maximum number of vowels in a substring of a given length.
toc: true
tags: [Algorithms, Medium, SlidingWindow]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-09
lastmod: 2023-08-09
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1456
---

[LeetCode Problem 1456](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)

## Problem Statement

Given a string `s` and an integer `k`, the task is to return the maximum number of vowel letters in any substring of `s` with length `k`.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

## Naive Solution

The most straightforward solution to this problem is to take every possible substring of length `k` and count the number of vowels in each of them. This can be done using nested loops. The outer loop runs through each character in the string while the inner loop counts the vowels for each substring of length `k`. The maximum count is then returned.

However, this naive solution would be computationally expensive, with a time complexity of $O(n*k)$ where n is the length of the string `s`.

## Hints & Tips

The problem can be efficiently solved using a technique called the sliding window approach.

## Approach: Sliding Window

The idea is to use a window of size `k` and slide it across the string `s`. Instead of counting the number of vowels in the entire window every time, we adjust the count by adding the new character and removing the leftmost character as the window slides.

This way, the number of operations is reduced to just two for every slide, making it a more efficient solution.

## Steps

1. Initialize a counter for the number of vowels and a `max_vowels` variable to keep track of the maximum number of vowels seen.
2. Traverse through the first `k` characters of the string, increasing the counter for each vowel seen.
3. Set `max_vowels` to the value of the counter.
4. Start sliding the window from the `k`th character. For every new character:
   - If it's a vowel, increase the counter.
   - Check the leftmost character of the previous window (i.e., `s[i - k]`). If it's a vowel, decrease the counter.
   - Update `max_vowels` if the counter is greater than its current value.

## Solution

```python
def maxVowels(s, k):
    vowels = set(['a', 'e', 'i', 'o', 'u'])
    count = sum(1 for char in s[:k] if char in vowels)
    max_vowels = count

    for i in range(k, len(s)):
        # Add the new character to the count if it's a vowel
        count += s[i] in vowels
        # Remove the leftmost character of the previous window from the count if it's a vowel
        count -= s[i - k] in vowels
        max_vowels = max(max_vowels, count)

    return max_vowels
```
