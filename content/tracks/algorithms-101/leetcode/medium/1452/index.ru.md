---
title: 1452. People Whose List of Favorite Companies Is Not a Subset of Another List
seoTitle: LeetCode 1452. People Whose List of Favorite Companies Is Not a Subset of Another List | Python solution and explanation
description: 1452. People Whose List of Favorite Companies Is Not a Subset of Another List
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1452
---

[LeetCode problem 1452](https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/)

```python
class Solution:
    def peopleIndexes(self, favoriteCompanies: List[List[str]]) -> List[int]:
        d = {}
        idx = 0
        t = []
        for v in favoriteCompanies:
            for c in v:
                if c not in d:
                    d[c] = idx
                    idx += 1
            t.append({d[c] for c in v})
        res = []
        for i, nums1 in enumerate(t):
            ok = True
            for j, nums2 in enumerate(t):
                if i == j:
                    continue
                if not (nums1 - nums2):
                    ok = False
                    break
            if ok:
                res.append(i)
        return res

```
