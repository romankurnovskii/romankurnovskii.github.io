---
title: 55. Jump Game
description: LeetCode 55. Jump Game
seoTitle: LeetCode 55. Jump Game | Python solution and explanation
toc: true
authors: []
tags: [Array, Greedy, "Dynamic Programming"]
categories: [Algorithms, Medium]
series:
date: 2022-12-29
featuredImage:
weight: 55
---

[LeetCode problem](https://leetcode.com/problems/maximum-subarray/)

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

**Example 1:**

    Input: nums = [2,3,1,1,4]
    Output: true
    Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

**Example 2:**

    Input: nums = [3,2,1,0,4]
    Output: false
    Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

**Approach 1:**

Idea: go forward on each step and *mark* next cell if can achieve it.

```python
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        last_i = len(nums)
        if last_i == 1:
            return True
        nn = [0] * last_i
        nn[0] = nums[0]
        for i in range(last_i):
            el = nums[i]
            if el or nn[i+1]:
                for j in range(el):
                    nn[i+j+1] = el
                    if nn[last_i - 1]:
                        return True
            else:
                return False
        return False
```

**Approach 2:**

Going forwards. `m` tells the maximum index we can reach so far.

```python
class Solution:
    def canJump(self, nums):
        m = 0
        for i, n in enumerate(nums):
            if i > m:
                return False
            m = max(m, i + n)
        return True

class Solution:
  def canJump(self, nums: List[int]) -> bool:
    i = 0
    m = 0
    while i < len(nums) and i <= m:
      m = max(m, i + nums[i])
      i += 1
    return i == len(nums)
```
