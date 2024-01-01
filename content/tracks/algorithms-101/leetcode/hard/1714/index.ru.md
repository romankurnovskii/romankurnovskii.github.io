---
title: 1714. Sum Of Special Evenly-Spaced Elements In Array
seoTitle: LeetCode 1714. Sum Of Special Evenly-Spaced Elements In Array | Python solution and explanation
description: 1714. Sum Of Special Evenly-Spaced Elements In Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1714
---

[LeetCode problem 1714](https://leetcode.com/problems/sum-of-special-evenly-spaced-elements-in-array/)

```python
class Solution:
    def solve(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        mod = 10**9 + 7
        n = len(nums)
        m = int(sqrt(n))
        suf = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(n - 1, -1, -1):
                suf[i][j] = suf[i][min(n, j + i)] + nums[j]
        res = []
        for x, y in queries:
            if y <= m:
                res.append(suf[y][x] % mod)
            else:
                res.append(sum(nums[x::y]) % mod)
        return res

```
