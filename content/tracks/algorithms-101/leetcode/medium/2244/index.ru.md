---
title: 2244. Minimum Rounds to Complete All Tasks
seoTitle: LeetCode 2244. Minimum Rounds to Complete All Tasks | Python solution and explanation
description: 2244. Minimum Rounds to Complete All Tasks
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2244
---

[LeetCode problem 2244](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/)

```python
class Solution:
    def minimumRounds(self, tasks: List[int]) -> int:
        cnt = Counter(tasks)
        res = 0
        for v in cnt.values():
            if v == 1:
                return -1
            res += v // 3 + (v % 3 != 0)
        return res

```
