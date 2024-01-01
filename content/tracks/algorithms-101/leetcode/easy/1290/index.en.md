---
title: 1290. Convert Binary Number in a Linked List to Integer
seoTitle: LeetCode 1290. Convert Binary Number in a Linked List to Integer | Python solution and explanation
description: 1290. Convert Binary Number in a Linked List to Integer
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1290
---

[LeetCode problem 1290](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        res = 0
        while head:
            res = res << 1 | head.val
            head = head.next
        return res

```
