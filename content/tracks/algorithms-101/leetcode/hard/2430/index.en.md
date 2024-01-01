---
title: 2430. Maximum Deletions on a String
seoTitle: LeetCode 2430. Maximum Deletions on a String | Python solution and explanation
description: 2430. Maximum Deletions on a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2430
---

[LeetCode problem 2430](https://leetcode.com/problems/maximum-deletions-on-a-string/)

```python
class Solution:
    def deleteString(self, s: str) -> int:
        n = len(s)
        g = [[0] * (n + 1) for _ in range(n + 1)]
        for i in range(n - 1, -1, -1):
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    g[i][j] = g[i + 1][j + 1] + 1

        f = [1] * n
        for i in range(n - 1, -1, -1):
            for j in range(1, (n - i) // 2 + 1):
                if g[i][i + j] >= j:
                    f[i] = max(f[i], f[i + j] + 1)
        return f[0]
```
