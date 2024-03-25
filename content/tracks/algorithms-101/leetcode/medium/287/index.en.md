---
title: 287. Find the Duplicate Number
seoTitle: LeetCode 287. Find the Duplicate Number | Python Solution and Explanation
description: Unraveling the mystery of finding the duplicate number in an array.
toc: true
tags: [LeetCode]
categories: [Algorithms, LeetCode, Medium]
date: 2023-09-18
lastMod: 2023-10-06
featuredImage: https://picsum.photos/700/241?grayscale
weight: 287
---

[LeetCode problem 287](<https://leetcode.com/problems/find-the-duplicate-number/>)

## Problem Statement

Given an array of integers `nums` containing n + 1 integers where each integer is within the range `[1, n]`, you need to find and return the only duplicate number present in `nums`.

The key constraints:

1. You shouldn't modify the array `nums`.
2. You should only use constant extra space.

## Naive Solution

One possible naive solution would be to use a nested loop to compare each element with every other element in the array. This approach, however, is not efficient and has a time complexity of O(n^2), which doesn't scale well with large inputs.

## Approach

1. Think of the numbers in the array as representing a linked list. Each number is a pointer to the next index.
2. Using Floyd's Tortoise and Hare algorithm, determine if a cycle exists.
3. If a cycle exists, use the algorithm's phase 2 to find the starting point of the cycle which corresponds to our duplicate number.

### Algorithm/Data Structure: Floyd's Tortoise and Hare (Cycle Detection)

The problem can be visualized as a linked list where each value is a pointer to the next index. If there's a duplicate, it means there's a cycle in this 'list'. Floyd's Tortoise and Hare algorithm, often used for cycle detection in linked lists, can be applied to find the duplicate number.

#### How the cycle detection works

1. **Phase 1 (Finding intersection point)**: Use two pointers, one moving fast (two steps at a time) and one moving slow. If there's a cycle, they'll eventually meet at some point.
2. **Phase 2 (Finding entry point of cycle)**: Move the fast pointer back to the start and advance both pointers at the same speed. The point where they meet again is the beginning of the cycle or, in this context, our duplicate number.

#### An Illustrative Example

Consider `nums = [3, 1, 3, 4, 2]`. Here's how it maps to a "linked list":

1. Start at index 0: value 3 (jump to index 3)
1. At index 3: value 4 (jump to index 4)
1. At index 4: value 2 (jump to index 2)
1. At index 2: value 3 (jump to index 3 again, and so on)
1. We have a cycle involving the values/indices 3 → 4 → 2 → 3, and the duplicate number 3 is the "entry" to this cycle.

## Solution

```python
def findDuplicate(nums):
    slow = fast = nums[0]  # Phase 1: Detect the cycle
    slow = nums[slow]
    fast = nums[nums[fast]]
    while slow != fast:
        slow = nums[slow]
        fast = nums[nums[fast]]

    slow = nums[0]  # Phase 2: Find the entry point to the cycle
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]

    return slow
```
