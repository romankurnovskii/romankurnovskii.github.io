---
title: 2301. Match Substring After Replacement
seoTitle: LeetCode 2301. Match Substring After Replacement | Python solution and explanation
description: 2301. Match Substring After Replacement
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2301
---

[LeetCode problem 2301](https://leetcode.com/problems/match-substring-after-replacement/)

```python
class Solution:
    def matchReplacement(self, s: str, sub: str, mappings: List[List[str]]) -> bool:
        d = [[False] * 128 for _ in range(128)]
        for a, b in mappings:
            d[ord(a)][ord(b)] = True
        for i in range(len(s) - len(sub) + 1):
            if all(
                a == b or d[ord(b)][ord(a)] for a, b in zip(s[i : i + len(sub)], sub)
            ):
                return True
        return False

```
