---
title: 1598. Crawler Log Folder
seoTitle: LeetCode 1598. Crawler Log Folder | Python solution and explanation
description: 1598. Crawler Log Folder
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1598
---

[LeetCode problem 1598](https://leetcode.com/problems/crawler-log-folder/)

```python
class Solution:
    def minOperations(self, logs: List[str]) -> int:
        res = 0
        for v in logs:
            if v == "../":
                res = max(0, res - 1)
            elif v[0] != ".":
                res += 1
        return res

```
