---
title: 1787. Make the XOR of All Segments Equal to Zero
seoTitle: LeetCode 1787. Make the XOR of All Segments Equal to Zero | Python solution and explanation
description: 1787. Make the XOR of All Segments Equal to Zero
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1787
---

[LeetCode problem 1787](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/)

```python
class Solution:
    def minChanges(self, nums: List[int], k: int) -> int:
        n = 1 << 10
        cnt = [Counter() for _ in range(k)]
        size = [0] * k
        for i, v in enumerate(nums):
            cnt[i % k][v] += 1
            size[i % k] += 1
        f = [inf] * n
        f[0] = 0
        for i in range(k):
            g = [min(f) + size[i]] * n
            for j in range(n):
                for v, c in cnt[i].items():
                    g[j] = min(g[j], f[j ^ v] + size[i] - c)
            f = g
        return f[0]

```
