---
title: 2962. Count Subarrays Where Max Element Appears at Least K Times
seoTitle: LeetCode 2962. Count Subarrays Where Max Element Appears at Least K Times | Python solution and explanation
description: 2962. Count Subarrays Where Max Element Appears at Least K Times
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-03-29
lastMod: 2024-03-29
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2962
---

[LeetCode problem 2962](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/)

```python
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        mx = max(nums)
        n = len(nums)
        res = cnt = j = 0
        for x in nums:
            while j < n and cnt < k:
                cnt += nums[j] == mx
                j += 1
            if cnt < k:
                break
            res += n - j + 1
            cnt -= x == mx
        return res
```
