---
title: 1887. Reduction Operations to Make the Array Elements Equal
seoTitle: LeetCode 1887. Reduction Operations to Make the Array Elements Equal | Python Solution and Explanation
description: Step-by-step explanation and Python solution for LeetCode problem 1887. Reduction Operations to Make the Array Elements Equal.
toc: true
tags: [LeetCode, Sorting]
categories: [Algorithms, LeetCode, Medium]
date: 2023-11-19
lastMod: 2023-11-19
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1887
notes: ['No special pattern', 'Second largest', 'Sort', 'With example']
---

[LeetCode Problem 1887](<https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/>)

## Problem Statement

The goal of this problem is to make all elements in a given integer array `nums` equal, through a series of reduction operations. In each operation, we find the largest element in the array, find the next largest element that is strictly smaller than the largest, and reduce the largest element to this next largest value. The task is to return the number of such operations needed to make all array elements equal.

## Naive Solution

One might consider a brute-force approach: repeatedly scanning the array to find the largest element and its next largest, then performing the reduction. However, this approach would have a high time complexity, especially with larger arrays.

## Hints & Tips

- Think about sorting the array to make it easier to find the largest and next largest elements.
- Consider how the number of reduction operations relates to the positions of the elements in the sorted array.

## Approach / Idea

Imagine you have a stack of books of different thicknesses. Your task is to make all books have the same thickness by repeatedly choosing the thickest book and trimming it down to the next thickest one. The key to doing this efficiently is to first arrange the books in order of thickness, from thickest to thinnest. Once sorted, it's straightforward to find the thickest book and the next thickest one.

Applying this analogy to our problem, sorting the `nums` array in descending order (non-ascending) is akin to arranging the books. The largest number in the array is like the thickest book, and the next largest is like the next thickest book in the stack. By sorting the array, we can easily keep track of when we encounter a new "largest" element (or a new "thickest book") as we iterate through the array.

### Example

Consider the array `[5, 1, 3]`. After sorting, it becomes `[5, 3, 1]`. The first largest value is `5`, and the next largest is `3`. To make `5` equal to `3`, we perform one operation. We then make `3` equal to `1` in the next step. Each step or operation can be counted by the position of these numbers in the sorted array.

Thus, we count the number of operations required to reduce each element to the next largest value, which directly correlates to its index in the sorted array.

The key to efficiently solving this problem lies in sorting the array. Once sorted, we can easily track the largest element and its next largest. The number of operations required to reduce an element to the next largest is directly related to its position in the sorted array.

### Algorithm

1. **Sort the Array**:
   - Sort `nums` in non-ascending order.

2. **Count Reduction Operations**:
   - Iterate through the sorted array.
   - Whenever the current element is different from the previous one (indicating a new largest element), increase the operation count by its index.

3. **Return the Count**:
   - The total count is the number of operations needed.

## Solution

Here's the Python code implementing this approach:

```python
   def reductionOperations(nums: List[int]) -> int:
      nums.sort(reverse=True)
      operations = 0
      largest = nums[0]
      for i, x in enumerate(nums):
         if x < largest:
               operations += i
               largest = x
      
      return operations
```
