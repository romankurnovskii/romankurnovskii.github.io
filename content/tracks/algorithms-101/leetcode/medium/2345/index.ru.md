---
title: 2345. Finding the Number of Visible Mountains
seoTitle: LeetCode 2345. Finding the Number of Visible Mountains | Python solution and explanation
description: 2345. Finding the Number of Visible Mountains
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2345
---

[LeetCode problem 2345](https://leetcode.com/problems/finding-the-number-of-visible-mountains/)

```python
class Solution:
    def visibleMountains(self, peaks: List[List[int]]) -> int:
        arr = [(x - y, x + y) for x, y in peaks]
        cnt = Counter(arr)
        arr.sort(key=lambda x: (x[0], -x[1]))
        res, cur = 0, -inf
        for l, r in arr:
            if r <= cur:
                continue
            cur = r
            if cnt[(l, r)] == 1:
                res += 1
        return res

```
