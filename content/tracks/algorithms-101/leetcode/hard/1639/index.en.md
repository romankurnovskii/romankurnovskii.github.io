---
title: 1639. Number of Ways to Form a Target String Given a Dictionary
seoTitle: LeetCode 1639. Number of Ways to Form a Target String Given a Dictionary | Python solution and explanation
description: 1639. Number of Ways to Form a Target String Given a Dictionary
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1639
---

[LeetCode problem 1639](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/)

```python
class Solution:
    def numWays(self, words: List[str], target: str) -> int:
        m, n = len(target), len(words[0])
        cnt = [[0] * 26 for _ in range(n)]
        for w in words:
            for j, c in enumerate(w):
                cnt[j][ord(c) - ord('a')] += 1
        mod = 10**9 + 7
        f = [[0] * (n + 1) for _ in range(m + 1)]
        f[0] = [1] * (n + 1)
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                f[i][j] = (
                    f[i][j - 1]
                    + f[i - 1][j - 1] * cnt[j - 1][ord(target[i - 1]) - ord('a')]
                )
                f[i][j] %= mod
        return f[m][n]

```
