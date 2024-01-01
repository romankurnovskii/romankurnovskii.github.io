---
title: 2186. Minimum Number of Steps to Make Two Strings Anagram II
seoTitle: LeetCode 2186. Minimum Number of Steps to Make Two Strings Anagram II | Python solution and explanation
description: 2186. Minimum Number of Steps to Make Two Strings Anagram II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2186
---

[LeetCode problem 2186](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/)

```python
class Solution:
    def minSteps(self, s: str, t: str) -> int:
        cnt = Counter(s)
        for c in t:
            cnt[c] -= 1
        return sum(abs(v) for v in cnt.values())

```
