---
title: 2216. Minimum Deletions to Make Array Beautiful
seoTitle: LeetCode 2216. Minimum Deletions to Make Array Beautiful | Python solution and explanation
description: 2216. Minimum Deletions to Make Array Beautiful
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2216
---

[LeetCode problem 2216](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/)

```python
class Solution:
    def minDeletion(self, nums: List[int]) -> int:
        n = len(nums)
        res = i = 0
        while i < n:
            j = i + 1
            while j < n and nums[j] == nums[i]:
                j += 1
                res += 1
            i = j + 1
        res += (n - res) % 2
        return res

```
