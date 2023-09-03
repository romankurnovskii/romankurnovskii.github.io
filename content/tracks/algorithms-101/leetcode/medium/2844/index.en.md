---
title: 2844. Minimum Operations to Make a Special Number
seoTitle: LeetCode 2844. Minimum Operations to Make a Special Number | Python solution and explanation
description: 2844. Minimum Operations to Make a Special Number
toc: true
tags: [Algorithms, Medium, LeetCode]
date: 2023-09-03
lastmod: 2023-09-03
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2844
---

[LeetCode problem 2844](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/)

## Problem Statement

You are given a 0-indexed string `num` representing a non-negative integer. In one operation, you can pick any digit of `num` and delete it. Note that if you delete all the digits of `num`, `num` becomes 0. Return the minimum number of operations required to make `num` special. An integer x is considered special if it is divisible by 25.

## Naive Solution

A naive approach to solving this problem might involve recursively generating all possible substrings of the input string, checking each one for divisibility by 25. While this would yield the correct result, the time complexity would be exponential, making it unfeasible for larger inputs.

## Hints & Tips

The main insight is that to be divisible by 25, the last two digits of the number must be one of the following: `00`, `25`, `50`, `75`. Therefore, it's crucial to consider these patterns when trying to delete the minimum number of digits.

## Approach

The core idea is to check how many minimum deletions are required for each of the four special last two-digit patterns (`00`, `25`, `50`, `75`).

We can do this by iterating through the string in reverse order and checking how many digits do not match with each pattern, keeping track of the minimum number of deletions for each.

## Steps

1. Define a helper function `fn(pattern)` which returns the minimum number of deletions required to make `num` end with `pattern`.
2. In the helper function, iterate over the number in reverse, checking the number of digits to be deleted to make `num` end with the current `pattern`.
3. Return the minimum of all four patterns.

## Solution

```python
class Solution:
    def minimumOperations(self, num: str) -> int:

        def fn(pattern):
            """Return minimum number of deletions required to make num end with pattern."""
            k = 1
            ans = 0 
            for ch in reversed(num): 
                if pattern[k] == ch: 
                    k -= 1
                else: 
                    ans += 1
                if k == -1: 
                    return ans 
            return float("inf")  # inf denotes impossibility

        ans = min(fn(x) for x in ("00", "25", "50", "75"))
        return ans if ans < float("inf") else len(num) - int("0" in num)
```
