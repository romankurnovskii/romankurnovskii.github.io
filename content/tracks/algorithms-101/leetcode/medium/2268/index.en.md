---
title: 2268. Minimum Number of Keypresses
seoTitle: LeetCode 2268. Minimum Number of Keypresses | Python solution and explanation
description: 2268. Minimum Number of Keypresses
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2268
---

[LeetCode problem 2268](https://leetcode.com/problems/minimum-number-of-keypresses/)

```python
class Solution:
    def minimumKeypresses(self, s: str) -> int:
        cnt = Counter(s)
        res = 0
        i, j = 0, 1
        for v in sorted(cnt.values(), reverse=True):
            i += 1
            res += j * v
            if i % 9 == 0:
                j += 1
        return res

```
