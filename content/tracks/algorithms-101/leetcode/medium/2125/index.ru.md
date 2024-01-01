---
title: 2125. Number of Laser Beams in a Bank
seoTitle: LeetCode 2125. Number of Laser Beams in a Bank | Python solution and explanation
description: 2125. Number of Laser Beams in a Bank
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2125
---

[LeetCode problem 2125](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/)

```python
class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        last = res = 0
        for b in bank:
            if (t := b.count('1')) > 0:
                res += last * t
                last = t
        return res

```
