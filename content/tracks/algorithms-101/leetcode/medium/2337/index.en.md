---
title: 2337. Move Pieces to Obtain a String
seoTitle: LeetCode 2337. Move Pieces to Obtain a String | Python solution and explanation
description: 2337. Move Pieces to Obtain a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2337
---

[LeetCode problem 2337](https://leetcode.com/problems/move-pieces-to-obtain-a-string/)

```python
class Solution:
    def canChange(self, start: str, target: str) -> bool:
        n = len(start)
        i = j = 0
        while 1:
            while i < n and start[i] == '_':
                i += 1
            while j < n and target[j] == '_':
                j += 1
            if i >= n and j >= n:
                return True
            if i >= n or j >= n or start[i] != target[j]:
                return False
            if start[i] == 'L' and i < j:
                return False
            if start[i] == 'R' and i > j:
                return False
            i, j = i + 1, j + 1

```
