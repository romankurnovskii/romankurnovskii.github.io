---
title: 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
seoTitle: LeetCode 1111. Maximum Nesting Depth of Two Valid Parentheses Strings | Python solution and explanation
description: 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1111
---

[LeetCode problem 1111](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/)

```python
class Solution:
    def maxDepthAfterSplit(self, seq: str) -> List[int]:
        res = [0] * len(seq)
        x = 0
        for i, c in enumerate(seq):
            if c == "(":
                res[i] = x & 1
                x += 1
            else:
                x -= 1
                res[i] = x & 1
        return res

```
