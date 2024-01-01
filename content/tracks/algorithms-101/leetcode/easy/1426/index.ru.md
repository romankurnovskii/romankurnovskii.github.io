---
title: 1426. Counting Elements
seoTitle: LeetCode 1426. Counting Elements | Python solution and explanation
description: 1426. Counting Elements
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1426
---

[LeetCode problem 1426](https://leetcode.com/problems/counting-elements/)

```python
class Solution:
    def countElements(self, arr: List[int]) -> int:
        cnt = Counter(arr)
        return sum(v for x, v in cnt.items() if cnt[x + 1])

```
