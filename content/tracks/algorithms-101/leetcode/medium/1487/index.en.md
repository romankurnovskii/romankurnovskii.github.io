---
title: 1487. Making File Names Unique
seoTitle: LeetCode 1487. Making File Names Unique | Python solution and explanation
description: 1487. Making File Names Unique
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1487
---

[LeetCode problem 1487](https://leetcode.com/problems/making-file-names-unique/)

```python
class Solution:
    def getFolderNames(self, names: List[str]) -> List[str]:
        d = defaultdict(int)
        for i, name in enumerate(names):
            if name in d:
                k = d[name]
                while f'{name}({k})' in d:
                    k += 1
                d[name] = k + 1
                names[i] = f'{name}({k})'
            d[names[i]] = 1
        return names

```
