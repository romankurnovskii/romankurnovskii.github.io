---
title: Create LinkedList in Python
description: Create LinkedList in Python
toc: false
authors: [roman-kurnovskii]
tags: ["Linked List"]
categories: [Algorithms, Python]
series: ["Code Snippets"]
date: 2022-10-15
featuredImage:
weight: 30
---


Definition for singly-linked list:

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

```python
values = [2, 4, 3]

def createLinkedNode(values):
    head = ListNode(values[0]) # start node, head of the linkedlist
    current = head   # current node in the linked list where we change/add next node
    for i in values[1:]:
        node = ListNode(i)
        current.next = node
        current = current.next  # now current node is last created
    return head

linled_list = createLinkedNode(values)
```

Object structure:

![create linkedlist in python](../assets/linkedlist.png)
