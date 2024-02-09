---
title: 1493. Longest Subarray of 1's After Deleting One Element
seoTitle: LeetCode 1493. Longest Subarray of 1's After Deleting One Element | Python Solution and Explanation
description: Understand the problem of finding the longest subarray of 1's after deleting a single element.
toc: true
tags: [Algorithms, Medium, SlidingWindow]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-11
lastmod: 2023-08-11
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1493
---

[LeetCode Problem 1493](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)

## Problem Statement

Given a binary array `nums`, you should delete one element from it. The goal is to return the size of the longest subarray containing only 1's after this deletion. If no such subarray exists, return 0.

## Naive Solution

A straightforward approach is to manually try deleting each element in the array and checking the length of the longest sequence of 1's. This would involve nested loops: an outer loop for deleting an element and an inner loop to check sequences of 1's. This method, however, can be inefficient for larger arrays.

## Hints & Tips

Consider that we are allowed to have a subarray with a single zero. It might make things simpler! The sliding window approach will be handy here.

## Approach: Sliding Window with a Twist

We can use the sliding window technique again for this problem. However, we need to adapt it slightly. This time, our window can contain at most one zero. Thus, while expanding the window, we should be mindful of the zeros.

## Steps

1. Initialize two pointers, `left` and `right`, to represent the window's boundaries. Also, initialize a counter `zeroCount` to track zeros in the current window.
2. Expand the right boundary of the window by moving the `right` pointer.
3. If the current number is 0, increment the `zeroCount`.
4. If `zeroCount` becomes 2, move the `left` pointer to the right until a zero is excluded, and decrement the `zeroCount`.
5. Track the maximum length of the window found.

## Solution

```python
def longestSubarray(nums):
    left = 0
    zeroCount = 0
    maxLength = 0

    for right in range(len(nums)):
        if nums[right] == 0:
            zeroCount += 1

        while zeroCount > 1:
            if nums[left] == 0:
                zeroCount -= 1
            left += 1

        # Subtract 1 because we need to delete one element.
        maxLength = max(maxLength, right - left) 

    return maxLength
```
