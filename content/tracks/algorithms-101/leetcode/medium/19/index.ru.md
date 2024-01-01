---
title: 19. Remove Nth Node From End of List
description: LeetCode 19. Remove Nth Node From End of List
toc: true
authors: [roman-kurnovskii]
tags: [Medium,  "Linked List", "Two Pointers", "LeetCode Top Interview"]
categories: [Algorithms, Medium]
series:
date: 2022-11-13
featuredImage:
weight: 19
---

[LeetCode problem 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list)

Given the 'head' of a linked list, remove the 'nth' node from the end of the list and return its head.

**Example 1:**

![LeetCode 19. Remove Nth Node From End of List](https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg)

    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]

**Example 2:**

    Input: head = [1], n = 1
    Output: []

**Idea:**

- Two pointers.
- Second pointer starts from `nth` position.
- Run while second pointer exist.

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
            p2 = p2.next  # fast

        if not p2:
            return head.next # in case: head=[1], n=1 -> return []

        while p2.next:
            p1 = p1.next
            p2 = p2.next

        p1.next = p1.next.next

        return head
```

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if not head.next:
            return None

        nodes = {}
        cur = head

        i = 0
        while cur:
            nodes[i] = cur
            cur = cur.next
            i += 1
        
        if i - n == 0:
            return head.next

        cur = nodes[i - n - 1]

        if cur.next:
            cur.next = cur.next.next
        return head
```
