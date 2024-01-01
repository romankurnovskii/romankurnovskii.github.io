---
title: 1189. Maximum Number of Balloons
seoTitle: LeetCode 1189. Maximum Number of Balloons | Python solution and explanation
description: 1189. Maximum Number of Balloons
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1189
---

[LeetCode problem 1189](https://leetcode.com/problems/maximum-number-of-balloons/)

```python
class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        cnt = Counter(text)
        cnt['o'] >>= 1
        cnt['l'] >>= 1
        return min(cnt[c] for c in 'balon')

```
