---
title: 2111. Minimum Operations to Make the Array K-Increasing
seoTitle: LeetCode 2111. Minimum Operations to Make the Array K-Increasing | Python solution and explanation
description: 2111. Minimum Operations to Make the Array K-Increasing
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2111
---

[LeetCode problem 2111](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/)

```python
class Solution:
    def kIncreasing(self, arr: List[int], k: int) -> int:
        def lis(arr):
            t = []
            for x in arr:
                idx = bisect_right(t, x)
                if idx == len(t):
                    t.append(x)
                else:
                    t[idx] = x
            return len(arr) - len(t)

        return sum(lis(arr[i::k]) for i in range(k))

```
