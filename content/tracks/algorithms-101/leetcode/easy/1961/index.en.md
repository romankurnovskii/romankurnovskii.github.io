---
title: 1961. Check If String Is a Prefix of Array
seoTitle: LeetCode 1961. Check If String Is a Prefix of Array | Python solution and explanation
description: 1961. Check If String Is a Prefix of Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1961
---

[LeetCode problem 1961](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/)

```python
class Solution:
    def isPrefixString(self, s: str, words: List[str]) -> bool:
        n, m = len(s), 0
        for i, w in enumerate(words):
            m += len(w)
            if m == n:
                return "".join(words[: i + 1]) == s
        return False

```
