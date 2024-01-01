---
title: 1781. Sum of Beauty of All Substrings
seoTitle: LeetCode 1781. Sum of Beauty of All Substrings | Python solution and explanation
description: 1781. Sum of Beauty of All Substrings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1781
---

[LeetCode problem 1781](https://leetcode.com/problems/sum-of-beauty-of-all-substrings/)

```python
class Solution:
    def beautySum(self, s: str) -> int:
        res, n = 0, len(s)
        for i in range(n):
            cnt = Counter()
            freq = Counter()
            mi = mx = 1
            for j in range(i, n):
                freq[cnt[s[j]]] -= 1
                cnt[s[j]] += 1
                freq[cnt[s[j]]] += 1

                if cnt[s[j]] == 1:
                    mi = 1
                if freq[mi] == 0:
                    mi += 1
                if cnt[s[j]] > mx:
                    mx = cnt[s[j]]

                res += mx - mi
        return res

```
