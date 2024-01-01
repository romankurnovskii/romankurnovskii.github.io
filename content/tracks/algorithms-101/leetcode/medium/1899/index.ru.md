---
title: 1899. Merge Triplets to Form Target Triplet
seoTitle: LeetCode 1899. Merge Triplets to Form Target Triplet | Python solution and explanation
description: 1899. Merge Triplets to Form Target Triplet
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1899
---

[LeetCode problem 1899](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/)

```python
class Solution:
    def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:
        x, y, z = target
        d = e = f = 0
        for a, b, c in triplets:
            if a <= x and b <= y and c <= z:
                d = max(d, a)
                e = max(e, b)
                f = max(f, c)
        return [d, e, f] == target

```
