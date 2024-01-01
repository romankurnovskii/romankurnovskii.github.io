---
title: 2003. Smallest Missing Genetic Value in Each Subtree
seoTitle: LeetCode 2003. Smallest Missing Genetic Value in Each Subtree | Python solution and explanation
description: 2003. Smallest Missing Genetic Value in Each Subtree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2003
---

[LeetCode problem 2003](https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/)

```python
class Solution:
    def smallestMissingValueSubtree(
        self, parents: List[int], nums: List[int]
    ) -> List[int]:
        def dfs(i: int):
            if vis[i]:
                return
            vis[i] = True
            if nums[i] < len(has):
                has[nums[i]] = True
            for j in g[i]:
                dfs(j)

        n = len(nums)
        res = [1] * n
        g = [[] for _ in range(n)]
        idx = -1
        for i, p in enumerate(parents):
            if i:
                g[p].append(i)
            if nums[i] == 1:
                idx = i
        if idx == -1:
            return res
        vis = [False] * n
        has = [False] * (n + 2)
        i = 2
        while idx != -1:
            dfs(idx)
            while has[i]:
                i += 1
            res[idx] = i
            idx = parents[idx]
        return res

```
