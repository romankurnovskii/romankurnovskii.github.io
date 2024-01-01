---
title: 2270. Number of Ways to Split Array
seoTitle: LeetCode 2270. Number of Ways to Split Array | Python solution and explanation
description: 2270. Number of Ways to Split Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2270
---

[LeetCode problem 2270](https://leetcode.com/problems/number-of-ways-to-split-array/)

```python
class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        s = sum(nums)
        res = t = 0
        for v in nums[:-1]:
            t += v
            if t >= s - t:
                res += 1
        return res

```
