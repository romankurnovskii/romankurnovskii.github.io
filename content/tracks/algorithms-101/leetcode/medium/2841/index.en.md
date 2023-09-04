---
title: 2841. Maximum Sum of Almost Unique Subarray
seoTitle: LeetCode 2841. Maximum Sum of Almost Unique Subarray | Python Solution and Explanation
description: 2841. Maximum Sum of Almost Unique Subarray
toc: true
tags: [Algorithms, Medium, LeetCode, "LeetCode Contest 112"]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-02
lastmod: 2023-09-02
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2841
---

[LeetCode Problem 2841](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/)

## Problem Statement

You are given an integer array `nums` and two positive integers `m` and `k`.

The task is to return the maximum sum out of all almost unique subarrays of length `k` of `nums`. If no such subarray exists, return 0.

A subarray is **almost unique** if it contains at least `m` pairwise distinct elements.

## Naive Solution

A naive solution would be to generate all the possible subarrays of length `k` and check each one to see if it is almost unique and what its sum is. This would involve nested loops and would not be efficient.

## Hints & Tips

1. Use sliding window technique to find subarrays of length `k`.
2. Keep track of unique elements using a set.

## Approach

The solution adopts a **sliding window** approach to go through the given array `nums`, checking each subarray of size `k` for its "almost uniqueness" and sum.

## Steps

1. Define a helper function, `is_unique`, which will take a subarray and return whether it contains at least `m` distinct elements or not.

2. Initialize a variable `_max` to keep track of the maximum sum among the almost unique subarrays.

3. Loop through `nums` using the sliding window technique:
    - Use the `is_unique` function to check if the current subarray is almost unique.
    - Update `_max` with the maximum sum found so far.

4. Return `_max` if it is not 0; otherwise, return 0.

## Solution

```python
def maxSum(nums: List[int], m: int, k: int) -> int:
    n = len(nums)

    def is_unique(arr, start, end, m):
        distinct_elements = set(arr[start:end])
        return len(distinct_elements) >= m
    
    _max = 0
    for i in range(n - k + 1):
        if is_unique(nums, i, i + k, m):
            _max = max(_max, sum(nums[i:i + k]))
    
    return _max if _max != 0 else 0
```
