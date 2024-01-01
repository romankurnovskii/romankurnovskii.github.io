---
title: 1528. Shuffle String
seoTitle: LeetCode 1528. Shuffle String | Python solution and explanation
description: 1528. Shuffle String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1528
---

[LeetCode problem 1528](https://leetcode.com/problems/shuffle-string/)

```python
class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        res = [0] * len(s)
        for i, c in enumerate(s):
            res[indices[i]] = c
        return ''.join(res)

```
