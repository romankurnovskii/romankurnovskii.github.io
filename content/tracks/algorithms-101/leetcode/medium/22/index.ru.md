---
title: 22. Generate Parentheses
seoTitle: LeetCode 22. Generate Parentheses | Python solution and explanation
description: 22. Generate Parentheses
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 22
---

[LeetCode problem 22](https://leetcode.com/problems/generate-parentheses/)

```python
class Solution:
  def generateParenthesis(self, n):
    res = []

    def dfs(l: int, r: int, s: str) -> None:
      if l == 0 and r == 0:
        res.append(s)
      if l > 0:
        dfs(l - 1, r, s + '(')
      if l < r:
        dfs(l, r - 1, s + ')')

    dfs(n, n, '')
    return res
```
