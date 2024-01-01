---
title: 1733. Minimum Number of People to Teach
seoTitle: LeetCode 1733. Minimum Number of People to Teach | Python solution and explanation
description: 1733. Minimum Number of People to Teach
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1733
---

[LeetCode problem 1733](https://leetcode.com/problems/minimum-number-of-people-to-teach/)

```python
class Solution:
    def minimumTeachings(
        self, n: int, languages: List[List[int]], friendships: List[List[int]]
    ) -> int:
        def check(u, v):
            for x in languages[u - 1]:
                for y in languages[v - 1]:
                    if x == y:
                        return True
            return False

        s = set()
        for u, v in friendships:
            if not check(u, v):
                s.add(u)
                s.add(v)
        cnt = Counter()
        for u in s:
            for l in languages[u - 1]:
                cnt[l] += 1
        return len(s) - max(cnt.values(), default=0)

```
