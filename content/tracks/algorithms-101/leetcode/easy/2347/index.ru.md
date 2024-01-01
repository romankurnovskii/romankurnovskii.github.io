---
title: 2347. Best Poker Hand
seoTitle: LeetCode 2347. Best Poker Hand | Python solution and explanation
description: 2347. Best Poker Hand
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2347
---

[LeetCode problem 2347](https://leetcode.com/problems/best-poker-hand/)

```python
class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        # if len(set(suits)) == 1:
        if all(a == b for a, b in pairwise(suits)):
            return 'Flush'
        cnt = Counter(ranks)
        if any(v >= 3 for v in cnt.values()):
            return 'Three of a Kind'
        if any(v == 2 for v in cnt.values()):
            return 'Pair'
        return 'High Card'

```
