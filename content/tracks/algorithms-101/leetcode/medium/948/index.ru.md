---
title: 948. Bag of Tokens
seoTitle: LeetCode 948. Bag of Tokens | Python solution and explanation
description: Bag of Tokens
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 948
---

[LeetCode problem 948](https://leetcode.com/problems/bag-of-tokens/)

```python
class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
        tokens.sort()
        i, j = 0, len(tokens) - 1
        res = t = 0
        while i <= j:
            if power >= tokens[i]:
                power -= tokens[i]
                i, t = i + 1, t + 1
                res = max(res, t)
            elif t:
                power += tokens[j]
                j, t = j - 1, t - 1
            else:
                break
        return res
```
