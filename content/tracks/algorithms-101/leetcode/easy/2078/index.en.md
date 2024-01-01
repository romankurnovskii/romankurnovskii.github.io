---
title: 2078. Two Furthest Houses With Different Colors
seoTitle: LeetCode 2078. Two Furthest Houses With Different Colors | Python solution and explanation
description: 2078. Two Furthest Houses With Different Colors
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2078
---

[LeetCode problem 2078](https://leetcode.com/problems/two-furthest-houses-with-different-colors/)

```python
class Solution:
    def maxDistance(self, colors: List[int]) -> int:
        n = len(colors)
        if colors[0] != colors[-1]:
            return n - 1
        i, j = 1, n - 2
        while colors[i] == colors[0]:
            i += 1
        while colors[j] == colors[0]:
            j -= 1
        return max(n - i - 1, j)

```
