---
title: Reveal Cards In Increasing Order
seoTitle: LeetCode Reveal Cards In Increasing Order | Python solution and explanation
description: Reveal Cards In Increasing Order
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 950
---

[LeetCode problem 950](https://leetcode.com/problems/reveal-cards-in-increasing-order/)

```python
class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        q = deque()
        for v in sorted(deck, reverse=True):
            if q:
                q.appendleft(q.pop())
            q.appendleft(v)
        return list(q)

```
