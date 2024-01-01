---
title: 1562. Find Latest Group of Size M
seoTitle: LeetCode 1562. Find Latest Group of Size M | Python solution and explanation
description: 1562. Find Latest Group of Size M
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1562
---

[LeetCode problem 1562](https://leetcode.com/problems/find-latest-group-of-size-m/)

```python
class Solution:
    def findLatestStep(self, arr: List[int], m: int) -> int:
        n = len(arr)
        if m == n:
            return n
        cnt = [0] * (n + 2)
        res = -1
        for i, v in enumerate(arr):
            v -= 1
            l, r = cnt[v - 1], cnt[v + 1]
            if l == m or r == m:
                res = i
            cnt[v - l] = cnt[v + r] = l + r + 1
        return res

```
