---
title: 189. Rotate Array
seoTitle: LeetCode 189. Rotate Array | Python solution and explanation
description: Rotating an array to the right by k steps
toc: true
tags: [Algorithms, Medium]
categories: [Algorithms, Medium]
series: [LeetCode]
date: 2023-07-28
lastMod: 2023-07-28
featuredImage: https://picsum.photos/700/241?grayscale
weight: 189
---

[LeetCode problem](https://leetcode.com/problems/rotate-array/)

## Problem Statement

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

## Naive Solution

A simple, but inefficient, approach would be to rotate the array `k` times. In each rotation, we shift every element of the array to the right by one and move the last element to the start of the array. This solution has a time complexity of O(n*k), where n is the number of elements in the array and k is the number of rotations. This is not an optimal solution, especially when we have a large `k` or a large array.

## Approach

An efficient solution can be found by using array reversal. Here's the plan:

1. Reverse the entire array.
2. Reverse the first `k` elements.
3. Reverse the remaining `n-k` elements.

This method allows us to achieve the desired output in O(n) time and O(1) space complexity.

## Steps

Let's break down the steps using an example: `nums = [1,2,3,4,5,6,7], k = 3`.

1. Reverse the entire array: `nums = [7,6,5,4,3,2,1]`.
2. Reverse the first `k` elements: `nums = [5,6,7,4,3,2,1]`.
3. Reverse the remaining `n-k` elements: `nums = [5,6,7,1,2,3,4]`.

As you can see, we get the expected output `[5,6,7,1,2,3,4]`.

## Solution

Here is the Python code that implements the aforementioned logic:

```python
class Solution:
    def rotate(self, nums, k):

        def reverse(start, end):
            while start < end:
                nums[start], nums[end] = nums[end], nums[start]
                start += 1
                end -= 1

        n = len(nums)
        k = k % n  # in case k > len(nums)

        reverse(nums, 0, n - 1)  # 1
        reverse(nums, 0, k - 1)  # 2
        reverse(nums, k, n - 1)  # 3
```
