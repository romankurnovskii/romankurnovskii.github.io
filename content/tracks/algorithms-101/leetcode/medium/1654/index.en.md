---
title: 1654. Minimum Jumps to Reach Home
seoTitle: LeetCode 1654. Minimum Jumps to Reach Home | Python solution and explanation
description: 1654. Minimum Jumps to Reach Home
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1654
---

[LeetCode problem 1654](https://leetcode.com/problems/minimum-jumps-to-reach-home/)

```python
class Solution:
    def minimumJumps(self, forbidden: List[int], a: int, b: int, x: int) -> int:
        s = set(forbidden)
        q = deque([(0, 1)])
        vis = {(0, 1)}
        res = 0
        while q:
            for _ in range(len(q)):
                i, k = q.popleft()
                if i == x:
                    return res
                nxt = [(i + a, 1)]
                if k & 1:
                    nxt.append((i - b, 0))
                for j, k in nxt:
                    if 0 <= j < 6000 and j not in s and (j, k) not in vis:
                        q.append((j, k))
                        vis.add((j, k))
            res += 1
        return -1

```
