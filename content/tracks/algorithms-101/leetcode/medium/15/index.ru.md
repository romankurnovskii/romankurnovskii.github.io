---
title: 15. 3Sum
description: LeetCode 15. 3Sum
toc: true
authors: []
tags: [Array, "Two Pointers", Sorting]
categories: [Algorithms, Medium]
series: [Array, "Two Pointers", Sorting, "LeetCode Top Interview"]
date: 2022-11-03
featuredImage:
weight: 15
---

[LeetCode problem](https://leetcode.com/problems/3sum/)

Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example 1:**

    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

**Example 2:**

    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

## First accepted

**Idea:**

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        x = 0 # index
        ll = len(nums)
        
        res = []
        while x < ll - 2:
            if x == 0 or nums[x] != nums[x-1]:
                y = x + 1
                z = ll - 1

                while y < z:
                    s = nums[x] + nums[y] + nums[z]

                    if s == 0:
                        res.append([nums[x], nums[y], nums[z]])
                        while y < z and nums[y] == nums[y+1]:
                            y += 1
                        while z > y and nums[z] == nums[z-1]:
                            z -= 1
                        y += 1
                        z -= 1
                    elif s > 0:
                        z -= 1
                    else:
                        y += 1
            x += 1

        return res
```
