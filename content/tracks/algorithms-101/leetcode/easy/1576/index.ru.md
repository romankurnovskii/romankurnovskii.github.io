---
title: 1576. Replace All 's to Avoid Consecutive Repeating Characters
seoTitle: LeetCode 1576. Replace All 's to Avoid Consecutive Repeating Characters | Python solution and explanation
description: 1576. Replace All 's to Avoid Consecutive Repeating Characters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1576
---

[LeetCode problem 1576](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/)

```python
class Solution:
    def modifyString(self, s: str) -> str:
        s = list(s)
        n = len(s)
        for i in range(n):
            if s[i] == "?":
                for c in "abc":
                    if (i and s[i - 1] == c) or (i + 1 < n and s[i + 1] == c):
                        continue
                    s[i] = c
                    break
        return "".join(s)

```
