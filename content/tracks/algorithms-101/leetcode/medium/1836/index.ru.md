---
title: 1836. Remove Duplicates From an Unsorted Linked List
seoTitle: LeetCode 1836. Remove Duplicates From an Unsorted Linked List | Python solution and explanation
description: 1836. Remove Duplicates From an Unsorted Linked List
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1836
---

[LeetCode problem 1836](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/)

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicatesUnsorted(self, head: ListNode) -> ListNode:
        cnt = Counter()
        cur = head
        while cur:
            cnt[cur.val] += 1
            cur = cur.next
        dummy = ListNode(0, head)
        pre, cur = dummy, head
        while cur:
            if cnt[cur.val] > 1:
                pre.next = cur.next
            else:
                pre = cur
            cur = cur.next
        return dummy.next

```
