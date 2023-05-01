---
title: 238. Product of Array Except Self
seoTitle: LeetCode 238. Product of Array Except Self | Python solution and explanation
description: 238. Product of Array Except Self
toc: true
tags: []
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-01
lastmod: 2023-08-01
featuredImage: https://picsum.photos/700/241?grayscale
weight: 238
---

[LeetCode problem](https://leetcode.com/problems/product-of-array-except-self/)

## Problem Statement

The problem is to find a product of all elements in the given integer array `nums`, except for the `i-th` element, and return a new array with the results. You must design an algorithm that runs in O(n) time and doesn't use the division operation. The challenge here is to solve this problem with O(1) extra space complexity.

## Naive Solution

A naive solution could be to calculate the product of all elements in the array, then iterate through the array and replace each element with the total product divided by the element. But this solution requires a division operation which is not allowed in this problem. Also, if there is a zero in the array, this solution will not work.

## Hints & Tips

This problem can be solved by using a [<mark>two-pass approach</mark>](https://romankurnovskii.com/en/tracks/algorithms-101/algorithms/#two-pass-approach).

We can make two passes over the input array:

1. one to calculate the product of all numbers to the left of each element,
2. and another to calculate the product of all numbers to the right of each element.
3. Then we multiply these two values to get the final result.

## Approach

The provided solution already optimizes the space complexity by using a single result array and two iterations over the input array.

In the first pass, the product of all elements to the left of the current element is computed and stored in the `res` array.

In the second pass, the product of all elements to the right of the current element is computed and this value is multiplied with the corresponding value in the `res` array to give the final product.

## Steps

1. Initialize an empty list `res` and a variable `prod` to hold the product of elements.
2. Iterate over the `nums` array from left to right. For each element, append the current `prod` to `res` and update `prod` by multiplying it with the current element.
3. Reset `prod` to 1. Then iterate over the `nums` array from right to left. For each element, multiply the corresponding element in `res` with `prod` and update `res`. Then update `prod` by multiplying it with the current element.
4. Return `res`.

## Solution

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        res = []
        # ->
        prod = 1
        for x in nums:  # nums[2,3,4] => res[1(1),2(1*2),6(2*3)]
            res.append(prod)
            prod *= x

        # <-
        prod = 1
        for i in range(len(nums) -1, -1, -1):
            res[i] *= prod
            prod *= nums[i]
        
        return res
```
