---
title: 2071. Maximum Number of Tasks You Can Assign
seoTitle: LeetCode 2071. Maximum Number of Tasks You Can Assign | Python solution and explanation
description: 2071. Maximum Number of Tasks You Can Assign
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2071
---

[LeetCode problem 2071](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)

```python
class Solution:
    def maxTaskAssign(
        self, tasks: List[int], workers: List[int], pills: int, strength: int
    ) -> int:
        def check(x):
            i = 0
            q = deque()
            p = pills
            for j in range(m - x, m):
                while i < x and tasks[i] <= workers[j] + strength:
                    q.append(tasks[i])
                    i += 1
                if not q:
                    return False
                if q[0] <= workers[j]:
                    q.popleft()
                elif p == 0:
                    return False
                else:
                    p -= 1
                    q.pop()
            return True

        n, m = len(tasks), len(workers)
        tasks.sort()
        workers.sort()
        left, right = 0, min(n, m)
        while left < right:
            mid = (left + right + 1) >> 1
            if check(mid):
                left = mid
            else:
                right = mid - 1
        return left

```
