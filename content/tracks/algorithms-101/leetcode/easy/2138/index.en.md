---
title: 2138. Divide a String Into Groups of Size k
seoTitle: LeetCode 2138. Divide a String Into Groups of Size k | Python solution and explanation
description: 2138. Divide a String Into Groups of Size k
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2138
---

[LeetCode problem 2138](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/)

```python
class Solution:
    def divideString(self, s: str, k: int, fill: str) -> List[str]:
        return [s[i : i + k].ljust(k, fill) for i in range(0, len(s), k)]

```
