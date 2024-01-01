---
title: 2327. Number of People Aware of a Secret
seoTitle: LeetCode 2327. Number of People Aware of a Secret | Python solution and explanation
description: 2327. Number of People Aware of a Secret
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2327
---

[LeetCode problem 2327](https://leetcode.com/problems/number-of-people-aware-of-a-secret/)

```python
class Solution:
    def peopleAwareOfSecret(self, n: int, delay: int, forget: int) -> int:
        m = (n << 1) + 10
        d = [0] * m
        cnt = [0] * m
        cnt[1] = 1
        for i in range(1, n + 1):
            if cnt[i]:
                d[i] += cnt[i]
                d[i + forget] -= cnt[i]
                nxt = i + delay
                while nxt < i + forget:
                    cnt[nxt] += cnt[i]
                    nxt += 1
        mod = 10**9 + 7
        return sum(d[: n + 1]) % mod

```
