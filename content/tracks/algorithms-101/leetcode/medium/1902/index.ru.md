---
title: 1902. Depth of BST Given Insertion Order
seoTitle: LeetCode 1902. Depth of BST Given Insertion Order | Python solution and explanation
description: 1902. Depth of BST Given Insertion Order
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1902
---

[LeetCode problem 1902](https://leetcode.com/problems/depth-of-bst-given-insertion-order/)

```python
from sortedcontainers import SortedDict


class Solution:
    def maxDepthBST(self, order: List[int]) -> int:
        sd = SortedDict({0: 0, inf: 0, order[0]: 1})
        res = 1
        for v in order[1:]:
            lower = sd.bisect_left(v) - 1
            higher = lower + 1
            depth = 1 + max(sd.values()[lower], sd.values()[higher])
            res = max(res, depth)
            sd[v] = depth
        return res

```
