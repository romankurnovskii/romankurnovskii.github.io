---
title: 206. Reverse Linked List
seoTitle: LeetCode 206. Reverse Linked List | Python solution and explanation
description: This article explores solving the 206. Reverse Linked List problem on LeetCode.
toc: true
tags: [Algorithms, Easy, LeetCodeTop75]
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-09-05
lastMod: 2023-09-05
featuredImage: https://picsum.photos/700/241?grayscale
weight: 206
---

[LeetCode problem 206](https://leetcode.com/problems/reverse-linked-list/description/)

## Problem Statement

Reverse a given singly linked list and return its head. A singly linked list is a data structure consisting of nodes, where each node has a value and a reference to the next node in the sequence.

## Naive Solution

A naive approach could be to traverse the entire linked list once to read all its elements into an array. Then, we could reverse the array and construct a new linked list from it. This would work, but it takes up additional space for the array.

![LeetCode 206. Reverse Linked List | Python solution](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

## Hints & Tips

An efficient way to approach this problem is by using pointers to reverse the links between the nodes directly within the linked list, without using additional space.

We will discuss two approaches to solve this problem: Iterative and Recursive.

## Iterative

### Approach

1. Initialize three pointers: `prev` as `None`, `current` as the head of the linked list, and `next` as `None`.
2. Traverse the linked list, reversing the `next` pointers of each node to point to its previous node.

## Steps

1. Initialize `prev = None` and `current = head`.
2. While `current` is not `None`:
    1. Save `current.next` into `next`.
    2. Update `current.next` to `prev`.
    3. Move `prev` and `current` forward.

## Solution

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head

        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        return prev
```

## Recursive

### Approach

1. Traverse to the end of the list.
2. As the recursion stack unwinds, change the `next` pointers to create the reversed list.

### Steps

1. Base case: If the `head` or `head.next` is `None`, return `head`.
2. Recursively reverse the rest of the list.
3. Change the next-next pointer to reverse the list.

## Solution

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        new_head = self.reverseList(head.next)

        head.next.next = head
        head.next = None

        return new_head
```
