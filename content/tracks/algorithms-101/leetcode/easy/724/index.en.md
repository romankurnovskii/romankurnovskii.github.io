---
title: 724. Find Pivot Index
seoTitle: LeetCode 724. Find Pivot Index | Python solution and explanation
description: 724. Find Pivot Index
toc: true
tags: [LeetCode, Easy, Array]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-21
lastMod: 2023-08-21
featuredImage: https://picsum.photos/700/241?grayscale
weight: 724
---

[LeetCode problem](<https://leetcode.com/problems/find-pivot-index/>)

## Problem Statement

Given an array of integers `nums`, the task is to calculate the pivot index of this array. The pivot index is defined as the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right. If no such index exists, return -1.

## Naive Solution

A naive approach would be to iterate over each index and for each index, calculate the sum of elements to the left and right of the index. If the sums are equal, return the index. However, this approach has a time complexity of `O(n^2)` which makes it inefficient for larger inputs.

## Hints & Tips

A more optimized solution would use the <mark>[prefix and suffix sum](https://romankurnovskii.com/en/tracks/algorithms-101/algorithms/#prefix-sums)</mark> concept. Prefix sum is the sum of all elements to the left of the index, and suffix sum is the sum of all elements to the right of the index. We can calculate these sums in `O(n)` time and use them to find the pivot index.

## Approach

We will calculate the total sum of the array first.

Then, we will initialize a variable `left_sum` to keep track of the sum of elements to the left of the current index.

As we iterate over each index, we will update the total sum by subtracting the current element, which will give us the `right sum`. We will then check if `left_sum` is equal to the right sum `(total sum - left_sum - current element)`.

If they are equal, we return the index.

After checking, we will update the `left_sum` by adding the current element.

## Steps

1. Calculate the total sum of the array.
2. Initialize a variable left_sum to 0.
3. Iterate over each index in the array.
   1. Update the total sum by subtracting the current element.
   2. Check if left_sum is equal to the right sum (total sum - left_sum - current element). If true, return the index.
   3. Update the left_sum by adding the current element.
4. If no pivot index is found, return -1.

## Solution

```python
def pivotIndex(nums):
    total_sum = sum(nums)
    left_sum = 0
    
    for i, num in enumerate(nums):
        total_sum -= num
        if left_sum == total_sum:
            return i
        left_sum += num
    
    return -1
```
