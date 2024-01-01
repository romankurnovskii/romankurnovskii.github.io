---
title: 1974. Minimum Time to Type Word Using Special Typewriter
seoTitle: LeetCode 1974. Minimum Time to Type Word Using Special Typewriter | Python solution and explanation
description: 1974. Minimum Time to Type Word Using Special Typewriter
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1974
---

[LeetCode problem 1974](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/)

```python
class Solution:
    def minTimeToType(self, word: str) -> int:
        res = prev = 0
        for c in word:
            curr = ord(c) - ord('a')
            t = abs(prev - curr)
            t = min(t, 26 - t)
            res += t + 1
            prev = curr
        return res

```
