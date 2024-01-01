---
title: 1657. Determine if Two Strings Are Close
seoTitle: LeetCode 1657. Determine if Two Strings Are Close | Python solution and explanation
description: Determine if Two Strings Are Close
toc: true
tags: [Strings, Frequency Counter]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-22
lastMod: 2023-08-22
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1657
---

[LeetCode problem](<https://leetcode.com/problems/determine-if-two-strings-are-close/>)

## Problem Statement

Two strings are considered close if you can attain one from the other using two operations:

1. Swap any two existing characters.
2. Transform every occurrence of one existing character into another existing character, and do the same with the other character.

The challenge is to determine whether two given strings are close or not.

## Naive Solution

A naive approach might involve trying every possible combination of operations on the two strings until they match or until you've exhausted all possibilities. This approach is inefficient and not feasible for longer strings.

## Hints & Tips

A more efficient way to solve this problem is by understanding the core logic behind the operations. We can make use of frequency counts.

## Approach

1. **Check for Unique Characters:** Both strings should have the same unique characters for them to be close.
2. **Frequency Counts Matter:** The counts of characters in both strings should have the same frequency distribution.

## Steps

1. Calculate the frequency of each character in both strings.
2. Check if the sets of unique characters in both strings are the same.
3. Check if the sorted list of frequency counts of characters in both strings are the same.

## Solution

```python
from collections import Counter

def closeStrings(word1, word2):
    # Calculate character frequency for both words
    counter1 = Counter(word1)
    counter2 = Counter(word2)

    # Check if unique characters are the same in both words
    if set(counter1.keys()) != set(counter2.keys()):
        return False

    # Check if the frequency distribution is the same for both words
    if sorted(counter1.values()) != sorted(counter2.values()):
        return False

    return True
```
