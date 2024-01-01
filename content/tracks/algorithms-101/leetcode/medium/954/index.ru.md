---
title: Array of Doubled Pairs
seoTitle: LeetCode Array of Doubled Pairs | Python solution and explanation
description: Array of Doubled Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 954
---

[LeetCode problem 954](https://leetcode.com/problems/array-of-doubled-pairs/)

```python
class Solution:
    def canReorderDoubled(self, arr: List[int]) -> bool:
        freq = Counter(arr)
        if freq[0] & 1:
            return False
        for x in sorted(freq, key=abs):
            if freq[x << 1] < freq[x]:
                return False
            freq[x << 1] -= freq[x]
        return True

```
