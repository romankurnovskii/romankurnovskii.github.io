---
title: 1849. Splitting a String Into Descending Consecutive Values
seoTitle: LeetCode 1849. Splitting a String Into Descending Consecutive Values | Python solution and explanation
description: 1849. Splitting a String Into Descending Consecutive Values
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1849
---

[LeetCode problem 1849](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/)

```python
class Solution:
    def splitString(self, s: str) -> bool:
        def dfs(i, x, k):
            if i == len(s):
                return k > 1
            y = 0
            for j in range(i, len(s)):
                y = y * 10 + int(s[j])
                if (x == -1 or x - y == 1) and dfs(j + 1, y, k + 1):
                    return True
            return False

        return dfs(0, -1, 0)

```
