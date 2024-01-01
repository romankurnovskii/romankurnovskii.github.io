---
title: 1051. Height Checker
seoTitle: LeetCode 1051. Height Checker | Python solution and explanation
description: 1051. Height Checker
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1051
---

[LeetCode problem 1051](https://leetcode.com/problems/height-checker/)

```python
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        cnt = [0] * 101
        for h in heights:
            cnt[h] += 1
        res = i = 0
        for j in range(1, 101):
            while cnt[j]:
                cnt[j] -= 1
                if heights[i] != j:
                    res += 1
                i += 1
        return res

```
