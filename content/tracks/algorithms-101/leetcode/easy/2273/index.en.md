---
title: 2273. Find Resultant Array After Removing Anagrams
seoTitle: LeetCode 2273. Find Resultant Array After Removing Anagrams | Python solution and explanation
description: 2273. Find Resultant Array After Removing Anagrams
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2273
---

[LeetCode problem 2273](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/)

```python
class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        return [
            w
            for i, w in enumerate(words)
            if i == 0 or sorted(w) != sorted(words[i - 1])
        ]

```
