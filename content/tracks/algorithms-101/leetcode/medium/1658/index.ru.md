---
title: 1658. Minimum Operations to Reduce X to Zero
seoTitle: LeetCode 1658. Minimum Operations to Reduce X to Zero | Python Solution and Explanation
description: An exploration of reducing x to zero using minimum operations.
toc: true
tags: [LeetCode]
categories: [Algorithms, LeetCode, Medium]
date: 2023-09-20
lastMod: 2023-09-20
featuredImage: https://picsum.photos/700/242?grayscale
weight: 1658
---

[LeetCode problem 1658](<https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/>)

## Problem Statement

You have an integer array `nums` and another integer `x`. In a single operation, you can either remove the leftmost or the rightmost element from the array `nums` and decrement `x` by the value of the removed element. The question is: What is the minimum number of operations required to reduce `x` to exactly zero? If it's not feasible, the answer should be `-1`.

## Naive Solution

The naive approach would be to explore every possible combination of removing elements from the start or the end, recursively. While this approach can find the solution, it's extremely inefficient and would result in a time complexity beyond O(2^n).

## Approach

The problem can be turned around: Instead of trying to determine which numbers to remove from the ends, think of it as finding the longest subarray inside `nums` such that the sum of its elements is equal to the total sum of `nums` minus `x`. *Let's call this approach in mathematics "from the reverse"*.

Why does this work? Well, if we find the maximum-length subarray with a sum equal to `total - x`, then the numbers we need to remove from the array will be the numbers outside this subarray!

This transformed problem can be tackled using a two-pointer or sliding window approach.

## Steps

1. Calculate the total sum of `nums`.
2. Set a target sum which is `total - x`.
3. Using a sliding window approach, find the maximum length of the subarray whose sum equals the target.
4. The result will be the total length of `nums` minus the length of this subarray. If no such subarray exists, return `-1`.

## Solution

```python
def minOperations(nums, x):
    total = sum(nums)
    target = total - x

    n = len(nums)
    curr_sum = 0            # sum of current subarray
    max_len = -1            # maximum length of the subarray that sums up to the target

    left = 0                # Starting pointer of sliding window

    for right in range(n):                      # Starting pointer of sliding window
        curr_sum += nums[right]
        
        while curr_sum > target and left < n:   # If current sum goes beyond target
            curr_sum -= nums[left]              # shrink the window from the left
            left += 1
        
        if curr_sum == target:
            max_len = max(max_len, right - left + 1)
    
    if max_len == -1:
        return -1
    return n - max_len
```

{{< video src="../../assets/1658.mp4" title="LeetCode 1658 Solution" >}}
