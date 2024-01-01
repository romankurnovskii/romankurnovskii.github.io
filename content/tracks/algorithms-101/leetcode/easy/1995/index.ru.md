---
title: 1995. Count Special Quadruplets
seoTitle: LeetCode 1995. Count Special Quadruplets | Python solution and explanation
description: 1995. Count Special Quadruplets
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1995
---

[LeetCode problem 1995](https://leetcode.com/problems/count-special-quadruplets/)

```python
class Solution:
    def countQuadruplets(self, nums: List[int]) -> int:
        res, n = 0, len(nums)
        counter = Counter()
        for b in range(n - 3, 0, -1):
            c = b + 1
            for d in range(c + 1, n):
                counter[nums[d] - nums[c]] += 1
            for a in range(b):
                res += counter[nums[a] + nums[b]]
        return res

```
