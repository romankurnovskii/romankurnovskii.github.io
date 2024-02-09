---
title: 2379. Minimum Recolors to Get K Consecutive Black Blocks
seoTitle: LeetCode 2379. Minimum Recolors to Get K Consecutive Black Blocks | Python solution and explanation
description: 2379. Minimum Recolors to Get K Consecutive Black Blocks
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2379
---

[LeetCode problem 2379](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/)

```python
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        res = cnt = blocks[:k].count('W')
        for i in range(k, len(blocks)):
            cnt += blocks[i] == 'W'
            cnt -= blocks[i - k] == 'W'
            res = min(res, cnt)
        return res

```