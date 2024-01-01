---
title: 1770. Maximum Score from Performing Multiplication Operations
seoTitle: LeetCode 1770. Maximum Score from Performing Multiplication Operations | Python solution and explanation
description: 1770. Maximum Score from Performing Multiplication Operations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1770
---

[LeetCode problem 1770](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/)

```python
class Solution:
    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:
        n, m = len(nums), len(multipliers)
        f = [[-inf] * (m + 1) for _ in range(m + 1)]
        f[0][0] = 0
        res = -inf
        for i in range(m + 1):
            for j in range(m - i + 1):
                k = i + j - 1
                if i > 0:
                    f[i][j] = max(f[i][j], f[i - 1][j] + multipliers[k] * nums[i - 1])
                if j > 0:
                    f[i][j] = max(f[i][j], f[i][j - 1] + multipliers[k] * nums[n - j])
                if i + j == m:
                    res = max(res, f[i][j])
        return res

```
