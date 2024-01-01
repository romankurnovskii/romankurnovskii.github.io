---
title: 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum
seoTitle: LeetCode 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum | Python solution and explanation
description: 1477. Find Two Non-overlapping Sub-arrays Each With Target Sum
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1477
---

[LeetCode problem 1477](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/)

```python
class Solution:
    def minSumOfLengths(self, arr: List[int], target: int) -> int:
        d = {0: 0}
        s, n = 0, len(arr)
        f = [inf] * (n + 1)
        res = inf
        for i, v in enumerate(arr, 1):
            s += v
            f[i] = f[i - 1]
            if s - target in d:
                j = d[s - target]
                f[i] = min(f[i], i - j)
                res = min(res, f[j] + i - j)
            d[s] = i
        return -1 if res > n else res

```
