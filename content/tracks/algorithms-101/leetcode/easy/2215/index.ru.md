---
title: 2215. Find the Difference of Two Arrays
seoTitle: LeetCode 2215. Find the Difference of Two Arrays | Python solution and explanation
description: 2215. Find the Difference of Two Arrays
toc: true
tags: []
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-21
lastMod: 2023-08-21
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2215
---

[LeetCode problem](<https://leetcode.com/problems/find-the-difference-of-two-arrays/>)

## Problem Statement

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

- answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
- answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.

## Naive Solution

A naive approach would be to iterate over each element of the first array and check whether it's in the second array. Similarly, iterate over each element of the second array and check whether it's in the first array. This approach will take O(n*m) time, where n is the size of the first array and m is the size of the second array. This isn't efficient for large input sizes.

## Hints & Tips

We can solve this problem more efficiently by using Python's built-in set data structure. A set is a collection of unique elements and allows for O(1) time complexity for lookup operations.

## Approach

1. Convert both arrays to sets.
2. Find the difference between the two sets in both directions.
3. Convert the results to lists and return them.

## Steps

1. Convert `nums1` to a set `set1` and `nums2` to a set `set2`.
2. Find the difference between `set1` and `set2` and convert it to a list. This will give us all the elements that are in `set1` but not in `set2`.
3. Find the difference between `set2` and `set1` and convert it to a list. This will give us all the elements that are in `set2` but not in `set1`.
4. Return the results as a list of two lists.

## Solution

```python
def findDifference(nums1, nums2):
    set1 = set(nums1)
    set2 = set(nums2)

    diff1 = list(set1 - set2)
    diff2 = list(set2 - set1)

    return [diff1, diff2]
```
