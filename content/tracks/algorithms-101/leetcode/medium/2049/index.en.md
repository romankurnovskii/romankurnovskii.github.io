---
title: 2049. Count Nodes With the Highest Score
seoTitle: LeetCode 2049. Count Nodes With the Highest Score | Python solution and explanation
description: 2049. Count Nodes With the Highest Score
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2049
---

[LeetCode problem 2049](https://leetcode.com/problems/count-nodes-with-the-highest-score/)

```python
class Solution:
    def countHighestScoreNodes(self, parents: List[int]) -> int:
        def dfs(i: int, fa: int):
            cnt = score = 1
            for j in g[i]:
                if j != fa:
                    t = dfs(j, i)
                    score *= t
                    cnt += t
            if n - cnt:
                score *= n - cnt
            nonlocal res, mx
            if mx < score:
                mx = score
                res = 1
            elif mx == score:
                res += 1
            return cnt

        n = len(parents)
        g = [[] for _ in range(n)]
        for i in range(1, n):
            g[parents[i]].append(i)
        res = mx = 0
        dfs(0, -1)
        return res

```
