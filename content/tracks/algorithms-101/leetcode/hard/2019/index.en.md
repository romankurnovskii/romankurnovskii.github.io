---
title: 2019. The Score of Students Solving Math Expression
seoTitle: LeetCode 2019. The Score of Students Solving Math Expression | Python solution and explanation
description: 2019. The Score of Students Solving Math Expression
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2019
---

[LeetCode problem 2019](https://leetcode.com/problems/the-score-of-students-solving-math-expression/)

```python
class Solution:
    def scoreOfStudents(self, s: str, answers: List[int]) -> int:
        def cal(s: str) -> int:
            res, pre = 0, int(s[0])
            for i in range(1, n, 2):
                if s[i] == "*":
                    pre *= int(s[i + 1])
                else:
                    res += pre
                    pre = int(s[i + 1])
            res += pre
            return res

        n = len(s)
        x = cal(s)
        m = (n + 1) >> 1
        f = [[set() for _ in range(m)] for _ in range(m)]
        for i in range(m):
            f[i][i] = {int(s[i << 1])}
        for i in range(m - 1, -1, -1):
            for j in range(i, m):
                for k in range(i, j):
                    for l in f[i][k]:
                        for r in f[k + 1][j]:
                            if s[k << 1 | 1] == "+" and l + r <= 1000:
                                f[i][j].add(l + r)
                            elif s[k << 1 | 1] == "*" and l * r <= 1000:
                                f[i][j].add(l * r)
        cnt = Counter(answers)
        res = cnt[x] * 5
        for k, v in cnt.items():
            if k != x and k in f[0][m - 1]:
                res += v << 1
        return res

```
