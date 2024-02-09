---
title: 1337. The K Weakest Rows in a Matrix
seoTitle: LeetCode 1337. The K Weakest Rows in a Matrix | Python solution and explanation
description: 1337. The K Weakest Rows in a Matrix
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1337
---

[LeetCode problem 1337](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix)

```python
class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        m, n = len(mat), len(mat[0])
        res = [n - bisect_right(row[::-1], 0) for row in mat]
        idx = list(range(m))
        idx.sort(key=lambda i: res[i])
        return idx[:k]
```
