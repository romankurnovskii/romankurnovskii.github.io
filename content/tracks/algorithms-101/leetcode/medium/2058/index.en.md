---
title: 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
seoTitle: LeetCode 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points | Python solution and explanation
description: 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2058
---

[LeetCode problem 2058](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        prev, curr = head, head.next
        first = last = None
        i = 1
        res = [inf, -inf]
        while curr.next:
            if curr.val < min(prev.val, curr.next.val) or curr.val > max(
                prev.val, curr.next.val
            ):
                if last is None:
                    first = last = i
                else:
                    res[0] = min(res[0], i - last)
                    res[1] = i - first
                    last = i
            i += 1
            prev, curr = curr, curr.next
        return res if first != last else [-1, -1]

```
