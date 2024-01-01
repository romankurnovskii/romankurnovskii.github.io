---
title: 1540. Can Convert String in K Moves
seoTitle: LeetCode 1540. Can Convert String in K Moves | Python solution and explanation
description: 1540. Can Convert String in K Moves
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1540
---

[LeetCode problem 1540](https://leetcode.com/problems/can-convert-string-in-k-moves/)

```python
class Solution:
    def canConvertString(self, s: str, t: str, k: int) -> bool:
        if len(s) != len(t):
            return False
        cnt = [0] * 26
        for a, b in zip(s, t):
            x = (ord(b) - ord(a) + 26) % 26
            cnt[x] += 1
        for i in range(1, 26):
            if i + 26 * (cnt[i] - 1) > k:
                return False
        return True

```
