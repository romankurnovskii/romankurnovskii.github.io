---
title: 283. Move Zeroes
seoTitle: LeetCode 283. Move Zeroes | Python solution and explanation
description: 283. Move Zeroes
toc: true
tags: [LeetCode]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-05
lastMod: 2023-08-08
featuredImage: https://picsum.photos/700/241?grayscale
weight: 283
---

[LeetCode problem](https://leetcode.com/problems/move-zeroes/)

## Problem Statement

The problem is asking to move all zeros in an integer array to the end of the array while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.

## Naive Solution

A naive solution could be to create a new list, iterate over the array, add non-zero elements to the new list and count zero elements. Then extend the new list with the same amount of zeros as counted. But this solution requires creating a new list, which contradicts the in-place requirement of the problem.

## Hints & Tips

The key to solve this problem is to keep a pointer, let's call it `i`, that would track the position where the next non-zero element should be placed.

## Approach

The provided solution employs a two-pass approach. In the first pass, it iterates over the list and whenever it encounters a non-zero element, it places it at the position `i` and increments `i`. After this pass, all non-zero elements are at the beginning of the list and `i` is set to the position of the first zero element.

In the second pass, it simply assigns zero to all positions from `i` to the end of the list.

## Steps

1. Initialize `i` to 0.
2. Iterate over `nums`. For each element, if it is not zero, assign it to `nums[i]` and increment `i`.
3. After the iteration, `i` is at the position of the first zero in `nums`. Now assign zero to `nums[i]` and increment `i`. Repeat this step until `i` reaches the end of `nums`.

## Python Solution

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        i = 0
        for x in nums:              # Set the non-zero elements
            if x != 0:
                nums[i] = x
                i += 1

        while i <= len(nums) - 1:   # Set the rest number of zeros
            nums[i] = 0
            i += 1
```

The solution maintains the relative order of the non-zero elements and minimizes the total number of operations by only doing a single pass through the non-zero elements and then assigning zeros in one go.
