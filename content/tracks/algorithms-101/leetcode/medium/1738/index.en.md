---
title: 1738. Find Kth Largest XOR Coordinate Value
seoTitle: LeetCode 1738. Find Kth Largest XOR Coordinate Value | Python solution and explanation
description: 1738. Find Kth Largest XOR Coordinate Value
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1738
---

[LeetCode problem 1738](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/)

```python
class Solution:
    def kthLargestValue(self, matrix: List[List[int]], k: int) -> int:
        m, n = len(matrix), len(matrix[0])
        s = [[0] * (n + 1) for _ in range(m + 1)]
        res = []
        for i in range(m):
            for j in range(n):
                s[i + 1][j + 1] = s[i + 1][j] ^ s[i][j + 1] ^ s[i][j] ^ matrix[i][j]
                res.append(s[i + 1][j + 1])
        return nlargest(k, res)[-1]

```
