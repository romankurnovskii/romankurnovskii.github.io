---
title: 1641. Count Sorted Vowel Strings
seoTitle: LeetCode 1641. Count Sorted Vowel Strings | Python solution and explanation
description: 1641. Count Sorted Vowel Strings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1641
---

[LeetCode problem 1641](https://leetcode.com/problems/count-sorted-vowel-strings/)

```python
class Solution:
    def countVowelStrings(self, n: int) -> int:
        f = [1] * 5
        for _ in range(n - 1):
            s = 0
            for j in range(5):
                s += f[j]
                f[j] = s
        return sum(f)

```
