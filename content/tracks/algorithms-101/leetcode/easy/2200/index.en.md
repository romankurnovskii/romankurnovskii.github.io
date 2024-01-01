---
title: 2200. Find All K-Distant Indices in an Array
seoTitle: LeetCode 2200. Find All K-Distant Indices in an Array | Python solution and explanation
description: 2200. Find All K-Distant Indices in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2200
---

[LeetCode problem 2200](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/)

```python
class Solution:
    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
        res = []
        j, n = 0, len(nums)
        for i in range(n):
            while j < i - k or (j < n and nums[j] != key):
                j += 1
            if j < n and j <= (i + k):
                res.append(i)
        return res

```
