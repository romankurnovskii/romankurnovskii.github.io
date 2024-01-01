---
title: 1047. Remove All Adjacent Duplicates In String
seoTitle: LeetCode 1047. Remove All Adjacent Duplicates In String | Python solution and explanation
description: 1047. Remove All Adjacent Duplicates In String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1047
---

[LeetCode problem 1047](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)

```python
class Solution:
    def removeDuplicates(self, s: str) -> str:
        stk = []
        for c in s:
            if stk and stk[-1] == c:
                stk.pop()
            else:
                stk.append(c)
        return ''.join(stk)

```
