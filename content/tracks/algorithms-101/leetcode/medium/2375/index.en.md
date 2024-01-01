---
title: 2375. Construct Smallest Number From DI String
seoTitle: LeetCode 2375. Construct Smallest Number From DI String | Python solution and explanation
description: 2375. Construct Smallest Number From DI String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2375
---

[LeetCode problem 2375](https://leetcode.com/problems/construct-smallest-number-from-di-string/)

```python
class Solution:
    def smallestNumber(self, pattern: str) -> str:
        def dfs(u):
            nonlocal res
            if res:
                return
            if u == len(pattern) + 1:
                res = ''.join(t)
                return
            for i in range(1, 10):
                if not vis[i]:
                    if u and pattern[u - 1] == 'I' and int(t[-1]) >= i:
                        continue
                    if u and pattern[u - 1] == 'D' and int(t[-1]) <= i:
                        continue
                    vis[i] = True
                    t.append(str(i))
                    dfs(u + 1)
                    vis[i] = False
                    t.pop()

        vis = [False] * 10
        t = []
        res = None
        dfs(0)
        return res

```
