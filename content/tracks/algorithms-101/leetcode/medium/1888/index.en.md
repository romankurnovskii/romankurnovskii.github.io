---
title: 1888. Minimum Number of Flips to Make the Binary String Alternating
seoTitle: LeetCode 1888. Minimum Number of Flips to Make the Binary String Alternating | Python solution and explanation
description: 1888. Minimum Number of Flips to Make the Binary String Alternating
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1888
---

[LeetCode problem 1888](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/)

```python
class Solution:
    def minFlips(self, s: str) -> int:
        n = len(s)
        target = "01"
        cnt = sum(c != target[i & 1] for i, c in enumerate(s))
        res = min(cnt, n - cnt)
        for i in range(n):
            cnt -= s[i] != target[i & 1]
            cnt += s[i] != target[(i + n) & 1]
            res = min(res, cnt, n - cnt)
        return res

```
