---
title: 1915. Number of Wonderful Substrings
seoTitle: LeetCode 1915. Number of Wonderful Substrings | Python solution and explanation
description: 1915. Number of Wonderful Substrings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1915
---

[LeetCode problem 1915](https://leetcode.com/problems/number-of-wonderful-substrings/)

```python
class Solution:
    def wonderfulSubstrings(self, word: str) -> int:
        cnt = Counter({0: 1})
        res = st = 0
        for c in word:
            st ^= 1 << (ord(c) - ord("a"))
            res += cnt[st]
            for i in range(10):
                res += cnt[st ^ (1 << i)]
            cnt[st] += 1
        return res

```
