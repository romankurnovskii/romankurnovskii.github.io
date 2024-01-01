---
title: 1743. Restore the Array From Adjacent Pairs
seoTitle: LeetCode 1743. Restore the Array From Adjacent Pairs | Python solution and explanation
description: 1743. Restore the Array From Adjacent Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1743
---

[LeetCode problem 1743](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/)

```python
class Solution:
    def restoreArray(self, adjacentPairs: List[List[int]]) -> List[int]:
        def dfs(i, fa):
            res.append(i)
            for j in g[i]:
                if j != fa:
                    dfs(j, i)

        g = defaultdict(list)
        for a, b in adjacentPairs:
            g[a].append(b)
            g[b].append(a)
        i = next(i for i, v in g.items() if len(v) == 1)
        res = []
        dfs(i, 1e6)
        return res

```
