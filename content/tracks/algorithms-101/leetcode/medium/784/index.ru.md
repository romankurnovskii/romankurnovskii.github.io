---
title: 784. Letter Case Permutation
seoTitle: LeetCode 784. Letter Case Permutation | Python solution and explanation
description: 784. Letter Case Permutation
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 784
---

[LeetCode problem 784](https://leetcode.com/problems/letter-case-permutation/)

```python
class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        res = []
        n = sum(c.isalpha() for c in s)
        for i in range(1 << n):
            j, t = 0, []
            for c in s:
                if c.isalpha():
                    c = c.lower() if (i >> j) & 1 else c.upper()
                    j += 1
                t.append(c)
            res.append(''.join(t))
        return res

```
