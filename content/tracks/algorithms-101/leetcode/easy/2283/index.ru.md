---
title: 2283. Check if Number Has Equal Digit Count and Digit Value
seoTitle: LeetCode 2283. Check if Number Has Equal Digit Count and Digit Value | Python solution and explanation
description: 2283. Check if Number Has Equal Digit Count and Digit Value
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2283
---

[LeetCode problem 2283](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/)

```python
class Solution:
    def digitCount(self, num: str) -> bool:
        cnt = Counter(num)
        return all(cnt[str(i)] == int(v) for i, v in enumerate(num))

```