---
title: 1460. Make Two Arrays Equal by Reversing Subarrays
seoTitle: LeetCode 1460. Make Two Arrays Equal by Reversing Subarrays | Python solution and explanation
description: 1460. Make Two Arrays Equal by Reversing Subarrays
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1460
---

[LeetCode problem 1460](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/)

```python
class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        cnt = [0] * 1001
        for a, b in zip(target, arr):
            cnt[a] += 1
            cnt[b] -= 1
        return all(v == 0 for v in cnt)

```
