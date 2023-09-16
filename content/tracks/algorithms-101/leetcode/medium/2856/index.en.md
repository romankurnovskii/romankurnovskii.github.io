---
title: 2856. Minimum Array Length After Pair Removals
seoTitle: LeetCode 2856. Minimum Array Length After Pair Removals | Python solution and explanation
description: 2856. Minimum Array Length After Pair Removals
toc: true
tags: [LeetCode]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-16
lastMod: 2023-09-16
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2856
---

[LeetCode problem](<https://leetcode.com/problems/minimum-array-length-after-pair-removals/>)

## Problem Statement

Given a 0-indexed sorted array of integers `nums`, you can perform a specific operation an unlimited number of times:

1. Choose two indices, `i` and `j`, where `i < j` and `nums[i] < nums[j]`.
2. Remove the elements at indices `i` and `j` from `nums`. The remaining elements retain their original order and the array is re-indexed.

The task is to determine and return the smallest possible length of `nums` after executing the operation as many times as you wish.

## Naive Solution

One way to approach this problem would be to iterate through every possible pair of elements in `nums` to check if they satisfy the condition `nums[i] < nums[j]`. Whenever a valid pair is found, remove them and restart the search. This method would be inefficient and would result in a high time complexity due to frequent list updates.

## Hints & Tips

- Utilizing two pointers can help in efficiently determining the pairs to remove.
- Keep track of removed indices in a set to avoid duplication.
- Focus on removing the largest numbers since they have the most potential pairs.

## Approach

The idea is to maintain two pointers: a slow pointer `i` starting from the beginning of the array and a fast pointer `j` starting from the middle of the array. Since the array is sorted, this ensures that the number at `j` is always greater than the number at `i`.

1. Traverse the list with the two pointers.
2. If a valid pair is found (i.e., `nums[i] < nums[j]` and `i` hasn't been removed yet), mark the indices `i` and `j` as removed.
3. Move the pointer `i` one step forward.
4. Repeat the process until the end of the array is reached.

The result would be the initial length of `nums` subtracted by the number of removed indices.

## Steps

1. Initialize two pointers: `i = 0` and `j = len(nums) // 2`.
2. Create a set `removed` to keep track of removed indices.
3. Traverse the list with the two pointers.
4. If `nums[j] > nums[i]` and `i` hasn't been removed, add `i` and `j` to the `removed` set and move the pointer `i` one step forward.
5. Continue the process until the end of the array.
6. The result is `len(nums) - len(removed)`.

## Solution

```python
def minimumLengthAfterRemoval(nums):
    i = 0
    removed = set()
    for j in range(len(nums) // 2, len(nums)):
        if nums[j] > nums[i] and i not in removed:
            removed.add(i)
            removed.add(j)
            i += 1
    return len(nums) - len(removed)
```
