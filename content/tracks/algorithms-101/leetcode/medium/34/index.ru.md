---
title: 34. Find First and Last Position of Element in Sorted Array
description: LeetCode 34. Find First and Last Position of Element in Sorted Array
toc: true
authors: []
tags: [Array, "Bit Manipulation"]
categories: [Algorithms, Medium]
series:
date: 2022-11-25
featuredImage:
weight: 34
---

[LeetCode problem](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return `[-1, -1]`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

  Input: nums = [5,7,7,8,8,10], target = 8
  Output: [3,4]

**Example 2:**

  Input: nums = [5,7,7,8,8,10], target = 6
  Output: [-1,-1]

**Example 3:**

  Input: nums = [], target = 0
  Output: [-1,-1]

## Code

**Idea:**

1. Find `target` index (`target_index`) using [Binary Search](/en/tracks/algorithms-101/algorithms/#binary-search)
   1. If **not exist** then return `[-1, -1]`
   2. If **exist** then goto step 2
2. We got the middle index. For now this is the *most left* and *most right* index.
3. Divide `nums` into two arrays: `left_nums` and `right_nums`:
   1. left_nums = nums[0:target_index]
   2. right_nums = nums[target_index:]
4. Find the *most left* `target` in `left_nums`. (Set **right** border in subarray)
5. Find the *most right* `target` in `right_nums`. (Set **left** border in subarray)

```python
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:

        def find_target():
            left = 0
            right = len(nums) - 1

            while left <= right:
                mid = (left + right) // 2
                if nums[mid] == target:
                    return mid

                if nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1

            return -1

        def find_most_left(right_idx):
            l = 0
            r = right_idx

            while l <= r:
                m = (l + r) // 2
                if nums[m] < target:
                    l = m + 1
                else:
                    r = m - 1
            return l

        def find_most_right(left_idx):
            l = left_idx
            r = len(nums) - 1

            while l <= r:
                m = (l + r) // 2
                if nums[m] == target:    # ex: [8, 8,   8,   9, 10]
                    l = l + 1
                else:                    # ex: [8, 8, 8, 9, 10]
                    r = m - 1
            return l - 1

        target_idx = find_target()
        if target_idx == -1:
            return [-1,-1]

        left = find_most_left(target_idx)
        right = find_most_right(target_idx)
        
        return [left, right]
```

## Code Ver2

Use prebuilt Python functions:

- [`bisect_left`](https://docs.python.org/3/library/bisect.html#bisect.bisect_left)
- [`bisect_right`](https://docs.python.org/3/library/bisect.html#bisect.bisect_right)

```python
class Solution:
  def searchRange(self, nums: List[int], target: int) -> List[int]:
    l = bisect_left(nums, target)
    if l == len(nums) or nums[l] != target:
      return -1, -1
    r = bisect_right(nums, target) - 1
    return l, r
```
