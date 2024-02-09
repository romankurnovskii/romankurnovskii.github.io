---
title: 179. Largest Number
seoTitle: LeetCode 179. Largest Number | Python solution and explanation
description: 179. Largest Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 179
---

[LeetCode problem 179](https://leetcode.com/problems/largest-number/)

```python
class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        nums = [str(v) for v in nums]
        nums.sort(key=cmp_to_key(lambda a, b: 1 if a + b < b + a else -1))
        return "0" if nums[0] == "0" else "".join(nums)

```
