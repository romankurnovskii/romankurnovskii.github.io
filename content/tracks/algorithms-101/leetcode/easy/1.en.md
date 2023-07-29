---
title: 1. Two Sum
description: LeetCode 1. Two Sum
toc: true
authors: [roman-kurnovskii]
tags: [Array, "Hash Table", "LeetCode Top Interview 150"]
categories: [Algorithms, Easy]
date: 2022-10-16
lastmod: 2023-08-17
featuredImage: https://picsum.photos/700/241?grayscale
weight: 1
---

[LeetCode problem](<https://leetcode.com/problems/two-sum/>)

## Problem Statement

In this problem, you're given an array of integers `nums` and an integer `target`. Your task is to find the indices of two numbers in the array that add up to the target. The input array is guaranteed to have exactly one solution, and you can't use the same element twice. The indices can be returned in any order.

## Naive Solution

A naive solution would involve using two nested loops to iterate through each pair of elements in the array and check if their sum is equal to the target. This approach has a time complexity of O(n^2), where n is the length of the input array. However, there is a more efficient solution that uses a hash table and has a time complexity of O(n).

## Hints & Tips

A hash table (or dictionary in Python) is a data structure that allows you to store and retrieve values in O(1) time on average. It uses key-value pairs, where each key is unique and maps to a specific value.

## Approach

To solve this problem efficiently, we'll use a hash table to store the indices of the numbers we've seen so far. For each number, we'll check if the difference between the target and the current number is already in the hash table. If it is, we've found the two numbers that add up to the target, and we'll return their indices.

## Steps

1. Initialize an empty hash table to store the indices of the numbers we've seen so far.
2. Iterate through the input array, for each number:
    1. Calculate the difference between the target and the current number.
    2. Check if the difference is already in the hash table. If it is, return the indices of the current number and the number that corresponds to the difference.
    3. If the difference is not in the hash table, add the current number and its index to the hash table.
3. Since the problem guarantees that there is always a solution, we'll always find the two numbers that add up to the target.

## Solution

Here's the Python code to implement this approach:

```python
from typing import List

def twoSum(nums: List[int], target: int) -> List[int]:
    seen = {}
    
    # Iterate through the input array
    for i, num in enumerate(nums):
        # Calculate the difference between the target and the current number
        diff = target - num
        
        # Check if the difference is already in the hash table
        if diff in seen:
            # Return the indices of the current number and the number that corresponds to the difference
            return [seen[diff], i]
        
        # Add the current number and its index to the hash table
        seen[num] = i
```
