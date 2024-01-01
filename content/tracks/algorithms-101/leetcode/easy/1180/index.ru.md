---
title: 1180. Count Substrings with Only One Distinct Letter
seoTitle: LeetCode 1180. Count Substrings with Only One Distinct Letter | Python solution and explanation
description: 1180. Count Substrings with Only One Distinct Letter
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1180
---

[LeetCode problem 1180](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/)

```python
class Solution:
    def countLetters(self, s: str) -> int:
        res = 0
        i, n = 0, len(s)
        while i < n:
            j = i
            cnt = 0
            while j < n and s[j] == s[i]:
                j += 1
                cnt += 1
                res += cnt
            i = j
        return res

```
