---
title: 1758. Minimum Changes To Make Alternating Binary String
seoTitle: LeetCode 1758. Minimum Changes To Make Alternating Binary String | Python solution and explanation
description: 1758. Minimum Changes To Make Alternating Binary String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1758
---

[LeetCode problem 1758](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/)

```python
class Solution:
    def minOperations(self, s: str) -> int:
        cnt = sum(c != '01'[i & 1] for i, c in enumerate(s))
        return min(cnt, len(s) - cnt)

```
