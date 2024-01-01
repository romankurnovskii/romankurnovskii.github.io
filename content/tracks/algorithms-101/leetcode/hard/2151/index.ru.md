---
title: 2151. Maximum Good People Based on Statements
seoTitle: LeetCode 2151. Maximum Good People Based on Statements | Python solution and explanation
description: 2151. Maximum Good People Based on Statements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2151
---

[LeetCode problem 2151](https://leetcode.com/problems/maximum-good-people-based-on-statements/)

```python
class Solution:
    def maximumGood(self, statements: List[List[int]]) -> int:
        def check(mask):
            cnt = 0
            for i, s in enumerate(statements):
                if (mask >> i) & 1:
                    for j, v in enumerate(s):
                        if v < 2 and ((mask >> j) & 1) != v:
                            return 0
                    cnt += 1
            return cnt

        return max(check(mask) for mask in range(1, 1 << len(statements)))

```
