---
title: 1838. Frequency of the Most Frequent Element
seoTitle: LeetCode 1838. Frequency of the Most Frequent Element | Python solution and explanation
description: 1838. Frequency of the Most Frequent Element
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1838
---

[LeetCode problem 1838](https://leetcode.com/problems/frequency-of-the-most-frequent-element/)

```python
class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        def check(cnt):
            for i in range(n + 1 - cnt):
                j = i + cnt - 1
                if nums[j] * cnt - (s[j + 1] - s[i]) <= k:
                    return True
            return False

        nums.sort()
        s = list(accumulate(nums, initial=0))
        n = len(nums)
        left, right = 1, n
        while left < right:
            mid = (left + right + 1) >> 1
            if check(mid):
                left = mid
            else:
                right = mid - 1
        return left

```
