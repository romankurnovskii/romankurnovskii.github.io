---
title: 2109. Adding Spaces to a String
seoTitle: LeetCode 2109. Adding Spaces to a String | Python solution and explanation
description: 2109. Adding Spaces to a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2109
---

[LeetCode problem 2109](https://leetcode.com/problems/adding-spaces-to-a-string/)

```python
class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        res = []
        i, j = len(s) - 1, len(spaces) - 1
        while i >= 0:
            res.append(s[i])
            if j >= 0 and i == spaces[j]:
                res.append(' ')
                j -= 1
            i -= 1
        return ''.join(res[::-1])

```
