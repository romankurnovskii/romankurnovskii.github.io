---
title: 1104. Path In Zigzag Labelled Binary Tree
seoTitle: LeetCode 1104. Path In Zigzag Labelled Binary Tree | Python solution and explanation
description: 1104. Path In Zigzag Labelled Binary Tree
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1104
---

[LeetCode problem 1104](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/)

```python
class Solution:
    def pathInZigZagTree(self, label: int) -> List[int]:
        x = i = 1
        while (x << 1) <= label:
            x <<= 1
            i += 1
        res = [0] * i
        while i:
            res[i - 1] = label
            label = ((1 << (i - 1)) + (1 << i) - 1 - label) >> 1
            i -= 1
        return res

```
