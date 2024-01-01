---
title: 1370. Increasing Decreasing String
seoTitle: LeetCode 1370. Increasing Decreasing String | Python solution and explanation
description: 1370. Increasing Decreasing String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1370
---

[LeetCode problem 1370](https://leetcode.com/problems/increasing-decreasing-string/)

```python
class Solution:
    def sortString(self, s: str) -> str:
        cnt = Counter(s)
        cs = ascii_lowercase + ascii_lowercase[::-1]
        res = []
        while len(res) < len(s):
            for c in cs:
                if cnt[c]:
                    res.append(c)
                    cnt[c] -= 1
        return "".join(res)

```
