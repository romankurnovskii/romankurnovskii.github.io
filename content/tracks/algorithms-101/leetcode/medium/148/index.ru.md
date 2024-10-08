---
title: 148. Sort List
seoTitle: 148. Sort List | Python Solution and Explanation
description: This article provides a Python solution with an in-depth explanation for the LeetCode problem 148. Sort List.
toc: true
authors:
tags: 
categories: [Algorithms, Medium]
series:
date: 2023-06-06
lastMod: 2023-06-06
featuredImage:
weight: 148
---

[LeetCode problem](https://leetcode.com/problems/sort-list/)

## Naive Solution

1. Traverse the linked list, adding each node's value to a Python list
2. sort that list
3. create a new linked list from the sorted values
4. return the head of this new list.

This solution would have a time complexity of `O(n log n)` due to the sort operation and a space complexity of `O(n)` because of the extra list we're creating.

```python
class Solution:
    def sortList(self, head):
        values = []

        node = head
        while node:
            values.append(node.val)
            node = node.next

        values.sort()

        # Create a new linked list from the sorted values
        node = head
        for val in values:
            node.val = val
            node = node.next

        return head
```

## Solution

Using the [Merge Sort algorithm](/en/tracks/algorithms-101/algorithms/#sort).

1. **Divide and Conquer:** Merge sort uses the divide and conquer strategy, where we continuously split the linked list in half until we have multiple sublists of length 1. A list of length 1 is technically always sorted.
2. **Merge Sublists:** Once we have the sorted sublists, we start merging them together in a manner that the resultant list is also sorted.

The trick to making this solution `O(1)` space complexity is to modify the existing nodes' next pointers to generate the sorted list, rather than creating new nodes.

```python
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        slow = head
        fast = head.next

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        mid = slow.next
        slow.next = None # separate left and right halves of linked list

        left = self.sortList(head)
        right = self.sortList(mid)

        def merge(left, right):
            if not left or not right:
                return left or right

            if left.val > right.val: # sort
                left, right = right, left

            left.next = merge(left.next, right)
            return left

        res = merge(left, right)

        return res
```

{{< youtube y1RnweT17v0 >}}
{{< youtube TGveA1oFhrc >}}
