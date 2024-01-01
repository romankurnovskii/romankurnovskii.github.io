---
title: 1652. Defuse the Bomb
seoTitle: LeetCode 1652. Defuse the Bomb | Python solution and explanation
description: 1652. Defuse the Bomb
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1652
---

[LeetCode problem 1652](https://leetcode.com/problems/defuse-the-bomb/)

```python
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        res = [0] * n
        if k == 0:
            return res
        s = list(accumulate(code + code, initial=0))
        for i in range(n):
            if k > 0:
                res[i] = s[i + k + 1] - s[i + 1]
            else:
                res[i] = s[i + n] - s[i + k + n]
        return res

```
