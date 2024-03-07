---
title: 1634. Add Two Polynomials Represented as Linked Lists
seoTitle: LeetCode 1634. Add Two Polynomials Represented as Linked Lists | Python solution and explanation
description: 1634. Add Two Polynomials Represented as Linked Lists
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1634
---

[LeetCode problem 1634](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/)

```python
# Definition for polynomial singly-linked list.
# class PolyNode:
#     def __init__(self, x=0, y=0, next=None):
#         self.coefficient = x
#         self.power = y
#         self.next = next


class Solution:
    def addPoly(self, poly1: "PolyNode", poly2: "PolyNode") -> "PolyNode":
        dummy = curr = PolyNode()
        while poly1 and poly2:
            if poly1.power > poly2.power:
                curr.next = poly1
                poly1 = poly1.next
                curr = curr.next
            elif poly1.power < poly2.power:
                curr.next = poly2
                poly2 = poly2.next
                curr = curr.next
            else:
                if c := poly1.coefficient + poly2.coefficient:
                    curr.next = PolyNode(c, poly1.power)
                    curr = curr.next
                poly1 = poly1.next
                poly2 = poly2.next
        curr.next = poly1 or poly2
        return dummy.next

```
