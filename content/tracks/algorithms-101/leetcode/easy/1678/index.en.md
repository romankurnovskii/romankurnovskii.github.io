---
title: 1678. Goal Parser Interpretation
seoTitle: LeetCode 1678. Goal Parser Interpretation | Python solution and explanation
description: 1678. Goal Parser Interpretation
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1678
---

[LeetCode problem 1678](https://leetcode.com/problems/goal-parser-interpretation/)

```python
class Solution:
    def interpret(self, command: str) -> str:
        res = []
        for i, c in enumerate(command):
            if c == 'G':
                res.append(c)
            elif c == '(':
                res.append('o' if command[i + 1] == ')' else 'al')
        return ''.join(res)

```
