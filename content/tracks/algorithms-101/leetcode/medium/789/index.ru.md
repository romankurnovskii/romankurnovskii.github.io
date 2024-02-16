---
title: 789. Escape The Ghosts
seoTitle: LeetCode 789. Escape The Ghosts | Python solution and explanation
description: 789. Escape The Ghosts
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 789
---

[LeetCode problem 789](https://leetcode.com/problems/escape-the-ghosts/)

```python
class Solution:
    def escapeGhosts(self, ghosts: List[List[int]], target: List[int]) -> bool:
        tx, ty = target
        return all(abs(tx - x) + abs(ty - y) > abs(tx) + abs(ty) for x, y in ghosts)

```
