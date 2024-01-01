---
title: 1953. Maximum Number of Weeks for Which You Can Work
seoTitle: LeetCode 1953. Maximum Number of Weeks for Which You Can Work | Python solution and explanation
description: 1953. Maximum Number of Weeks for Which You Can Work
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1953
---

[LeetCode problem 1953](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/)

```python
class Solution:
    def numberOfWeeks(self, milestones: List[int]) -> int:
        mx, s = max(milestones), sum(milestones)
        rest = s - mx
        return rest * 2 + 1 if mx > rest + 1 else s

```
