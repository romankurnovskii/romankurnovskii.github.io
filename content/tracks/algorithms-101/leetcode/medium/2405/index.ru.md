---
title: 2405. Optimal Partition of String
seoTitle: LeetCode 2405. Optimal Partition of String | Python solution and explanation
description: 2405. Optimal Partition of String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2405
---

[LeetCode problem 2405](https://leetcode.com/problems/optimal-partition-of-string/)

```python
class Solution:
    def partitionString(self, s: str) -> int:
        res, v = 1, 0
        for c in s:
            i = ord(c) - ord('a')
            if (v >> i) & 1:
                v = 0
                res += 1
            v |= 1 << i
        return res

```