---
title: 1898. Maximum Number of Removable Characters
seoTitle: LeetCode 1898. Maximum Number of Removable Characters | Python solution and explanation
description: 1898. Maximum Number of Removable Characters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1898
---

[LeetCode problem 1898](https://leetcode.com/problems/maximum-number-of-removable-characters/)

```python
class Solution:
    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:
        def check(k):
            i = j = 0
            ids = set(removable[:k])
            while i < m and j < n:
                if i not in ids and s[i] == p[j]:
                    j += 1
                i += 1
            return j == n

        m, n = len(s), len(p)
        left, right = 0, len(removable)
        while left < right:
            mid = (left + right + 1) >> 1
            if check(mid):
                left = mid
            else:
                right = mid - 1
        return left

```
