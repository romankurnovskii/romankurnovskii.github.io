---
title: 1171. Remove Zero Sum Consecutive Nodes from Linked List
seoTitle: LeetCode 1171. Remove Zero Sum Consecutive Nodes from Linked List | Python solution and explanation
description: 1171. Remove Zero Sum Consecutive Nodes from Linked List
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1171
---

[LeetCode problem 1171](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(next=head)
        last = {}
        s = 0
        cur = dummy
        while cur:
            s += cur.val
            last[s] = cur
            cur = cur.next

        s = 0 
        cur = dummy
        while cur:
            s += cur.val
            cur.next = last[s].next
            cur = cur.next
        return dummy.next
```
