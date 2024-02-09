---
title: 2363. Merge Similar Items
seoTitle: LeetCode 2363. Merge Similar Items | Python solution and explanation
description: 2363. Merge Similar Items
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2363
---

[LeetCode problem 2363](https://leetcode.com/problems/merge-similar-items/)

```python
class Solution:
    def mergeSimilarItems(
        self, items1: List[List[int]], items2: List[List[int]]
    ) -> List[List[int]]:
        cnt = Counter()
        for v, w in chain(items1, items2):
            cnt[v] += w
        return sorted(cnt.items())

```