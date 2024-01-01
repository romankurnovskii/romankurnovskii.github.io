---
title: 1943. Describe the Painting
seoTitle: LeetCode 1943. Describe the Painting | Python solution and explanation
description: 1943. Describe the Painting
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1943
---

[LeetCode problem 1943](https://leetcode.com/problems/describe-the-painting/)

```python
class Solution:
    def splitPainting(self, segments: List[List[int]]) -> List[List[int]]:
        d = defaultdict(int)
        for l, r, c in segments:
            d[l] += c
            d[r] -= c
        s = sorted([[k, v] for k, v in d.items()])
        n = len(s)
        for i in range(1, n):
            s[i][1] += s[i - 1][1]
        return [[s[i][0], s[i + 1][0], s[i][1]] for i in range(n - 1) if s[i][1]]

```
