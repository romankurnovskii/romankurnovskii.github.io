---
title: 1968. Array With Elements Not Equal to Average of Neighbors
seoTitle: LeetCode 1968. Array With Elements Not Equal to Average of Neighbors | Python solution and explanation
description: 1968. Array With Elements Not Equal to Average of Neighbors
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1968
---

[LeetCode problem 1968](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/)

```python
class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        nums.sort()
        n = len(nums)
        m = (n + 1) >> 1
        res = []
        for i in range(m):
            res.append(nums[i])
            if i + m < n:
                res.append(nums[i + m])
        return res

```
