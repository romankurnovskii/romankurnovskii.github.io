---
title: 2287. Rearrange Characters to Make Target String
seoTitle: LeetCode 2287. Rearrange Characters to Make Target String | Python solution and explanation
description: 2287. Rearrange Characters to Make Target String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2287
---

[LeetCode problem 2287](https://leetcode.com/problems/rearrange-characters-to-make-target-string/)

```python
class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        cnt1 = Counter(s)
        cnt2 = Counter(target)
        return min(cnt1[c] // v for c, v in cnt2.items())

```
