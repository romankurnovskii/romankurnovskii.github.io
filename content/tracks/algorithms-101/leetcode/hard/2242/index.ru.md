---
title: 2242. Maximum Score of a Node Sequence
seoTitle: LeetCode 2242. Maximum Score of a Node Sequence | Python solution and explanation
description: 2242. Maximum Score of a Node Sequence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2242
---

[LeetCode problem 2242](https://leetcode.com/problems/maximum-score-of-a-node-sequence/)

```python
class Solution:
    def maximumScore(self, scores: List[int], edges: List[List[int]]) -> int:
        g = defaultdict(list)
        for a, b in edges:
            g[a].append(b)
            g[b].append(a)
        for k in g.keys():
            g[k] = nlargest(3, g[k], key=lambda x: scores[x])
        res = -1
        for a, b in edges:
            for c in g[a]:
                for d in g[b]:
                    if b != c != d != a:
                        t = scores[a] + scores[b] + scores[c] + scores[d]
                        res = max(res, t)
        return res

```
