---
title: 442. Find All Duplicates in an Array
seoTitle: LeetCode 442. Find All Duplicates in an Array | Python solution and explanation
description: 442. Find All Duplicates in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 442
---

[LeetCode problem 442](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

The key idea to solve this problem is to use the fact that all integers are within the range [1, n] and use the indices of the array itself to mark the occurrence of an element. When an element is seen for the first time, you mark the element at the index corresponding to that element (considering 1-based indexing). If you encounter the same element again, you will find that its corresponding index is already marked, indicating a duplicate.

## Approach

1. Marking Strategy: Iterate over the array, and for each element `nums[i]`, mark the element at the index `abs(nums[i]) - 1` as negative if it's not already negative. The presence of a negative value at index i indicates that `i + 1` has been seen before.
1. Identify Duplicates: While marking, if you find that the element at index `abs(nums[i]) - 1` is already negative, it means `abs(nums[i])` is a duplicate.
1. Collect Duplicates: Add `abs(nums[i])` to the result list when you identify a duplicate.

```python
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        duplicates = []
        for num in nums:
            if nums[abs(num) - 1] < 0:
                duplicates.append(abs(num))
            else:
                nums[abs(num) - 1] *= -1

        return duplicates
```

## Point

1. Marking: We use the sign of elements at specific indices to mark the presence of numbers. If an element's corresponding index is already negative, it indicates a duplicate.
1. Absolute Values: Always consider the absolute value of the current element when determining the index to mark, since some numbers may have already been marked negative.
1. Duplicates List: By only adding numbers to the duplicates list when we encounter a negative mark for their corresponding index, we ensure that each duplicate is only added once.

For the array `[4,3,2,7,8,2,3,1]`, it's like saying:

- "4 says go to house 4 and mark it."
- "3 says go to house 3 and mark it."
- ...
- When "2" is encountered again, it says, "Go to house 2," but it's already marked, so "2" is a duplicate.

## Pattern

Hash numbers

**Cyclic Sort** pattern, where elements are placed in their correct positions based on their values, allowing us to identify anomalies (like duplicates or missing numbers) through the positions of elements.
