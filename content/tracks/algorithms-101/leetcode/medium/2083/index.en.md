---
title: 2083. Substrings That Begin and End With the Same Letter
seoTitle: LeetCode 2083. Substrings That Begin and End With the Same Letter | Python solution and explanation
description: 2083. Substrings That Begin and End With the Same Letter
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2083
---

[LeetCode problem 2083](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/)

```python
class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        cnt = Counter()
        res = 0
        for c in s:
            cnt[c] += 1
            res += cnt[c]
        return res

```
