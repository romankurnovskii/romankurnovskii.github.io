---
title: 1128. Number of Equivalent Domino Pairs
seoTitle: LeetCode 1128. Number of Equivalent Domino Pairs | Python solution and explanation
description: 1128. Number of Equivalent Domino Pairs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1128
---

[LeetCode problem 1128](https://leetcode.com/problems/number-of-equivalent-domino-pairs/)

```python
class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        cnt = Counter()
        res = 0
        for a, b in dominoes:
            x = a * 10 + b if a < b else b * 10 + a
            res += cnt[x]
            cnt[x] += 1
        return res

```
