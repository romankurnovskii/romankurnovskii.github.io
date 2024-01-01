---
title: 2064. Minimized Maximum of Products Distributed to Any Store
seoTitle: LeetCode 2064. Minimized Maximum of Products Distributed to Any Store | Python solution and explanation
description: 2064. Minimized Maximum of Products Distributed to Any Store
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2064
---

[LeetCode problem 2064](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/)

```python
class Solution:
    def minimizedMaximum(self, n: int, quantities: List[int]) -> int:
        def check(x):
            return sum((v + x - 1) // x for v in quantities) <= n

        return 1 + bisect_left(range(1, 10**6), True, key=check)

```
