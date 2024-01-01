---
title: 1871. Jump Game VII
seoTitle: LeetCode 1871. Jump Game VII | Python solution and explanation
description: 1871. Jump Game VII
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1871
---

[LeetCode problem 1871](https://leetcode.com/problems/jump-game-vii/)

```python
class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        n = len(s)
        pre = [0] * (n + 1)
        pre[1] = 1
        f = [True] + [False] * (n - 1)
        for i in range(1, n):
            if s[i] == "0":
                l, r = max(0, i - maxJump), i - minJump
                f[i] = l <= r and pre[r + 1] - pre[l] > 0
            pre[i + 1] = pre[i] + f[i]
        return f[-1]

```
