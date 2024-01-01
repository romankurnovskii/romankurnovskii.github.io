---
title: 2326. Spiral Matrix IV
seoTitle: LeetCode 2326. Spiral Matrix IV | Python solution and explanation
description: 2326. Spiral Matrix IV
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2326
---

[LeetCode problem 2326](https://leetcode.com/problems/spiral-matrix-iv/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def spiralMatrix(self, m: int, n: int, head: Optional[ListNode]) -> List[List[int]]:
        res = [[-1] * n for _ in range(m)]
        i = j = p = 0
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        while 1:
            res[i][j] = head.val
            head = head.next
            if not head:
                break
            while 1:
                x, y = i + dirs[p][0], j + dirs[p][1]
                if x < 0 or y < 0 or x >= m or y >= n or ~res[x][y]:
                    p = (p + 1) % 4
                else:
                    i, j = x, y
                    break
        return res

```
