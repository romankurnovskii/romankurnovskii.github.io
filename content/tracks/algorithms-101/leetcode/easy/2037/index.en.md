---
title: 2037. Minimum Number of Moves to Seat Everyone
seoTitle: LeetCode 2037. Minimum Number of Moves to Seat Everyone | Python solution and explanation
description: 2037. Minimum Number of Moves to Seat Everyone
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2037
---

[LeetCode problem 2037](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/)

```python
class Solution:
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        seats.sort()
        students.sort()
        return sum(abs(a - b) for a, b in zip(seats, students))

```
