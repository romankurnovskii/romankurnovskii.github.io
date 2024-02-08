---
title: 334. Increasing Triplet Subsequence
seoTitle: LeetCode 334. Increasing Triplet Subsequence | Python solution and explanation
description: 334. Increasing Triplet Subsequence
toc: true
tags: []
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-03
lastmod: 2023-08-03
featuredImage: https://picsum.photos/700/241?grayscale
weight: 334
---

[LeetCode problem](https://leetcode.com/problems/increasing-triplet-subsequence/)

## Problem Statement

The task is to determine if the given list of numbers contains an increasing subsequence of length three. This means we need to find three indices `i`, `j`, and `k` in the list such that `i` < `j` < `k` and nums[i] < nums[j] < nums[k].

## Naive Solution

One possible naive solution is to use three nested loops to go through all possible triples in the list and check if they are increasing. But this solution is very inefficient, has a time complexity of O(n³), and does not meet the follow-up constraints of the problem.

## Approach

Use two variables, `first` and `second`, initialized with infinity

- Go through the list
- Update these variables with the smallest and second smallest numbers that has seen so far.

- If find a number larger than both, it means you have found an increasing triplet. Return True.
- If finish going through the list without finding such a number, return False.

This algorithm works because any number larger than `first` and `second` is effectively larger than at least two numbers before it in the list.

## Steps

- Initialize `first` and `second` to infinity.
- Iterate over `nums`. For each number `n`:
  - If `n` is less than or equal to `first`, update `first` with `n`.
  - Else, if `n` is less than or equal to `second`, update `second` with `n`.
  - Else, return True.
- If you finish iterating without returning, return False.

## Python Solution

```python
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        # Initialize two pointers to track the smallest and second smallest elements
        first = second = float('inf')

        for n in nums:
            # If the current number is smaller or equal than the smallest number found so far,
            # then update the smallest number.
            if n <= first:
                first = n
            # If the current number is greater than the smallest number but smaller or equal 
            # than the second smallest number found so far, then update the second smallest number.
            elif n <= second:
                second = n
            # If the current number is greater than both smallest and second smallest numbers, 
            # it means we found a increasing triplet subsequence.
            else:
                return True
        # If no increasing triplet subsequence was found, return False.
        return False
```
