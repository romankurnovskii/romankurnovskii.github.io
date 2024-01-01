---
title: 1535. Find the Winner of an Array Game
seoTitle: LeetCode 1535. Find the Winner of an Array Game | Python solution and explanation
description: 1535. Find the Winner of an Array Game
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1535
---

[LeetCode problem 1535](https://leetcode.com/problems/find-the-winner-of-an-array-game/)

```python
class Solution:
    def getWinner(self, arr: List[int], k: int) -> int:
        mx = arr[0]
        cnt = 0
        for x in arr[1:]:
            if mx < x:
                mx = x
                cnt = 1
            else:
                cnt += 1
            if cnt == k:
                break
        return mx

```
