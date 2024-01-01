---
title: 2127. Maximum Employees to Be Invited to a Meeting
seoTitle: LeetCode 2127. Maximum Employees to Be Invited to a Meeting | Python solution and explanation
description: 2127. Maximum Employees to Be Invited to a Meeting
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2127
---

[LeetCode problem 2127](https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/)

```python
class Solution:
    def maximumInvitations(self, favorite: List[int]) -> int:
        def max_cycle(fa: List[int]) -> int:
            n = len(fa)
            vis = [False] * n
            res = 0
            for i in range(n):
                if vis[i]:
                    continue
                cycle = []
                j = i
                while not vis[j]:
                    cycle.append(j)
                    vis[j] = True
                    j = fa[j]
                for k, v in enumerate(cycle):
                    if v == j:
                        res = max(res, len(cycle) - k)
                        break
            return res

        def topological_sort(fa: List[int]) -> int:
            n = len(fa)
            indeg = [0] * n
            dist = [1] * n
            for v in fa:
                indeg[v] += 1
            q = deque(i for i, v in enumerate(indeg) if v == 0)
            while q:
                i = q.popleft()
                dist[fa[i]] = max(dist[fa[i]], dist[i] + 1)
                indeg[fa[i]] -= 1
                if indeg[fa[i]] == 0:
                    q.append(fa[i])
            return sum(dist[i] for i, v in enumerate(fa) if i == fa[fa[i]])

        return max(max_cycle(favorite), topological_sort(favorite))

```
