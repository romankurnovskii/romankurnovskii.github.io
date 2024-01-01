---
title: 1823. Find the Winner of the Circular Game
seoTitle: LeetCode 1823. Find the Winner of the Circular Game | Python solution and explanation
description: 1823. Find the Winner of the Circular Game
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1823
---

[LeetCode problem 1823](https://leetcode.com/problems/find-the-winner-of-the-circular-game/)

```python
class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        if n == 1:
            return 1
        res = (k + self.findTheWinner(n - 1, k)) % n
        return n if res == 0 else res

```
