---
title: 152. Maximum Product Subarray
seoTitle: 152. Maximum Product Subarray | Python Solution and Explanation
description: Understanding the 152. Maximum Product Subarray problem from LeetCode
toc: true
tags: [Algorithms, Medium, Dynamic Programming]
categories: [Algorithms]
series: [LeetCode Problem Solutions]
date: 2023-06-25
lastmod: 2023-06-25
featuredImage: https://picsum.photos/702/241?grayscale
weight: 152
---

[LeetCode problem](https://leetcode.com/problems/maximum-product-subarray)

## Problem Statement

In this problem, we're given an integer array `nums`, and our task is to find the maximum product of a contiguous subarray. A subarray is a contiguous part of an array. The interesting part of this problem is that the array can contain both positive and negative numbers, so the maximum product can be obtained by a subarray ending at any index of the array.

## Naive Solution

A naive approach to this problem would be to calculate the product of all possible subarrays and return the maximum one. However, this would have a time complexity of O(n²), as there are n*(n+1)/2 subarrays of an array, where n is the length of the array.

This would be inefficient and time-consuming for large inputs.

## Dynamic Programming

We can solve this problem efficiently using Dynamic Programming.

The idea is to keep track of the maximum and minimum product ending at each position (as the array can contain negative numbers, and a negative number can become maximum when multiplied by another negative number).

We initialize two variables, `max_prod` and `min_prod`, to `nums[0]`. Then for each number in the array (from the second number to the end), we calculate `max_prod` and `min_prod` using the formulas:

    max_prod = max(nums[i], max_prod * nums[i], min_prod * nums[i])
    min_prod = min(nums[i], max_prod * nums[i], min_prod * nums[i])

We also keep track of `res`, which stores the maximum product of a subarray as a result.

If `max_prod` is greater than `res`, we update `res`.

Finally, `res` will hold the maximum product of a subarray.

## Steps

1. Initialize `max_prod`, `min_prod`, and `res` to `nums[0]`.
2. For each number in the array (from the second number to the end):
   - Update `max_prod` and `min_prod`.
   - Update `res` if `max_prod` is greater.
3. Return `res`.

## Python Solution

Here is a Python solution following the described approach:

```python
def maxProduct(nums):
    if not nums:
        return 0

    max_prod = min_prod = res = nums[0]

    for num in nums[1:]:
        new_max = max(num, max_prod * num, min_prod * num)
        min_prod = min(num, max_prod * num, min_prod * num)
        max_prod = new_max

        res = max(res, max_prod)

    return res
```
