---
title: 643. Maximum Average Subarray I
seoTitle: LeetCode 643. Maximum Average Subarray I | Python Solution and Explanation
description: An in-depth understanding of the problem 643. Maximum Average Subarray I from LeetCode and its solution.
toc: true
tags: [Sliding Window, Algorithms, Easy]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-08
lastmod: 2023-08-08
featuredImage: https://picsum.photos/700/241?grayscale
weight: 643
---

[LeetCode problem](https://leetcode.com/problems/maximum-average-subarray-i/)

## Problem Statement

Given an integer array `nums` consisting of `n` elements and an integer `k`, find a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value. The result must be accurate up to a decimal point of 10^(-5).

## Naive Solution

A straightforward approach would be to calculate the average for every possible subarray of length `k`. For each starting point, sum the next `k` numbers and determine the average. This will take O(n*k) time which is not efficient for large values of `n` and `k`.

## Hints & Tips

One way to improve the naive solution is by observing the overlapping computations. As we move from one subarray to the next, we are recalculating the sum for mostly the same numbers except for the first and the last numbers. This observation points towards the sliding window technique which can be very efficient for such problems.

## Approach

We use the [sliding window technique](https://romankurnovskii.com/en/tracks/algorithms-101/algorithms/#sliding-window). The idea is to maintain a window of size `k` and slide it across the array. The sliding window technique is particularly useful in problems where the array input and the window size remain static, but the starting point of the sliding window moves.

## Steps

1. Calculate the sum of the first `k` numbers.
2. Slide the window by one position at a time. For every slide, subtract the number that is left behind and add the new number that comes into the window. This will give the sum for the next window of `k` numbers.
3. Keep track of the maximum sum as we slide the window.

## Solution

```python
def findMaxAverage(nums, k):
    # Calculate the sum of the first k numbers
    window_sum = sum(nums[:k])
    max_sum = window_sum
    
    for i in range(len(nums) - k):
        window_sum = window_sum - nums[i] + nums[i+k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum / k
```
