---
title: 2090. K Radius Subarray Averages
seoTitle: LeetCode 2090. K Radius Subarray Averages | Python solution and explanation
description: 2090. K Radius Subarray Averages
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2090
---

[LeetCode problem 2090](https://leetcode.com/problems/k-radius-subarray-averages/)

```python
class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        s = 0
        res = [-1] * len(nums)
        for i, v in enumerate(nums):
            s += v
            if i >= k * 2:
                res[i - k] = s // (k * 2 + 1)
                s -= nums[i - k * 2]
        return res

```
