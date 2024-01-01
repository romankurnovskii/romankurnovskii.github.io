---
title: 2050. Parallel Courses III
seoTitle: LeetCode 2050. Parallel Courses III | Python solution and explanation
description: 2050. Parallel Courses III
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2050
---

[LeetCode problem 2050](https://leetcode.com/problems/parallel-courses-iii/)

```python
class Solution:
    def minimumTime(self, n: int, relations: List[List[int]], time: List[int]) -> int:
        g = defaultdict(list)
        indeg = [0] * n
        for a, b in relations:
            g[a - 1].append(b - 1)
            indeg[b - 1] += 1
        q = deque()
        f = [0] * n
        res = 0
        for i, (v, t) in enumerate(zip(indeg, time)):
            if v == 0:
                q.append(i)
                f[i] = t
                res = max(res, t)
        while q:
            i = q.popleft()
            for j in g[i]:
                f[j] = max(f[j], f[i] + time[j])
                res = max(res, f[j])
                indeg[j] -= 1
                if indeg[j] == 0:
                    q.append(j)
        return res

```
