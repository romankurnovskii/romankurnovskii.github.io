---
title: 1545. Find Kth Bit in Nth Binary String
seoTitle: LeetCode 1545. Find Kth Bit in Nth Binary String | Python solution and explanation
description: 1545. Find Kth Bit in Nth Binary String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1545
---

[LeetCode problem 1545](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/)

```python
class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        def dfs(n: int, k: int) -> int:
            if k == 1:
                return 0
            if (k & (k - 1)) == 0:
                return 1
            m = 1 << n
            if k * 2 < m - 1:
                return dfs(n - 1, k)
            return dfs(n - 1, m - k) ^ 1

        return str(dfs(n, k))

```
