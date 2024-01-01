---
title: 1791. Find Center of Star Graph
seoTitle: LeetCode 1791. Find Center of Star Graph | Python solution and explanation
description: 1791. Find Center of Star Graph
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1791
---

[LeetCode problem 1791](https://leetcode.com/problems/find-center-of-star-graph/)

```python
class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        return edges[0][0] if edges[0][0] in edges[1] else edges[0][1]

```
