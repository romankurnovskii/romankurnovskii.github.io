---
title: 1614. Maximum Nesting Depth of the Parentheses
seoTitle: LeetCode 1614. Maximum Nesting Depth of the Parentheses | Python solution and explanation
description: 1614. Maximum Nesting Depth of the Parentheses
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1614
---

[LeetCode problem 1614](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/)

```python
class Solution:
    def maxDepth(self, s: str) -> int:
        res = d = 0
        for c in s:
            if c == '(':
                d += 1
                res = max(res, d)
            elif c == ')':
                d -= 1
        return res

```
