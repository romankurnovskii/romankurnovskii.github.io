---
title: 1690. Stone Game VII
seoTitle: LeetCode 1690. Stone Game VII | Python solution and explanation
description: 1690. Stone Game VII
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1690
---

[LeetCode problem 1690](https://leetcode.com/problems/stone-game-vii/)

```python
class Solution:
    def stoneGameVII(self, stones: List[int]) -> int:
        s = list(accumulate(stones, initial=0))
        n = len(stones)
        f = [[0] * n for _ in range(n)]
        for i in range(n - 2, -1, -1):
            for j in range(i + 1, n):
                a = s[j + 1] - s[i + 1] - f[i + 1][j]
                b = s[j] - s[i] - f[i][j - 1]
                f[i][j] = max(a, b)
        return f[0][-1]

```
