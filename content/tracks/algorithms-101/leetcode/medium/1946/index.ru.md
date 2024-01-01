---
title: 1946. Largest Number After Mutating Substring
seoTitle: LeetCode 1946. Largest Number After Mutating Substring | Python solution and explanation
description: 1946. Largest Number After Mutating Substring
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1946
---

[LeetCode problem 1946](https://leetcode.com/problems/largest-number-after-mutating-substring/)

```python
class Solution:
    def maximumNumber(self, num: str, change: List[int]) -> str:
        s = list(num)
        for i, c in enumerate(s):
            if change[int(c)] > int(c):
                while i < len(s) and int(s[i]) <= change[int(s[i])]:
                    s[i] = str(change[int(s[i])])
                    i += 1
                break
        return ''.join(s)

```
