---
title: 2441. Largest Positive Integer That Exists With Its Negative
seoTitle: LeetCode 2441. Largest Positive Integer That Exists With Its Negative | Python solution and explanation
description: 2441. Largest Positive Integer That Exists With Its Negative
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-05-02
lastMod: 2024-05-02
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2441
---

[LeetCode problem 2441](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/)

```python
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums.sort()
        p1 = 0
        p2 = len(nums)-1

        while p1 < p2:
            l = nums[p1]
            r = nums[p2]

            ssum = l + r
            if ssum == 0:
                return r
            if ssum < 0:
                p1 += 1
            else:
                p2 -= 1
        
        return -1
```

```python
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        s = set(nums)
        return max((x for x in s if -x in s), default=-1)
```
