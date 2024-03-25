---
title: 41. First Missing Positive
seoTitle: LeetCode 41. First Missing Positive | Python solution and explanation
description: 41. First Missing Positive
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 41
---

[LeetCode problem 41](https://leetcode.com/problems/first-missing-positive/)

How to place each number in its 'correct' position if we ignore the space constraint. How can this idea be adapted to use constant space?

Use the array itself to record the presence of integers by placing each number in its "natural" position. For example, if 1 is in the array, place it at index 0, if 2 is there, place it at index 1, and so on. This way, the first place where its number doesn't match its index, the missing number is index + 1.

## Approach

1. Ignore Non-Positive and Large Numbers: First, ignore any non-positive numbers and numbers larger than n (array's size), as they don't help in finding the first missing positive.
1. Place Each Number in Its Correct Position: Iterate through the array, for each number num in nums, swap it with the number at index = num - 1 if it's not already in the correct position. Continue this process until every number is either in its correct position or cannot be placed (e.g., because it's out of the range [1, n]).
1. Find the First Missing Positive: After reordering, iterate through the array again. The first index i where nums[i] != i + 1 indicates that i + 1 is the missing number.

```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
                # Swap nums[i] with nums[nums[i] - 1]
                nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
        
        for i in range(n):
            if nums[i] != i + 1:
                return i + 1
        
        return n + 1
```

```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        def swap(i, j):
            nums[i], nums[j] = nums[j], nums[i]

        n = len(nums)
        for i in range(n):
            while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
                swap(i, nums[i] - 1)
        for i in range(n):
            if i + 1 != nums[i]:
                return i + 1
        return n + 1
```

Cyclic Sort pattern
