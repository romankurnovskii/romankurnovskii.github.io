---
title: 1889. Minimum Space Wasted From Packaging
seoTitle: LeetCode 1889. Minimum Space Wasted From Packaging | Python solution and explanation
description: 1889. Minimum Space Wasted From Packaging
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1889
---

[LeetCode problem 1889](https://leetcode.com/problems/minimum-space-wasted-from-packaging/)

```python
class Solution:
    def minWastedSpace(self, packages: List[int], boxes: List[List[int]]) -> int:
        mod = 10**9 + 7
        res = inf
        packages.sort()
        for box in boxes:
            box.sort()
            if packages[-1] > box[-1]:
                continue
            s = i = 0
            for b in box:
                j = bisect_right(packages, b, lo=i)
                s += (j - i) * b
                i = j
            res = min(res, s)
        if res == inf:
            return -1
        return (res - sum(packages)) % mod

```
