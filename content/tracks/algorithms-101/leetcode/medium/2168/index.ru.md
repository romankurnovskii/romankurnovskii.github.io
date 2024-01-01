---
title: 2168. Unique Substrings With Equal Digit Frequency
seoTitle: LeetCode 2168. Unique Substrings With Equal Digit Frequency | Python solution and explanation
description: 2168. Unique Substrings With Equal Digit Frequency
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2168
---

[LeetCode problem 2168](https://leetcode.com/problems/unique-substrings-with-equal-digit-frequency/)

```python
class Solution:
    def equalDigitFrequency(self, s: str) -> int:
        def check(i, j):
            v = set()
            for k in range(10):
                cnt = presum[j + 1][k] - presum[i][k]
                if cnt > 0:
                    v.add(cnt)
                if len(v) > 1:
                    return False
            return True

        n = len(s)
        presum = [[0] * 10 for _ in range(n + 1)]
        for i, c in enumerate(s):
            presum[i + 1][int(c)] += 1
            for j in range(10):
                presum[i + 1][j] += presum[i][j]
        vis = set(s[i : j + 1] for i in range(n) for j in range(i, n) if check(i, j))
        return len(vis)

```
