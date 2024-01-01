---
title: 1819. Number of Different Subsequences GCDs
seoTitle: LeetCode 1819. Number of Different Subsequences GCDs | Python solution and explanation
description: 1819. Number of Different Subsequences GCDs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1819
---

[LeetCode problem 1819](https://leetcode.com/problems/number-of-different-subsequences-gcds/)

```python
class Solution:
    def countDifferentSubsequenceGCDs(self, nums: List[int]) -> int:
        mx = max(nums)
        vis = set(nums)
        res = 0
        for x in range(1, mx + 1):
            g = 0
            for y in range(x, mx + 1, x):
                if y in vis:
                    g = gcd(g, y)
                    if g == x:
                        res += 1
                        break
        return res

```
