---
title: 1525. Number of Good Ways to Split a String
seoTitle: LeetCode 1525. Number of Good Ways to Split a String | Python solution and explanation
description: 1525. Number of Good Ways to Split a String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1525
---

[LeetCode problem 1525](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/)

```python
class Solution:
    def numSplits(self, s: str) -> int:
        cnt = Counter(s)
        vis = set()
        res = 0
        for c in s:
            vis.add(c)
            cnt[c] -= 1
            if cnt[c] == 0:
                cnt.pop(c)
            res += len(vis) == len(cnt)
        return res

```
