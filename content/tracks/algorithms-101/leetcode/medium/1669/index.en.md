---
title: 1669. Merge In Between Linked Lists
seoTitle: LeetCode 1669. Merge In Between Linked Lists | Python solution and explanation
description: 1669. Merge In Between Linked Lists
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-03-20
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1669
---

[LeetCode problem 1669](https://leetcode.com/problems/merge-in-between-linked-lists/)

Traverse list1 to find the nodes right before a and right after b, and then connect these with list2.

## Idea

The key is to properly link the end of the first part of list1 (before a) with the head of list2, and then connect the tail of list2 with the remaining part of list1 (after b).
Use two pointers to navigate and find the exact positions for detachment and attachment.

## Approach

1. Traverse to a-1: Start from the head of list1 and move a-1 steps forward. This node will be the connecting point to the head of list2.
1. Traverse to b+1: From the a-1 position, move b-a+2 steps forward to reach the node after b. This node will be where we connect the tail of list2.
1. Detach and Attach: Detach list1 at a-1 and attach list2's head. Then, find the tail of list2 and attach the remaining part of list1.

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        dummy = ListNode(0)
        dummy.next = list1
        prev = dummy
        
        for _ in range(a):          # Traverse to a-1
            prev = prev.next
        
        tail = prev
        for _ in range(b - a + 2):  # Traverse to b+1
            tail = tail.next
        
        prev.next = list2  # Attach list2 to a-1
        while prev.next:    # Find the tail of list2 and attach the rest of list1
            prev = prev.next
        prev.next = tail
        
        return dummy.next
```
