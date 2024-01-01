---
title: 1766. Tree of Coprimes
seoTitle: LeetCode 1766. Tree of Coprimes | Python solution and explanation
description: 1766. Tree of Coprimes
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1766
---

[LeetCode problem 1766](https://leetcode.com/problems/tree-of-coprimes/)

```python
class Solution:
    def getCoprimes(self, nums: List[int], edges: List[List[int]]) -> List[int]:
        def dfs(i, fa, depth):
            t = k = -1
            for v in f[nums[i]]:
                stk = stks[v]
                if stk and stk[-1][1] > k:
                    t, k = stk[-1]
            res[i] = t
            for j in g[i]:
                if j != fa:
                    stks[nums[i]].append((i, depth))
                    dfs(j, i, depth + 1)
                    stks[nums[i]].pop()

        g = defaultdict(list)
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)
        f = defaultdict(list)
        for i in range(1, 51):
            for j in range(1, 51):
                if gcd(i, j) == 1:
                    f[i].append(j)
        stks = defaultdict(list)
        res = [-1] * len(nums)
        dfs(0, -1, 0)
        return res

```
