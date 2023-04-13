---
title: 1. Two Sum
description: LeetCode 1. Two Sum
toc: false
authors: [roman-kurnovskii]
tags: [Array, "Hash Table"]
categories: [Algorithms, Easy]
series:
date: 2022-10-16
featuredImage:
weight: 10
---

[LeetCode problem](https://leetcode.com/problems/two-sum/)

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

**Topics:**
array, hash table

> If we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?

> The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?

## First accepted

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_set = set(nums)  # to search in a O(1)
        while nums:
            n1 = nums.pop() # get last
            n2 = target - n1
            
            if n1 == n2:
                if n2 in nums:
                    return [len(nums), nums.index(n2)]
            elif n2 in nums_set:
                return [len(nums), nums.index(n2)]
```

- faster than 64.51%
- Memory Usage: 15.5 MB, less than 9.15%

Time complexity:
1. set(nums): O(n)
2. while nums: O(n)
3. nums.pop: O(1)
4. nums.index: O(n)


## Better solution

> remember indexes of "passed" `n's` from `nums`

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}
        for idx, n1 in enumerate(nums):
            n2 = target - n1
            if n2 in hashmap:
                return [idx, hashmap[n2]]
            hashmap[n1] = idx
```

- faster than 53.00%
- Memory Usage: 15.1 MB, less than 52.14%
