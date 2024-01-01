---
title: 1461. Check If a String Contains All Binary Codes of Size K
seoTitle: LeetCode 1461. Check If a String Contains All Binary Codes of Size K | Python solution and explanation
description: 1461. Check If a String Contains All Binary Codes of Size K
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1461
---

[LeetCode problem 1461](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/)

```python
class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        if len(s) - k + 1 < (1 << k):
            return False
        vis = [False] * (1 << k)
        num = int(s[:k], 2)
        vis[num] = True
        for i in range(k, len(s)):
            a = (ord(s[i - k]) - ord('0')) << (k - 1)
            b = ord(s[i]) - ord('0')
            num = ((num - a) << 1) + b
            vis[num] = True
        return all(v for v in vis)

```
