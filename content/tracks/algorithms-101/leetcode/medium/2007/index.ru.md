---
title: 2007. Find Original Array From Doubled Array
seoTitle: LeetCode 2007. Find Original Array From Doubled Array | Python solution and explanation
description: 2007. Find Original Array From Doubled Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2007
---

[LeetCode problem 2007](https://leetcode.com/problems/find-original-array-from-doubled-array/)

```python
class Solution:
    def findOriginalArray(self, changed: List[int]) -> List[int]:
        n = len(changed)
        if n & 1:
            return []
        cnt = Counter(changed)
        changed.sort()
        res = []
        for x in changed:
            if cnt[x] == 0:
                continue
            if cnt[x * 2] <= 0:
                return []
            res.append(x)
            cnt[x] -= 1
            cnt[x * 2] -= 1
        return res if len(res) == n // 2 else []

```
