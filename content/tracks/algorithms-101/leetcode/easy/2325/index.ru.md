---
title: 2325. Decode the Message
seoTitle: LeetCode 2325. Decode the Message | Python solution and explanation
description: 2325. Decode the Message
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2325
---

[LeetCode problem 2325](https://leetcode.com/problems/decode-the-message/)

```python
class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        d = {" ": " "}
        i = 0
        for c in key:
            if c not in d:
                d[c] = ascii_lowercase[i]
                i += 1
        return "".join(d[c] for c in message)

```
