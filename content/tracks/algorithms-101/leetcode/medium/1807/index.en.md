---
title: 1807. Evaluate the Bracket Pairs of a String
seoTitle: LeetCode 1807. Evaluate the Bracket Pairs of a String | Python solution and explanation
description: 1807. Evaluate the Bracket Pairs of a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1807
---

[LeetCode problem 1807](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/)

```python
class Solution:
    def evaluate(self, s: str, knowledge: List[List[str]]) -> str:
        d = {a: b for a, b in knowledge}
        i, n = 0, len(s)
        res = []
        while i < n:
            if s[i] == '(':
                j = s.find(')', i + 1)
                res.append(d.get(s[i + 1 : j], '?'))
                i = j
            else:
                res.append(s[i])
            i += 1
        return ''.join(res)

```
