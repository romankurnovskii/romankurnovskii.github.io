---
title: 1982. Find Array Given Subset Sums
seoTitle: LeetCode 1982. Find Array Given Subset Sums | Python solution and explanation
description: 1982. Find Array Given Subset Sums
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1982
---

[LeetCode problem 1982](https://leetcode.com/problems/find-array-given-subset-sums/)

```python
class Solution:
    def recoverArray(self, n: int, sums: List[int]) -> List[int]:
        sums.sort()
        res = []
        for i in range(n, 0, -1):
            k = 1 << i
            d = sums[k - 1] - sums[k - 2]
            cnt = Counter(sums[:k])
            sums1, sums2 = [], []
            sign = 1
            for s in sums[:k]:
                if not cnt[s]:
                    continue
                cnt[s] -= 1
                cnt[s + d] -= 1
                sums1.append(s)
                sums2.append(s + d)
                if s + d == 0:
                    sign = -1
            res.append(sign * d)
            sums = sums1 if sign == 1 else sums2
        return res

```
