---
title: 2021. Brightest Position on Street
seoTitle: LeetCode 2021. Brightest Position on Street | Python solution and explanation
description: 2021. Brightest Position on Street
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2021
---

[LeetCode problem 2021](https://leetcode.com/problems/brightest-position-on-street/)

```python
class Solution:
    def brightestPosition(self, lights: List[List[int]]) -> int:
        d = defaultdict(int)
        for i, j in lights:
            l, r = i - j, i + j
            d[l] += 1
            d[r + 1] -= 1
        res = s = mx = 0
        for k in sorted(d):
            s += d[k]
            if mx < s:
                mx = s
                res = k
        return res

```
