---
title: 1374. Generate a String With Characters That Have Odd Counts
seoTitle: LeetCode 1374. Generate a String With Characters That Have Odd Counts | Python solution and explanation
description: 1374. Generate a String With Characters That Have Odd Counts
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1374
---

[LeetCode problem 1374](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/)

```python
class Solution:
    def generateTheString(self, n: int) -> str:
        return 'a' * n if n & 1 else 'a' * (n - 1) + 'b'

```
