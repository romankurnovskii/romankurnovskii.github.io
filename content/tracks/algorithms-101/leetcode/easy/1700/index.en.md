---
title: 1700. Number of Students Unable to Eat Lunch
seoTitle: LeetCode 1700. Number of Students Unable to Eat Lunch | Python solution and explanation
description: 1700. Number of Students Unable to Eat Lunch
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1700
---

[LeetCode problem 1700](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/)

```python
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        cnt = Counter(students)
        for v in sandwiches:
            if cnt[v] == 0:
                return cnt[v ^ 1]
            cnt[v] -= 1
        return 0

```
