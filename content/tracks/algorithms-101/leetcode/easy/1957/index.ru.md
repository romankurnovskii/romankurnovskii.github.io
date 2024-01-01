---
title: 1957. Delete Characters to Make Fancy String
seoTitle: LeetCode 1957. Delete Characters to Make Fancy String | Python solution and explanation
description: 1957. Delete Characters to Make Fancy String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1957
---

[LeetCode problem 1957](https://leetcode.com/problems/delete-characters-to-make-fancy-string/)

```python
class Solution:
    def makeFancyString(self, s: str) -> str:
        res = []
        for c in s:
            if len(res) > 1 and res[-1] == res[-2] == c:
                continue
            res.append(c)
        return ''.join(res)

```
