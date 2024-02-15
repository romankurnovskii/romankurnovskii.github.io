---
title: 2971. Find Polygon With the Largest Perimeter
seoTitle: LeetCode 2971. Find Polygon With the Largest Perimeter | Python solution and explanation
description: 2971. Find Polygon With the Largest Perimeter
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2971
---

[LeetCode problem 2971](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/submissions/1176230427)

```python
class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        nums.sort()
        s = list(accumulate(nums, initial=0))
        res = -1
        for k in range(3, len(nums) + 1):
            if s[k - 1] > nums[k - 1]:
                res = max(res, s[k])
        return res
```
