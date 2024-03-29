---
title: 1004. Max Consecutive Ones III
seoTitle: LeetCode 1004. Max Consecutive Ones III | Python Solution and Explanation
description: Understand the problem of finding the maximum consecutive ones in a binary array with the possibility of flipping some zeros.
toc: true
tags: [Algorithms, Medium, SlidingWindow]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-10
lastMod: 2023-08-18
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1004
---

[LeetCode Problem 1004](https://leetcode.com/problems/max-consecutive-ones-iii/)

## Problem Statement

Given a binary array `nums` and an integer `k`, the task is to return the maximum number of consecutive 1's in the array, with the possibility to flip at most `k` 0's.

## Naive Solution

A straight forward approach is to try flipping every combination of `k` zeros and checking for the longest sequence of 1's. This would involve nested loops, with the outer loop iterating through the array and the inner loops flipping zeros and calculating sequences of 1's. This approach can be extremely slow, especially for larger arrays.

## Hints & Tips

The task can be tackled more efficiently with a sliding window approach. This technique can be applied when we want to examine a continuous chunk of elements in an array, such as a substring or subarray.

## Approach: Sliding Window

1. We **expand** our window **to the right** each time and **record** the **zeros** we find.
2. **If** the number of **zeros exceeds `k`**, we shrink the window from the left until we're back to at most `k` zeros.
3. We can track the longest window we've found during this process, which corresponds to the maximum number of consecutive 1's.

If the number of zeros exceeds `k`, we shrink the window from the left until we're back to at most `k` zeros.

We can track the longest window we've found during this process, which corresponds to the maximum number of consecutive 1's.

## Steps

1. Initialize two pointers, `left` and `right`, to represent the window's boundaries. Also, initialize a counter `zero_count` to track zeros in the current window.
2. Expand the right boundary of the window by moving the `right` pointer.
3. If the current number is 0, increment the `zero_count`.
4. If `zero_count` exceeds `k`,
    4.1 move the `left` pointer to the right until a zero is excluded,
    4.2 and decrement the `zero_count`.
5. Track the maximum length of the window found.

## Solution

```python
def longestOnes(nums, k):
    left = 0
    zero_count = 0
    max_len = 0

    for right in range(len(nums)):
        if nums[right] == 0:
            zero_count += 1

        while zero_count > k:
            if nums[left] == 0:
                zero_count -= 1
            left += 1

        max_len = max(max_len, right - left + 1)

    return max_len
```
