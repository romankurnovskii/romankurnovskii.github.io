---
title: 2231. Largest Number After Digit Swaps by Parity
seoTitle: LeetCode 2231. Largest Number After Digit Swaps by Parity | Python solution and explanation
description: 2231. Largest Number After Digit Swaps by Parity
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2231
---

[LeetCode problem 2231](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/)

```python
class Solution:
    def largestInteger(self, num: int) -> int:
        cnt = Counter()
        x = num
        while x:
            x, v = divmod(x, 10)
            cnt[v] += 1
        x = num
        res = 0
        t = 1
        while x:
            x, v = divmod(x, 10)
            for y in range(10):
                if ((v ^ y) & 1) == 0 and cnt[y]:
                    res += y * t
                    t *= 10
                    cnt[y] -= 1
                    break
        return res

```
