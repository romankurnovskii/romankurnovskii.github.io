---
title: 1794. Count Pairs of Equal Substrings With Minimum Difference
seoTitle: LeetCode 1794. Count Pairs of Equal Substrings With Minimum Difference | Python solution and explanation
description: 1794. Count Pairs of Equal Substrings With Minimum Difference
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1794
---

[LeetCode problem 1794](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/)

```python
class Solution:
    def countQuadruples(self, firstString: str, secondString: str) -> int:
        last = {c: i for i, c in enumerate(secondString)}
        res, mi = 0, inf
        for i, c in enumerate(firstString):
            if c in last:
                t = i - last[c]
                if mi > t:
                    mi = t
                    res = 1
                elif mi == t:
                    res += 1
        return res

```
