---
title: 1737. Change Minimum Characters to Satisfy One of Three Conditions
seoTitle: LeetCode 1737. Change Minimum Characters to Satisfy One of Three Conditions | Python solution and explanation
description: 1737. Change Minimum Characters to Satisfy One of Three Conditions
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1737
---

[LeetCode problem 1737](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/)

```python
class Solution:
    def minCharacters(self, a: str, b: str) -> int:
        def f(cnt1, cnt2):
            for i in range(1, 26):
                t = sum(cnt1[i:]) + sum(cnt2[:i])
                nonlocal res
                res = min(res, t)

        m, n = len(a), len(b)
        cnt1 = [0] * 26
        cnt2 = [0] * 26
        for c in a:
            cnt1[ord(c) - ord('a')] += 1
        for c in b:
            cnt2[ord(c) - ord('a')] += 1
        res = m + n
        for c1, c2 in zip(cnt1, cnt2):
            res = min(res, m + n - c1 - c2)
        f(cnt1, cnt2)
        f(cnt2, cnt1)
        return res

```
