---
title: 1771. Maximize Palindrome Length From Subsequences
seoTitle: LeetCode 1771. Maximize Palindrome Length From Subsequences | Python solution and explanation
description: 1771. Maximize Palindrome Length From Subsequences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1771
---

[LeetCode problem 1771](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/)

```python
class Solution:
    def longestPalindrome(self, word1: str, word2: str) -> int:
        s = word1 + word2
        n = len(s)
        f = [[0] * n for _ in range(n)]
        for i in range(n):
            f[i][i] = 1
        res = 0
        for i in range(n - 2, -1, -1):
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    f[i][j] = f[i + 1][j - 1] + 2
                    if i < len(word1) <= j:
                        res = max(res, f[i][j])
                else:
                    f[i][j] = max(f[i + 1][j], f[i][j - 1])
        return res

```
