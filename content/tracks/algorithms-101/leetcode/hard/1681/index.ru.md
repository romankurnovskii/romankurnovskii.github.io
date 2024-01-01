---
title: 1681. Minimum Incompatibility
seoTitle: LeetCode 1681. Minimum Incompatibility | Python solution and explanation
description: 1681. Minimum Incompatibility
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1681
---

[LeetCode problem 1681](https://leetcode.com/problems/minimum-incompatibility/)

```python
class Solution:
    def minimumIncompatibility(self, nums: List[int], k: int) -> int:
        @cache
        def dfs(mask):
            if mask == (1 << n) - 1:
                return 0
            d = {v: i for i, v in enumerate(nums) if (mask >> i & 1) == 0}
            res = inf
            if len(d) < m:
                return res
            for vs in combinations(d.keys(), m):
                nxt = mask
                for v in vs:
                    nxt |= 1 << d[v]
                res = min(res, max(vs) - min(vs) + dfs(nxt))
            return res

        n = len(nums)
        m = n // k
        res = dfs(0)
        dfs.cache_clear()
        return res if res < inf else -1

```
