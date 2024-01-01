---
title: 2386. Find the K-Sum of an Array
seoTitle: LeetCode 2386. Find the K-Sum of an Array | Python solution and explanation
description: 2386. Find the K-Sum of an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2386
---

[LeetCode problem 2386](https://leetcode.com/problems/find-the-k-sum-of-an-array/)

```python
class Solution:
    def kSum(self, nums: List[int], k: int) -> int:
        mx = 0
        for i, v in enumerate(nums):
            if v > 0:
                mx += v
            else:
                nums[i] = -v
        nums.sort()
        h = [(0, 0)]
        for _ in range(k - 1):
            s, i = heappop(h)
            if i < len(nums):
                heappush(h, (s + nums[i], i + 1))
                if i:
                    heappush(h, (s + nums[i] - nums[i - 1], i + 1))
        return mx - h[0][0]

```
