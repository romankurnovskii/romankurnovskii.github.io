---
title: 141. Linked List Cycle
seoTitle: LeetCode 141. Linked List Cycle | Python solution and explanation
description: This article offers a deep dive into solving the 141. Linked List Cycle problem on LeetCode.
toc: true
categories: [Algorithms, Easy]
date: 2023-05-24
lastMod: 2023-09-05
featuredImage: https://picsum.photos/700/241?grayscale
series: [LeetCode Top Interview Questions]
weight: 141
---

[LeetCode problem 141](https://leetcode.com/problems/linked-list-cycle/)

## Problem Statement

The problem asks us to determine if a given linked list contains a cycle. A cycle in a linked list occurs when a node's `next` pointer points back to a previous node in the list, causing an infinite loop.

## Hints & Tips

In this problem, you can take advantage of the Floyd's "Tortoise and Hare" cycle detection algorithm. This algorithm allows you to detect a cycle in O(1) space and O(n) time complexity, where n is the number of nodes.

## Approach

1. Use two pointers, slow and fast. Initially, point them to the head of the linked list.
2. Move the slow pointer one step at a time, and the fast pointer two steps at a time.
3. If there's a cycle, the fast pointer will eventually catch up to the slow pointer. If not, the fast pointer will reach the end of the list (`None`).

- **Step 1:** Initialize `slow = head` and `fast = head`.
- **Step 2:** Move `slow` one step and `fast` two steps in a loop.
- **Step 3:** If `fast` and `slow` meet at any point, return `True`. If `fast` reaches the end, return `False`.

## Solution | Pointers

Here's the Python code for this algorithm, commented for clarity:

```python
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def hasCycle(head: ListNode) -> bool:
    # Initialize slow and fast pointers to head
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next        # Move slow one step
        fast = fast.next.next   # Move fast two steps
        
        if slow == fast:
            return True

    return False
```

## Solution | Visited

```python
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        visited = set()
        cur = head
        while cur:
            if cur.next in visited:
                return True
            cur = cur.next
            visited.add(cur)
        return False
```
