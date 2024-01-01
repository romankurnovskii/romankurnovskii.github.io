---
title: 1643. Kth Smallest Instructions
seoTitle: LeetCode 1643. Kth Smallest Instructions | Python solution and explanation
description: 1643. Kth Smallest Instructions
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1643
---

[LeetCode problem 1643](https://leetcode.com/problems/kth-smallest-instructions/)

```python
class Solution:
    def kthSmallestPath(self, destination: List[int], k: int) -> str:
        v, h = destination
        res = []
        for _ in range(h + v):
            if h == 0:
                res.append("V")
            else:
                x = comb(h + v - 1, h - 1)
                if k > x:
                    res.append("V")
                    v -= 1
                    k -= x
                else:
                    res.append("H")
                    h -= 1
        return "".join(res)

```
