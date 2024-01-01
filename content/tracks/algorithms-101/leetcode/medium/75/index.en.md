---
title: 75. Sort Colors
description: LeetCode 75. Sort Colors
seoTitle: LeetCode 75. Sort Colors | Python soulution and explanation
toc: false
authors:
tags: [Array, "Two Pointers", Sorting]
categories: [Algorithms, Medium]
series: [Array, "Two Pointers", Sorting]
date: 2023-03-03
featuredImage:
weight: 75
---

[LeetCode problem](https://leetcode.com/problems/sort-colors/description/)

This problem is also known as the [Dutch National Flag problem](http://localhost:1313/en/tracks/algorithms-101/algorithms/#dutch-national-flag-problem). One solution is to use three pointers to partition the array into three sections: red, white, and blue.

Here's the algorithm:

1. Initialize three pointers: left, mid, and right.
1. Initialize left to 0, mid to 0, and right to n-1, where n is the length of the input array.
1. While mid is less than or equal to right:
   - If nums[mid] is 0, swap nums[mid] with nums[left], increment mid and left.
   - If nums[mid] is 1, increment mid.
   - If nums[mid] is 2, swap nums[mid] with nums[right], decrement right.
1. Return the sorted array.

```python
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        l, m, r = 0, 0, len(nums) - 1
        while m <= r:
            if nums[m] == 0:
                nums[m], nums[l] = nums[l], nums[m]
                l += 1
                m += 1
            elif nums[m] == 1:
                m += 1
            else:
                nums[m], nums[r] = nums[r], nums[m]
                r -= 1
```
