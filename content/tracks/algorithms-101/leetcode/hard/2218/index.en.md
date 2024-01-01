---
title: 2218. Maximum Value of K Coins From Piles
seoTitle: LeetCode 2218. Maximum Value of K Coins From Piles | Python solution and explanation
description: 2218. Maximum Value of K Coins From Piles
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2218
---

[LeetCode problem 2218](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/)

```python
class Solution:
    def maxValueOfCoins(self, piles: List[List[int]], k: int) -> int:
        presum = [list(accumulate(p, initial=0)) for p in piles]
        dp = [0] * (k + 1)
        for s in presum:
            for j in range(k, -1, -1):
                for idx, v in enumerate(s):
                    if j >= idx:
                        dp[j] = max(dp[j], dp[j - idx] + v)
        return dp[-1]

```
