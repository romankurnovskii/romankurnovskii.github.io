---
title: 2052. Minimum Cost to Separate Sentence Into Rows
seoTitle: LeetCode 2052. Minimum Cost to Separate Sentence Into Rows | Python solution and explanation
description: 2052. Minimum Cost to Separate Sentence Into Rows
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2052
---

[LeetCode problem 2052](https://leetcode.com/problems/minimum-cost-to-separate-sentence-into-rows/)

```python
class Solution:
    def minimumCost(self, sentence: str, k: int) -> int:
        @cache
        def dfs(i):
            if s[-1] - s[i] + n - i - 1 <= k:
                return 0
            res, j = inf, i + 1
            while j < n and (t := s[j] - s[i] + j - i - 1) <= k:
                res = min(res, (k - t) ** 2 + dfs(j))
                j += 1
            return res

        t = [len(w) for w in sentence.split()]
        n = len(t)
        s = list(accumulate(t, initial=0))
        return dfs(0)

```
