---
title: 1773. Count Items Matching a Rule
seoTitle: LeetCode 1773. Count Items Matching a Rule | Python solution and explanation
description: 1773. Count Items Matching a Rule
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1773
---

[LeetCode problem 1773](https://leetcode.com/problems/count-items-matching-a-rule/)

```python
class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        i = 0 if ruleKey[0] == 't' else (1 if ruleKey[0] == 'c' else 2)
        return sum(v[i] == ruleValue for v in items)

```
