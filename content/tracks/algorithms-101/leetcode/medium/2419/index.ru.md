---
title: 2419. Longest Subarray With Maximum Bitwise AND
seoTitle: LeetCode 2419. Longest Subarray With Maximum Bitwise AND | Python solution and explanation
description: 2419. Longest Subarray With Maximum Bitwise AND
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2419
---

[LeetCode problem 2419](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/)

```python
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        mx = max(nums)
        res = cnt = 0
        for v in nums:
            if v == mx:
                cnt += 1
                res = max(res, cnt)
            else:
                cnt = 0
        return res

```