---
title: 2101. Detonate the Maximum Bombs
seoTitle: LeetCode 2101. Detonate the Maximum Bombs | Python solution and explanation
description: 2101. Detonate the Maximum Bombs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2101
---

[LeetCode problem 2101](https://leetcode.com/problems/detonate-the-maximum-bombs/)

```python
class Solution:
    def maximumDetonation(self, bombs: List[List[int]]) -> int:
        def check(i, j):
            if i == j:
                return False
            x, y = bombs[i][0] - bombs[j][0], bombs[i][1] - bombs[j][1]
            r = bombs[i][2]
            return r * r >= x * x + y * y

        g = defaultdict(list)
        n = len(bombs)
        for i in range(n):
            for j in range(n):
                if check(i, j):
                    g[i].append(j)
        res = 0
        for k in range(n):
            q = deque([k])
            vis = [False] * n
            vis[k] = True
            cnt = 0
            while q:
                i = q.popleft()
                cnt += 1
                for j in g[i]:
                    if not vis[j]:
                        vis[j] = True
                        q.append(j)
            res = max(res, cnt)
        return res

```
