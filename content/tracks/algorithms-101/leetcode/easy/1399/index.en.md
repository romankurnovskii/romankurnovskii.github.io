---
title: 1399. Count Largest Group
seoTitle: LeetCode 1399. Count Largest Group | Python solution and explanation
description: 1399. Count Largest Group
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1399
---

[LeetCode problem 1399](https://leetcode.com/problems/count-largest-group/)

```python
class Solution:
    def countLargestGroup(self, n: int) -> int:
        cnt = Counter()
        res = mx = 0
        for i in range(1, n + 1):
            s = 0
            while i:
                s += i % 10
                i //= 10
            cnt[s] += 1
            if mx < cnt[s]:
                mx = cnt[s]
                res = 1
            elif mx == cnt[s]:
                res += 1
        return res

```
