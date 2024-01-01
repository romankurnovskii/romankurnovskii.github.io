---
title: 1722. Minimize Hamming Distance After Swap Operations
seoTitle: LeetCode 1722. Minimize Hamming Distance After Swap Operations | Python solution and explanation
description: 1722. Minimize Hamming Distance After Swap Operations
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1722
---

[LeetCode problem 1722](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/)

```python
class Solution:
    def minimumHammingDistance(
        self, source: List[int], target: List[int], allowedSwaps: List[List[int]]
    ) -> int:
        def find(x: int) -> int:
            if p[x] != x:
                p[x] = find(p[x])
            return p[x]

        n = len(source)
        p = list(range(n))
        for a, b in allowedSwaps:
            p[find(a)] = find(b)
        cnt = defaultdict(Counter)
        for i, x in enumerate(source):
            j = find(i)
            cnt[j][x] += 1
        res = 0
        for i, x in enumerate(target):
            j = find(i)
            cnt[j][x] -= 1
            res += cnt[j][x] < 0
        return res

```
