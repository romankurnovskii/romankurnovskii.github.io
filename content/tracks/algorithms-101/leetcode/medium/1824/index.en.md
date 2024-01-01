---
title: 1824. Minimum Sideway Jumps
seoTitle: LeetCode 1824. Minimum Sideway Jumps | Python solution and explanation
description: 1824. Minimum Sideway Jumps
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1824
---

[LeetCode problem 1824](https://leetcode.com/problems/minimum-sideway-jumps/)

```python
class Solution:
    def minSideJumps(self, obstacles: List[int]) -> int:
        f = [1, 0, 1]
        for v in obstacles[1:]:
            for j in range(3):
                if v == j + 1:
                    f[j] = inf
                    break
            x = min(f) + 1
            for j in range(3):
                if v != j + 1:
                    f[j] = min(f[j], x)
        return min(f)

```
