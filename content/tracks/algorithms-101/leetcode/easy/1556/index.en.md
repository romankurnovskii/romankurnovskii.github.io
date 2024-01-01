---
title: 1556. Thousand Separator
seoTitle: LeetCode 1556. Thousand Separator | Python solution and explanation
description: 1556. Thousand Separator
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1556
---

[LeetCode problem 1556](https://leetcode.com/problems/thousand-separator/)

```python
class Solution:
    def thousandSeparator(self, n: int) -> str:
        cnt = 0
        res = []
        while 1:
            n, v = divmod(n, 10)
            res.append(str(v))
            cnt += 1
            if n == 0:
                break
            if cnt == 3:
                res.append('.')
                cnt = 0
        return ''.join(res[::-1])

```
