---
title: 2165. Smallest Value of the Rearranged Number
seoTitle: LeetCode 2165. Smallest Value of the Rearranged Number | Python solution and explanation
description: 2165. Smallest Value of the Rearranged Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2165
---

[LeetCode problem 2165](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/)

```python
class Solution:
    def smallestNumber(self, num: int) -> int:
        if num == 0:
            return 0
        cnt = [0] * 10
        neg = num < 0
        num = abs(num)
        while num:
            num, v = divmod(num, 10)
            cnt[v] += 1
        res = ""
        if neg:
            for i in range(9, -1, -1):
                if cnt[i]:
                    res += str(i) * cnt[i]
            return -int(res)
        if cnt[0]:
            for i in range(1, 10):
                if cnt[i]:
                    res += str(i)
                    cnt[i] -= 1
                    break
        for i in range(10):
            if cnt[i]:
                res += str(i) * cnt[i]
        return int(res)

```
