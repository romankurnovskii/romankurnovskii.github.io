---
title: 792. Number of Matching Subsequences
seoTitle: LeetCode 792. Number of Matching Subsequences | Python solution and explanation
description: 792. Number of Matching Subsequences
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 792
---

[LeetCode problem 792](https://leetcode.com/problems/number-of-matching-subsequences/)

```python
class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        def check(w):
            i = -1
            for c in w:
                j = bisect_right(d[c], i)
                if j == len(d[c]):
                    return False
                i = d[c][j]
            return True

        d = defaultdict(list)
        for i, c in enumerate(s):
            d[c].append(i)
        return sum(check(w) for w in words)

```
