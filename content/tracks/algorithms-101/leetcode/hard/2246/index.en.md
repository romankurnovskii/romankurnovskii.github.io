---
title: 2246. Longest Path With Different Adjacent Characters
seoTitle: LeetCode 2246. Longest Path With Different Adjacent Characters | Python solution and explanation
description: 2246. Longest Path With Different Adjacent Characters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2246
---

[LeetCode problem 2246](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/)

```python
class Solution:
    def longestPath(self, parent: List[int], s: str) -> int:
        def dfs(i: int) -> int:
            mx = 0
            nonlocal res
            for j in g[i]:
                x = dfs(j) + 1
                if s[i] != s[j]:
                    res = max(res, mx + x)
                    mx = max(mx, x)
            return mx

        g = defaultdict(list)
        for i in range(1, len(parent)):
            g[parent[i]].append(i)
        res = 0
        dfs(0)
        return res + 1

```
