---
title: 1593. Split a String Into the Max Number of Unique Substrings
seoTitle: LeetCode 1593. Split a String Into the Max Number of Unique Substrings | Python solution and explanation
description: 1593. Split a String Into the Max Number of Unique Substrings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1593
---

[LeetCode problem 1593](https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/)

```python
class Solution:
    def maxUniqueSplit(self, s: str) -> int:
        def dfs(i, t):
            if i >= len(s):
                nonlocal res
                res = max(res, t)
                return
            for j in range(i + 1, len(s) + 1):
                if s[i:j] not in vis:
                    vis.add(s[i:j])
                    dfs(j, t + 1)
                    vis.remove(s[i:j])

        vis = set()
        res = 1
        dfs(0, 0)
        return res

```
