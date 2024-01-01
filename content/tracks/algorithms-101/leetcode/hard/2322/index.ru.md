---
title: 2322. Minimum Score After Removals on a Tree
seoTitle: LeetCode 2322. Minimum Score After Removals on a Tree | Python solution and explanation
description: 2322. Minimum Score After Removals on a Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2322
---

[LeetCode problem 2322](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/)

```python
class Solution:
    def minimumScore(self, nums: List[int], edges: List[List[int]]) -> int:
        def dfs(i, fa, x):
            res = nums[i]
            for j in g[i]:
                if j != fa and j != x:
                    res ^= dfs(j, i, x)
            return res

        def dfs2(i, fa, x):
            nonlocal s, s1, res
            res = nums[i]
            for j in g[i]:
                if j != fa and j != x:
                    a = dfs2(j, i, x)
                    res ^= a
                    b = s1 ^ a
                    c = s ^ s1
                    t = max(a, b, c) - min(a, b, c)
                    res = min(res, t)
            return res

        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)

        s = 0
        for v in nums:
            s ^= v
        n = len(nums)
        res = inf
        for i in range(n):
            for j in g[i]:
                s1 = dfs(i, -1, j)
                dfs2(i, -1, j)
        return res

```
