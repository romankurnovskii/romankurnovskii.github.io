---
title: 2148. Count Elements With Strictly Smaller and Greater Elements
seoTitle: LeetCode 2148. Count Elements With Strictly Smaller and Greater Elements | Python solution and explanation
description: 2148. Count Elements With Strictly Smaller and Greater Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2148
---

[LeetCode problem 2148](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/)

```python
class Solution:
    def countElements(self, nums: List[int]) -> int:
        mi, mx = min(nums), max(nums)
        return sum(mi < num < mx for num in nums)

```
