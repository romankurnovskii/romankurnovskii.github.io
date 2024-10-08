---
title: 160. Intersection of Two Linked Lists
seoTitle: 160. Intersection of Two Linked Lists | Python Solution and Explanation
description: Finding the intersection of two singly linked lists.
toc: true
authors:
tags: 
categories: [Algorithms, Easy]
date: 2023-06-05
lastMod: 2023-06-05
featuredImage: https://picsum.photos/700/241?grayscale
series: [LeetCode Top Interview Questions]
weight: 160
---


[LeetCode problem](https://leetcode.com/problems/intersection-of-two-linked-lists/)

## Solution 1

Using hashmap.

```python
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode):
        nodes = set()

        cur = headA
        while cur:
            nodes.add(cur)
            cur = cur.next

        cur = headB
        while cur:
            if cur in nodes:
                return cur
            cur = cur.next

        return None
```

## Solution 2

1. Initialize two pointers, one for each head.
2. Move each pointer to the next node in its list.
3. If a pointer reaches the end of its list, move it to the start of the other list.
4. Repeat steps 2 and 3 until the two pointers meet, or until both pointers have switched lists and reached the end (meaning there is no intersection).

The key insight is that by switching lists when a pointer reaches the end, each pointer traverses the same total number of nodes. This means they must meet at the intersection if one exists.

```python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode):
        pointerA, pointerB = headA, headB

        # Continue until the pointers meet
        while pointerA != pointerB:
            # Move each pointer to the next node, 
            # or to the start of the other list if it reached the end
            pointerA = pointerA.next if pointerA else headB
            pointerB = pointerB.next if pointerB else headA

        # Return the intersecting node, or None if there is no intersection
        return pointerA
```

It may seem like the loop could run forever because it continues until the two pointers meet and each pointer is always moved forward (to the next node or to the start of the other list).

If the two linked lists intersect, then from the point of intersection, they **share the same nodes until the end**. The two pointers will meet at the intersection point because when each pointer has traversed its own list once and then the other list, they have both traversed exactly the **same number of nodes in total** (the length of list A plus the length of list B). So, they must meet at the intersection point if one exists.

If the linked lists do not intersect, the pointers will both reach the end of the other list after traversing both lists. They'll be both set to `None`, and the loop condition `pointerA != pointerB` will fail, terminating the loop.

So, regardless of whether the linked lists intersect, the loop will eventually terminate. This is why the solution has a time complexity of `O(m + n)`, where `m` and `n` are the lengths of the two linked lists.
