---
title: 1653. Minimum Deletions to Make String Balanced
seoTitle: LeetCode 1653. Minimum Deletions to Make String Balanced | Python solution and explanation
description: 1653. Minimum Deletions to Make String Balanced
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1653
---

[LeetCode problem 1653](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/)

```python
class Solution:
    def minimumDeletions(self, s: str) -> int:
        lb, ra = 0, s.count('a')
        res = len(s)
        for c in s:
            ra -= c == 'a'
            res = min(res, lb + ra)
            lb += c == 'b'
        return res

```
