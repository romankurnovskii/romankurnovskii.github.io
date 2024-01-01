---
title: 2414. Length of the Longest Alphabetical Continuous Substring
seoTitle: LeetCode 2414. Length of the Longest Alphabetical Continuous Substring | Python solution and explanation
description: 2414. Length of the Longest Alphabetical Continuous Substring
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2414
---

[LeetCode problem 2414](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/)

```python
class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
        res = 0
        i, j = 0, 1
        while j < len(s):
            res = max(res, j - i)
            if ord(s[j]) - ord(s[j - 1]) != 1:
                i = j
            j += 1
        res = max(res, j - i)
        return res

```
