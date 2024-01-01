---
title: 2232. Minimize Result by Adding Parentheses to Expression
seoTitle: LeetCode 2232. Minimize Result by Adding Parentheses to Expression | Python solution and explanation
description: 2232. Minimize Result by Adding Parentheses to Expression
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2232
---

[LeetCode problem 2232](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/)

```python
class Solution:
    def minimizeResult(self, expression: str) -> str:
        l, r = expression.split("+")
        m, n = len(l), len(r)
        mi = inf
        res = None
        for i in range(m):
            for j in range(n):
                c = int(l[i:]) + int(r[: j + 1])
                a = 1 if i == 0 else int(l[:i])
                b = 1 if j == n - 1 else int(r[j + 1 :])
                if (t := a * b * c) < mi:
                    mi = t
                    res = f"{l[:i]}({l[i:]}+{r[: j + 1]}){r[j + 1:]}"
        return res

```
