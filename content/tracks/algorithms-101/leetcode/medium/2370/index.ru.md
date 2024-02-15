---
title: 2370. Longest Ideal Subsequence
seoTitle: LeetCode 2370. Longest Ideal Subsequence | Python solution and explanation
description: 2370. Longest Ideal Subsequence
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2370
---

[LeetCode problem 2370](https://leetcode.com/problems/longest-ideal-subsequence/)

```python
class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        n = len(s)
        res = 1
        dp = [1] * n
        d = {s[0]: 0}
        for i in range(1, n):
            a = ord(s[i])
            for b in ascii_lowercase:
                if abs(a - ord(b)) > k:
                    continue
                if b in d:
                    dp[i] = max(dp[i], dp[d[b]] + 1)
            d[s[i]] = i
        return max(dp)

```
