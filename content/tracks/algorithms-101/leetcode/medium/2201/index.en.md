---
title: 2201. Count Artifacts That Can Be Extracted
seoTitle: LeetCode 2201. Count Artifacts That Can Be Extracted | Python solution and explanation
description: 2201. Count Artifacts That Can Be Extracted
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2201
---

[LeetCode problem 2201](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/)

```python
class Solution:
    def digArtifacts(
        self, n: int, artifacts: List[List[int]], dig: List[List[int]]
    ) -> int:
        def check(a: List[int]) -> bool:
            x1, y1, x2, y2 = a
            return all(
                (x, y) in s for x in range(x1, x2 + 1) for y in range(y1, y2 + 1)
            )

        s = {(i, j) for i, j in dig}
        return sum(check(a) for a in artifacts)

```
