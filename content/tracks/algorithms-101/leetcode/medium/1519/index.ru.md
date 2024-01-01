---
title: 1519. Number of Nodes in the Sub-Tree With the Same Label
seoTitle: LeetCode 1519. Number of Nodes in the Sub-Tree With the Same Label | Python solution and explanation
description: 1519. Number of Nodes in the Sub-Tree With the Same Label
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1519
---

[LeetCode problem 1519](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/)

```python
class Solution:
    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:
        def dfs(i, fa):
            res[i] -= cnt[labels[i]]
            cnt[labels[i]] += 1
            for j in g[i]:
                if j != fa:
                    dfs(j, i)
            res[i] += cnt[labels[i]]

        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        cnt = Counter()
        res = [0] * n
        dfs(0, -1)
        return res

```
