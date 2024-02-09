---
title: 3016. Minimum Number of Pushes to Type Word II
seoTitle: LeetCode 3016. Minimum Number of Pushes to Type Word II | Python solution and explanation
description: 3016. Minimum Number of Pushes to Type Word II
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 3016
---

[LeetCode problem 3016](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii)

```python
class Solution:
    def minimumPushes(self, word: str) -> int:
        cnt = Counter(word)
        res = 0
        for i, x in enumerate(sorted(cnt.values(), reverse=True)):
            res += (i // 8 + 1) * x
        return res
```
