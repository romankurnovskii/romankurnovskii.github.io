---
title: 1799. Maximize Score After N Operations
seoTitle: LeetCode 1799. Maximize Score After N Operations | Python solution and explanation
description: 1799. Maximize Score After N Operations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1799
---

[LeetCode problem 1799](https://leetcode.com/problems/maximize-score-after-n-operations/)

```python
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        m = len(nums)
        f = [0] * (1 << m)
        g = [[0] * m for _ in range(m)]
        for i in range(m):
            for j in range(i + 1, m):
                g[i][j] = gcd(nums[i], nums[j])
        for k in range(1 << m):
            if (cnt := k.bit_count()) % 2 == 0:
                for i in range(m):
                    if k >> i & 1:
                        for j in range(i + 1, m):
                            if k >> j & 1:
                                f[k] = max(
                                    f[k],
                                    f[k ^ (1 << i) ^ (1 << j)] + cnt // 2 * g[i][j],
                                )
        return f[-1]

```
