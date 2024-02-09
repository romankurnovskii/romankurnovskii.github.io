---
title: 19. Remove Nth Node From End of List
seoTitle: LeetCode 19. Remove Nth Node From End of List | Python solution and explanation
description: 19. Remove Nth Node From End of List
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 19
---

[LeetCode problem 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head, n: int):
        p1 = head
        p2 = head

        for _ in range(n):
            p1 = p1.next

        if not p1:
            return head.next # in case: head=[1], n=1 -> return []

        while p1.next:
            p1 = p1.next
            p2 = p2.next

        p2.next = p2.next.next

        return head
```
