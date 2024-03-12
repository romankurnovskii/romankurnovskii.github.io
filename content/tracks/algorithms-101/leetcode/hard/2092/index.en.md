---
title: 2092. Find All People With Secret
seoTitle: LeetCode 2092. Find All People With Secret | Python solution and explanation
description: 2092. Find All People With Secret
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2092
---

[LeetCode problem 2092](https://leetcode.com/problems/find-all-people-with-secret/)

```python
class Solution:
    def findAllPeople(self, n: int, meetings: List[List[int]], firstPerson: int) -> List[int]:
        vis = [False] * n
        vis[0] = vis[firstPerson] = True
        meetings.sort(key=lambda x: x[2])
        i, m = 0, len(meetings)
        while i < m:
            j = i
            while j + 1 < m and meetings[j + 1][2] == meetings[i][2]:
                j += 1
            s = set()
            g = defaultdict(list)
            for x, y, _ in meetings[i : j + 1]:
                g[x].append(y)
                g[y].append(x)
                s.update([x, y])
            q = deque([u for u in s if vis[u]])
            while q:
                u = q.popleft()
                for v in g[u]:
                    if not vis[v]:
                        vis[v] = True
                        q.append(v)
            i = j + 1
        return [i for i, v in enumerate(vis) if v]
```
