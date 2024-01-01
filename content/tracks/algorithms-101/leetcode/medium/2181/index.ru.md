---
title: 2181. Merge Nodes in Between Zeros
seoTitle: LeetCode 2181. Merge Nodes in Between Zeros | Python solution and explanation
description: 2181. Merge Nodes in Between Zeros
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2181
---

[LeetCode problem 2181](https://leetcode.com/problems/merge-nodes-in-between-zeros/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = tail = ListNode()
        s = 0
        cur = head.next
        while cur:
            if cur.val != 0:
                s += cur.val
            else:
                tail.next = ListNode(s)
                tail = tail.next
                s = 0
            cur = cur.next
        return dummy.next

```
