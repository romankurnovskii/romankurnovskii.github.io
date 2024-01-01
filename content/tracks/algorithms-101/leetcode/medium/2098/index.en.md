---
title: 2098. Subsequence of Size K With the Largest Even Sum
seoTitle: LeetCode 2098. Subsequence of Size K With the Largest Even Sum | Python solution and explanation
description: 2098. Subsequence of Size K With the Largest Even Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2098
---

[LeetCode problem 2098](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/)

```python
class Solution:
    def largestEvenSum(self, nums: List[int], k: int) -> int:
        nums.sort()
        res = sum(nums[-k:])
        if res % 2 == 0:
            return res
        n = len(nums)
        mx1 = mx2 = -inf
        for x in nums[: n - k]:
            if x & 1:
                mx1 = x
            else:
                mx2 = x
        mi1 = mi2 = inf
        for x in nums[-k:][::-1]:
            if x & 1:
                mi2 = x
            else:
                mi1 = x
        res = max(res - mi1 + mx1, res - mi2 + mx2, -1)
        return -1 if res % 2 else res

```
