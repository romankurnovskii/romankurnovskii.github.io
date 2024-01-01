---
title: 1682. Longest Palindromic Subsequence II
seoTitle: LeetCode 1682. Longest Palindromic Subsequence II | Python solution and explanation
description: 1682. Longest Palindromic Subsequence II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1682
---

[LeetCode problem 1682](https://leetcode.com/problems/longest-palindromic-subsequence-ii/)

```python
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        @cache
        def dfs(i, j, x):
            if i >= j:
                return 0
            if s[i] == s[j] and s[i] != x:
                return dfs(i + 1, j - 1, s[i]) + 2
            return max(dfs(i + 1, j, x), dfs(i, j - 1, x))

        res = dfs(0, len(s) - 1, '')
        dfs.cache_clear()
        return res

```
