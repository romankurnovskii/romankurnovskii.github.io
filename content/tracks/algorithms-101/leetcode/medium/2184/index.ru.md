---
title: 2184. Number of Ways to Build Sturdy Brick Wall
seoTitle: LeetCode 2184. Number of Ways to Build Sturdy Brick Wall | Python solution and explanation
description: 2184. Number of Ways to Build Sturdy Brick Wall
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2184
---

[LeetCode problem 2184](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/)

```python
class Solution:
    def buildWall(self, height: int, width: int, bricks: List[int]) -> int:
        def dfs(v):
            if v > width:
                return
            if v == width:
                s.append(t[:])
                return
            for x in bricks:
                t.append(x)
                dfs(v + x)
                t.pop()

        def check(a, b):
            s1, s2 = a[0], b[0]
            i = j = 1
            while i < len(a) and j < len(b):
                if s1 == s2:
                    return False
                if s1 < s2:
                    s1 += a[i]
                    i += 1
                else:
                    s2 += b[j]
                    j += 1
            return True

        mod = 10**9 + 7
        s = []
        t = []
        dfs(0)
        g = defaultdict(list)
        n = len(s)
        for i in range(n):
            if check(s[i], s[i]):
                g[i].append(i)
            for j in range(i + 1, n):
                if check(s[i], s[j]):
                    g[i].append(j)
                    g[j].append(i)
        dp = [[0] * n for _ in range(height)]
        for j in range(n):
            dp[0][j] = 1
        for i in range(1, height):
            for j in range(n):
                for k in g[j]:
                    dp[i][j] += dp[i - 1][k]
                    dp[i][j] %= mod
        return sum(dp[-1]) % mod

```
