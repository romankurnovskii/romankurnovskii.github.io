---
title: 992. Subarrays with K Different Integers
seoTitle: LeetCode 992. Subarrays with K Different Integers | Python solution and explanation
description: 992. Subarrays with K Different Integers
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-03-30
featuredImage: https://picsum.photos/700/155?grayscale
weight: 992
---

[LeetCode problem 992](https://leetcode.com/problems/subarrays-with-k-different-integers/)

Using the sliding window technique to keep track of the different integers within a window. Adjust the window's size to always contain exactly `k` different integers.

The idea is to transform the problem into finding the number of subarrays with at most k different integers and subtract the number of subarrays with at most `k-1` different integers from it.

## Approach

1. At Most K: Implement a function `helper(nums, k)` that returns the number of subarrays with at most k different integers.
2. Utilize `helper` function for the Solution: The number of subarrays with exactly `k` different integers is helper`(nums, k) - helper(nums, k-1)`.
3. Implement `helper`: Use a sliding window technique to expand the window to include as many elements as long as there are at most `k` different ones. Shrink the window from the left when the condition is violated. Keep track of the count of each integer in the current window using a hash map.

```python
class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        def helper(nums, k):  # at most k
            count = {}
            res = i = 0
            for j in range(len(nums)):
                if nums[j] not in count:
                    k -= 1
                    count[nums[j]] = 0
                count[nums[j]] += 1
                while k < 0:
                    count[nums[i]] -= 1
                    if count[nums[i]] == 0:
                        k += 1
                        del count[nums[i]]
                    i += 1
                res += j - i + 1
            return res

        return helper(nums, k) - helper(nums, k-1)
```

## Pattern

This problem follows the Sliding Window pattern, where a window of elements is expanded and shrunk based on certain conditions. The sliding window technique is commonly used to solve problems related to contiguous subarrays or substrings, particularly when you need to track or calculate something among all possible subarrays or substrings of a certain size or condition.
