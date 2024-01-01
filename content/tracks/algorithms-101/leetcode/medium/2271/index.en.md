---
title: 2271. Maximum White Tiles Covered by a Carpet
seoTitle: LeetCode 2271. Maximum White Tiles Covered by a Carpet | Python solution and explanation
description: 2271. Maximum White Tiles Covered by a Carpet
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2271
---

[LeetCode problem 2271](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/)

```python
class Solution:
    def maximumWhiteTiles(self, tiles: List[List[int]], carpetLen: int) -> int:
        tiles.sort()
        n = len(tiles)
        s = res = j = 0
        for i, (li, ri) in enumerate(tiles):
            while j < n and tiles[j][1] - li + 1 <= carpetLen:
                s += tiles[j][1] - tiles[j][0] + 1
                j += 1
            if j < n and li + carpetLen > tiles[j][0]:
                res = max(res, s + li + carpetLen - tiles[j][0])
            else:
                res = max(res, s)
            s -= ri - li + 1
        return res

```
