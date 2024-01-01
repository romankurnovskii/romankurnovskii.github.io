---
title: 2161. Partition Array According to Given Pivot
seoTitle: LeetCode 2161. Partition Array According to Given Pivot | Python solution and explanation
description: 2161. Partition Array According to Given Pivot
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2161
---

[LeetCode problem 2161](https://leetcode.com/problems/partition-array-according-to-given-pivot/)

```python
class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        a, b, c = [], [], []
        for x in nums:
            if x < pivot:
                a.append(x)
            elif x == pivot:
                b.append(x)
            else:
                c.append(x)
        return a + b + c

```
