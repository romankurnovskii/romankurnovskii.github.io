---
title: 1720. Decode XORed Array
seoTitle: LeetCode 1720. Decode XORed Array | Python solution and explanation
description: 1720. Decode XORed Array
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1720
---

[LeetCode problem 1720](https://leetcode.com/problems/decode-xored-array/)

```python
class Solution:
    def decode(self, encoded: List[int], first: int) -> List[int]:
        res = [first]
        for e in encoded:
            res.append(res[-1] ^ e)
        return res

```
