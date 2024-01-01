---
title: 1962. Remove Stones to Minimize the Total
seoTitle: LeetCode 1962. Remove Stones to Minimize the Total | Python solution and explanation
description: 1962. Remove Stones to Minimize the Total
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1962
---

[LeetCode problem 1962](https://leetcode.com/problems/remove-stones-to-minimize-the-total/)

```python
class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        pq = [-x for x in piles]
        heapify(pq)
        for _ in range(k):
            heapreplace(pq, pq[0] // 2)
        return -sum(pq)

```
