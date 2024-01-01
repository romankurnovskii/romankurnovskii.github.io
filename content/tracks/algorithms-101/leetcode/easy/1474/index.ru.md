---
title: 1474. Delete N Nodes After M Nodes of a Linked List
seoTitle: LeetCode 1474. Delete N Nodes After M Nodes of a Linked List | Python solution and explanation
description: 1474. Delete N Nodes After M Nodes of a Linked List
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1474
---

[LeetCode problem 1474](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteNodes(self, head: ListNode, m: int, n: int) -> ListNode:
        pre = head
        while pre:
            for _ in range(m - 1):
                if pre:
                    pre = pre.next
            if pre is None:
                return head
            cur = pre
            for _ in range(n):
                if cur:
                    cur = cur.next
            pre.next = None if cur is None else cur.next
            pre = pre.next
        return head

```
