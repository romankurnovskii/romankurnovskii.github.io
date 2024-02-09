---
title: 2397. Maximum Rows Covered by Columns
seoTitle: LeetCode 2397. Maximum Rows Covered by Columns | Python solution and explanation
description: 2397. Maximum Rows Covered by Columns
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2397
---

[LeetCode problem 2397](https://leetcode.com/problems/maximum-rows-covered-by-columns/)

```python
class Solution:
    def maximumRows(self, matrix: List[List[int]], numSelect: int) -> int:
        rows = []
        for row in matrix:
            mask = reduce(or_, (1 << j for j, x in enumerate(row) if x), 0)
            rows.append(mask)

        res = 0
        for mask in range(1 << len(matrix[0])):
            if mask.bit_count() != numSelect:
                continue
            t = sum((x & mask) == x for x in rows)
            res = max(res, t)
        return res

```