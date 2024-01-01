---
title: 1723. Find Minimum Time to Finish All Jobs
seoTitle: LeetCode 1723. Find Minimum Time to Finish All Jobs | Python solution and explanation
description: 1723. Find Minimum Time to Finish All Jobs
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1723
---

[LeetCode problem 1723](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/)

```python
class Solution:
    def minimumTimeRequired(self, jobs: List[int], k: int) -> int:
        def dfs(i):
            nonlocal res
            if i == len(jobs):
                res = min(res, max(cnt))
                return
            for j in range(k):
                if cnt[j] + jobs[i] >= res:
                    continue
                cnt[j] += jobs[i]
                dfs(i + 1)
                cnt[j] -= jobs[i]
                if cnt[j] == 0:
                    break

        cnt = [0] * k
        jobs.sort(reverse=True)
        res = inf
        dfs(0)
        return res

```
