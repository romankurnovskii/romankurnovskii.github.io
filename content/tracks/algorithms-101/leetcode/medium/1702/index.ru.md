---
title: 1702. Maximum Binary String After Change
seoTitle: LeetCode 1702. Maximum Binary String After Change | Python solution and explanation
description: 1702. Maximum Binary String After Change
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1702
---

[LeetCode problem 1702](https://leetcode.com/problems/maximum-binary-string-after-change/)

```python
class Solution:
    def maximumBinaryString(self, binary: str) -> str:
        k = binary.find('0')
        if k == -1:
            return binary
        k += binary[k + 1 :].count('0')
        return '1' * k + '0' + '1' * (len(binary) - k - 1)

```
