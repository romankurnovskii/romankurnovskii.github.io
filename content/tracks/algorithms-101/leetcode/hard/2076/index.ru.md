---
title: 2076. Process Restricted Friend Requests
seoTitle: LeetCode 2076. Process Restricted Friend Requests | Python solution and explanation
description: 2076. Process Restricted Friend Requests
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2076
---

[LeetCode problem 2076](https://leetcode.com/problems/process-restricted-friend-requests/)

```python
class Solution:
    def friendRequests(
        self, n: int, restrictions: List[List[int]], requests: List[List[int]]
    ) -> List[bool]:
        p = list(range(n))

        def find(x):
            if p[x] != x:
                p[x] = find(p[x])
            return p[x]

        res = []
        i = 0
        for u, v in requests:
            if find(u) == find(v):
                res.append(True)
            else:
                valid = True
                for x, y in restrictions:
                    if (find(u) == find(x) and find(v) == find(y)) or (
                        find(u) == find(y) and find(v) == find(x)
                    ):
                        valid = False
                        break
                res.append(valid)
                if valid:
                    p[find(u)] = find(v)
        return res

```
