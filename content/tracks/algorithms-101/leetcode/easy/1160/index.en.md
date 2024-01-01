---
title: 1160. Find Words That Can Be Formed by Characters
seoTitle: LeetCode 1160. Find Words That Can Be Formed by Characters | Python solution and explanation
description: 1160. Find Words That Can Be Formed by Characters
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1160
---

[LeetCode problem 1160](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)

```python
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        cnt = Counter(chars)
        res = 0
        for w in words:
            wc = Counter(w)
            if all(cnt[c] >= v for c, v in wc.items()):
                res += len(w)
        return res

```
