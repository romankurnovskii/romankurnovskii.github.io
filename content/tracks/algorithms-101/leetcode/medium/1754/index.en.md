---
title: 1754. Largest Merge Of Two Strings
seoTitle: LeetCode 1754. Largest Merge Of Two Strings | Python solution and explanation
description: 1754. Largest Merge Of Two Strings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1754
---

[LeetCode problem 1754](https://leetcode.com/problems/largest-merge-of-two-strings/)

```python
class Solution:
    def largestMerge(self, word1: str, word2: str) -> str:
        i = j = 0
        res = []
        while i < len(word1) and j < len(word2):
            if word1[i:] > word2[j:]:
                res.append(word1[i])
                i += 1
            else:
                res.append(word2[j])
                j += 1
        res.append(word1[i:])
        res.append(word2[j:])
        return "".join(res)

```
