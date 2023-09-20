---
title: 287. Find the Duplicate Number
seoTitle: LeetCode 287. Find the Duplicate Number | Python Solution and Explanation
description: Unraveling the mystery of finding the duplicate number in an array.
toc: true
tags: [LeetCode]
categories: [Algorithms, Medium]
date: 2023-09-18
lastMod: 2023-09-18
featuredImage: https://picsum.photos/700/241?grayscale
weight: 287
---



[LeetCode problem](<https://leetcode.com/problems/find-the-duplicate-number/>)

## Problem Statement

Given an array of integers `nums` containing n + 1 integers where each integer is within the range [1, n], you need to find and return the only duplicate number present in `nums`.

The key constraints:

1. You shouldn't modify the array `nums`.
2. You should only use constant extra space.

## Naive Solution

One possible naive solution would be to use a nested loop to compare each element with every other element in the array. This approach, however, is not efficient and has a time complexity of O(n^2), which doesn't scale well with large inputs.

## Approach / Idea

1. Think of the numbers in the array as representing a linked list. Each number is a pointer to the next index.
2. Using Floyd's Tortoise and Hare algorithm, determine if a cycle exists.
3. If a cycle exists, use the algorithm's phase 2 to find the starting point of the cycle which corresponds to our duplicate number.

### Algorithm/Data Structure: Floyd's Tortoise and Hare (Cycle Detection)

The problem can be visualized as a linked list where each value is a pointer to the next index. If there's a duplicate, it means there's a cycle in this 'list'. Floyd's Tortoise and Hare algorithm, often used for cycle detection in linked lists, can be applied to find the duplicate number.

#### How the cycle detection works

1. **Phase 1 (Finding intersection point)**: Use two pointers, one moving fast (two steps at a time) and one moving slow. If there's a cycle, they'll eventually meet at some point.
2. **Phase 2 (Finding entry point of cycle)**: Move the fast pointer back to the start and advance both pointers at the same speed. The point where they meet again is the beginning of the cycle or, in this context, our duplicate number.

## Solution

```python
def findDuplicate(nums):
    tortoise = hare = nums[0]   # 1: Using Floyd's Tortoise and Hare (Cycle Detection)
    while True:
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]
        if tortoise == hare:
            break

    tortoise = nums[0]          # 2: Find the entrance to the cycle
    while tortoise != hare:
        tortoise = nums[tortoise]
        hare = nums[hare]
        
    return hare
```
