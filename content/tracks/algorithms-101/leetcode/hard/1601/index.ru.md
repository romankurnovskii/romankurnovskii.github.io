---
title: 1601. Maximum Number of Achievable Transfer Requests
seoTitle: LeetCode 1601. Maximum Number of Achievable Transfer Requests | Python solution and explanation
description: 1601. Maximum Number of Achievable Transfer Requests
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1601
---

[LeetCode problem 1601](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)

```python
class Solution:
    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:
        def check(mask: int) -> bool:
            cnt = [0] * n
            for i, (f, t) in enumerate(requests):
                if mask >> i & 1:
                    cnt[f] -= 1
                    cnt[t] += 1
            return all(v == 0 for v in cnt)

        res = 0
        for mask in range(1 << len(requests)):
            cnt = mask.bit_count()
            if res < cnt and check(mask):
                res = cnt
        return res

```
