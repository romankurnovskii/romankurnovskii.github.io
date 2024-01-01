---
title: 1860. Incremental Memory Leak
seoTitle: LeetCode 1860. Incremental Memory Leak | Python solution and explanation
description: 1860. Incremental Memory Leak
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1860
---

[LeetCode problem 1860](https://leetcode.com/problems/incremental-memory-leak/)

```python
class Solution:
    def memLeak(self, memory1: int, memory2: int) -> List[int]:
        i = 1
        while i <= max(memory1, memory2):
            if memory1 >= memory2:
                memory1 -= i
            else:
                memory2 -= i
            i += 1
        return [i, memory1, memory2]

```
