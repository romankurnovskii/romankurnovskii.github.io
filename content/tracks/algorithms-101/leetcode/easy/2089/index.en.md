---
title: 2089. Find Target Indices After Sorting Array
seoTitle: LeetCode 2089. Find Target Indices After Sorting Array | Python solution and explanation
description: 2089. Find Target Indices After Sorting Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2089
---

[LeetCode problem 2089](https://leetcode.com/problems/find-target-indices-after-sorting-array/)

```python
class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        nums.sort()
        return [i for i, v in enumerate(nums) if v == target]

```
