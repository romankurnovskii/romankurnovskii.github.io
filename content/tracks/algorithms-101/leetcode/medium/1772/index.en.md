---
title: 1772. Sort Features by Popularity
seoTitle: LeetCode 1772. Sort Features by Popularity | Python solution and explanation
description: 1772. Sort Features by Popularity
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1772
---

[LeetCode problem 1772](https://leetcode.com/problems/sort-features-by-popularity/)

```python
class Solution:
    def sortFeatures(self, features: List[str], responses: List[str]) -> List[str]:
        cnt = Counter()
        for s in responses:
            for w in set(s.split()):
                cnt[w] += 1
        return sorted(features, key=lambda w: -cnt[w])

```
