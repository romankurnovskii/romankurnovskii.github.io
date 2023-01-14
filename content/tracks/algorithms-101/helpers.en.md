---
title: Helpers
seoTitle: LeetCode Cookbook - Help functions
description: LeetCode Cookbook - Help functions
toc: true
tags: []
categories: [Algorithms]
series:
date: 2022-10-15
featuredImage:
draft: false
weight: 300
---


## Create Linked List

Definition for singly-linked list:

```python
class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

```python
values = [2, 4, 3]

def create_linked_node(values):
    head = Node(values[0]) # start node, head of the linkedlist
    current = head   # current node in the linked list where we change/add next node
    for i in values[1:]:
        node = Node(i)
        current.next = node
        current = current.next  # now current node is last created
    return head

linked_list = create_linked_node(values)
```

Object structure:

![create linkedlist in python](../assets/linkedlist.png)
