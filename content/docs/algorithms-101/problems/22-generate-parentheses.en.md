---
title: 22. Generate Parentheses
description: LeetCode 22. Generate Parentheses
toc: false
authors: [roman-kurnovskii]
tags: [String, "Dynamic Programming", Backtracking]
categories: [Algorithms, Medium]
series:
date: 2022-11-16
featuredImage:
weight: 200
---

[LeetCode problem](https://leetcode.com/problems/generate-parentheses/)

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

**Example 1:**

    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]

**Example 2:**

    Input: n = 1
    Output: ["()"]


## Prerequirements

[Backtracking pattern](/en/docs/algorithms-101/algorithms/#backtracking)

## First accepted

**Idea:**

![test-case](../assets/22.jpg)

```python
class Solution:
  def generateParenthesis(self, n):
    ans = []

    def dfs(l: int, r: int, s: str) -> None:
      if l == 0 and r == 0:
        ans.append(s)
      if l > 0:
        dfs(l - 1, r, s + '(')
      if l < r:
        dfs(l, r - 1, s + ')')

    dfs(n, n, '')
    return ans
```
