---
title: 2046. Sort Linked List Already Sorted Using Absolute Values
seoTitle: LeetCode 2046. Sort Linked List Already Sorted Using Absolute Values | Python solution and explanation
description: 2046. Sort Linked List Already Sorted Using Absolute Values
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2046
---

[LeetCode problem 2046](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortLinkedList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = head, head.next
        while curr:
            if curr.val < 0:
                t = curr.next
                prev.next = t
                curr.next = head
                head = curr
                curr = t
            else:
                prev, curr = curr, curr.next
        return head

```
