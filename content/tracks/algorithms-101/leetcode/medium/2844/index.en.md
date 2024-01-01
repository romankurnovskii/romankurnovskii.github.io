---
title: 2844. Minimum Operations to Make a Special Number
seoTitle: LeetCode 2844. Minimum Operations to Make a Special Number | Python solution and explanation
description: 2844. Minimum Operations to Make a Special Number
toc: true
tags: [Algorithms, Medium, LeetCode]
date: 2023-09-03
lastMod: 2023-09-03
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2844
---

[LeetCode problem 2844](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/)

## Problem Statement

You are given a 0-indexed string `num` representing a non-negative integer. In one operation, you can pick any digit of `num` and delete it. Note that if you delete all the digits of `num`, `num` becomes 0.

Return the minimum number of operations required to make `num` special. An integer x is considered special if it is divisible by 25.

## Naive Solution

A naive approach to solving this problem might involve recursively generating all possible substrings of the input string, checking each one for divisibility by 25. While this would yield the correct result, the time complexity would be exponential, making it unfeasible for larger inputs.

## Hints & Tips

The main insight is that to be divisible by 25, the last two digits of the number must be one of the following: `00`, `25`, `50`, `75`. Therefore, it's crucial to consider these patterns when trying to delete the minimum number of digits.

## Approach

The core idea is to check how many minimum deletions are required for each of the four special last two-digit patterns (`00`, `25`, `50`, `75`).

We can do this by iterating through the string in reverse order and checking how many digits do not match with each pattern, keeping track of the minimum number of deletions for each.

1. **Analyzing Possible Endings:** A number that is divisible by 25 must have one of the four possible endings: '00', '25', '50', '75'.
2. **Reverse Traversal of String:** Traverse the string from right to left, keeping flags for the presence of '5' and '0'. Using these flags, look for possible endings '00', '25', '50', '75'.
3. **Operation Count:** During the traversal, count the minimum number of operations required to make the number special.
4. **Zero Check:** If '0' is not present in the string, then the number cannot be made special, and the number of operations would be equal to the length of the string.

## Steps

1. Initialize variables to track the presence of '5' and '0'.
2. Reverse traversal through the string, search for possible endings, and operation count.
3. Return the result.

## Solution

```python
def minimumOperations(num: str) -> int:
    n = len(num)
    # Initialize variables to track the presence of '5' and '0'
    had_5 = False
    had_0 = False
    
    # Reverse traversal through the string
    for i in range(n - 1, -1, -1):
        if had_0 and num[i] == '0':  # '00'
            return n - i - 2
        if had_0 and num[i] == '5':  # '50'
            return n - i - 2
        if had_5 and num[i] == '2':  # '25'
            return n - i - 2
        if had_5 and num[i] == '7':  # '75'
            return n - i - 2
        
        # Update the flags for the presence of '5' and '0'
        had_0 = had_0 or num[i] == '0'
        had_5 = had_5 or num[i] == '5'
        
    return n - 1 if had_0 else n
```
