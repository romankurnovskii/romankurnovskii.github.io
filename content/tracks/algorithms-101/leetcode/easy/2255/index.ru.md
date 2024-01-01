---
title: 2255. Count Prefixes of a Given String
seoTitle: LeetCode 2255. Count Prefixes of a Given String | Python solution and explanation
description: 2255. Count Prefixes of a Given String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2255
---

[LeetCode problem 2255](https://leetcode.com/problems/count-prefixes-of-a-given-string/)

```python
class Solution:
    def countPrefixes(self, words: List[str], s: str) -> int:
        return sum(s.startswith(w) for w in words)

```
