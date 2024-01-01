---
title: 1408. String Matching in an Array
seoTitle: LeetCode 1408. String Matching in an Array | Python solution and explanation
description: 1408. String Matching in an Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1408
---

[LeetCode problem 1408](https://leetcode.com/problems/string-matching-in-an-array/)

```python
class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        res = []
        for i, s in enumerate(words):
            if any(i != j and s in t for j, t in enumerate(words)):
                res.append(s)
        return res

```
