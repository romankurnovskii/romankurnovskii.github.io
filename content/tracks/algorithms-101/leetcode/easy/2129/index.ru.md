---
title: 2129. Capitalize the Title
seoTitle: LeetCode 2129. Capitalize the Title | Python solution and explanation
description: 2129. Capitalize the Title
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2129
---

[LeetCode problem 2129](https://leetcode.com/problems/capitalize-the-title/)

```python
class Solution:
    def capitalizeTitle(self, title: str) -> str:
        words = [w.lower() if len(w) < 3 else w.capitalize() for w in title.split()]
        return " ".join(words)

```
