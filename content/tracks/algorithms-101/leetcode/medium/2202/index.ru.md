---
title: 2202. Maximize the Topmost Element After K Moves
seoTitle: LeetCode 2202. Maximize the Topmost Element After K Moves | Python solution and explanation
description: 2202. Maximize the Topmost Element After K Moves
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2202
---

[LeetCode problem 2202](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/)

```python
class Solution:
    def maximumTop(self, nums: List[int], k: int) -> int:
        if k == 0:
            return nums[0]
        n = len(nums)
        if n == 1:
            if k % 2:
                return -1
            return nums[0]
        res = max(nums[: k - 1], default=-1)
        if k < n:
            res = max(res, nums[k])
        return res

```
