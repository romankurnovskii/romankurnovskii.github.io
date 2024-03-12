---
title: 791. Custom Sort String
seoTitle: LeetCode Custom Sort String | Python solution and explanation
description: Custom Sort String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 791
---

[LeetCode problem 791](https://leetcode.com/problems/custom-sort-string/)

```python
class Solution:
    def customSortString(self, order: str, s: str) -> str:
        cnt = Counter(s)
        res = []
        for c in order:
            res.append(c * cnt[c])
            cnt[c] = 0
        for c, v in cnt.items():
            res.append(c * v)
        return ''.join(res)

```
