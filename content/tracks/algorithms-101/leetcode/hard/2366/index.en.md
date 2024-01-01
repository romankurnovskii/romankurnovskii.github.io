---
title: 2366. Minimum Replacements to Sort the Array
seoTitle: LeetCode 2366. Minimum Replacements to Sort the Array | Python solution and explanation
description: 2366. Minimum Replacements to Sort the Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2366
---

[LeetCode problem 2366](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/)

```python
class Solution:
    def minimumReplacement(self, nums: List[int]) -> int:
        res = 0
        n = len(nums)
        mx = nums[-1]
        for i in range(n - 2, -1, -1):
            if nums[i] <= mx:
                mx = nums[i]
                continue
            k = (nums[i] + mx - 1) // mx
            res += k - 1
            mx = nums[i] // k
        return res

```
