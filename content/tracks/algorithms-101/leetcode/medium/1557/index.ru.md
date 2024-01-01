---
title: 1557. Minimum Number of Vertices to Reach All Nodes
seoTitle: LeetCode 1557. Minimum Number of Vertices to Reach All Nodes | Python solution and explanation
description: 1557. Minimum Number of Vertices to Reach All Nodes
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1557
---

[LeetCode problem 1557](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/)

```python
class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        cnt = Counter(t for _, t in edges)
        return [i for i in range(n) if cnt[i] == 0]

```
