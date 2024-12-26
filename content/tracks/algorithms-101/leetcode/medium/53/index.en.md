---
title: 53. Maximum Subarray
description: LeetCode 53. Maximum Subarray
seoTitle: LeetCode 53. Maximum Subarray | Python solution and explanation
toc: true
authors: []
tags: [Array, "Divide and Conquer", "Dynamic Programming"]
categories: [Algorithms, Medium]
series:
date: 2022-12-26
featuredImage:
weight: 53
---

[LeetCode problem](https://leetcode.com/problems/maximum-subarray/)

Given an integer array `nums`, find the subarray which has the largest sum and return *its sum*.

**Example 1:**

    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.

**Example 2:**

    Input: nums = [1]
    Output: 1

**Example 3:**

    Input: nums = [5,4,-1,7,8]
    Output: 23

**Approach 1:**

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        max_ = nums[0]
        max2 = nums[0]
        
        if len(nums) == 1:
            return max_
        
        for i in range(1, len(nums)):
            max_ = max(nums[i], nums[i] + max_)
            max2 = max(max_, max2)
            
        return max2
            
```
