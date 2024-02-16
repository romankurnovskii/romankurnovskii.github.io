---
title: 779. K-th Symbol in Grammar
seoTitle: LeetCode 779. K-th Symbol in Grammar | Python solution and explanation
description: 779. K-th Symbol in Grammar
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 779
---

[LeetCode problem 779](https://leetcode.com/problems/k-th-symbol-in-grammar/)

```python
class Solution:
    def kthGrammar(self, n: int, k: int) -> int:
        return (k - 1).bit_count() & 1

```
