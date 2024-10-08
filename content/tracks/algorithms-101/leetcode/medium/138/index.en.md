---
title: 138. Copy List with Random Pointer
seoTitle: LeetCode 138. Copy List with Random Pointer | Python solution and explanation
description: LeetCode 138. Copy List with Random Pointer | Python solution and explanation
toc: true
authors:
tags: ["LeetCode Top Interview", greedy]
categories: [Algorithms, Medium]
series:
date: 2023-05-04
lastMod: 2023-02-09
featuredImage:
weight: 138
---

[LeetCode problem](https://leetcode.com/problems/copy-list-with-random-pointer/)

The problem asks to create a deep copy of a given linked list with a random pointer in each node. A deep copy means that the new linked list will have completely new nodes, and none of its pointers should point to the nodes in the original list. Both the next and random pointers of the new nodes should point to the new nodes in the copied list in the same order as the original list.

**Naive Solution:**

A naive solution would be to first create a copy of the original linked list without the random pointers.

Then, for each node in the copied list, search for the node in the original list that its random pointer is pointing to, and update the random pointer in the copied list accordingly.

This solution would take `O(n^2)` time complexity, as we need to search for the random node for each node in the copied list.

**Logic:**

1. Initialize a hashmap to store the mapping of original nodes to new nodes
1. Iterate through the original list to create new nodes and add their mappings to the hashmap
1. Iterate through the original list again to update the next and random pointers of the new nodes using the hashmap
1. Return the head of the copied linked list

**Solution:**

```python
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return None

        nodes = {}
        cur = head

        new_head = Node(cur.val)
        new_cur = new_head

        nodes[cur] = new_cur

        while cur:  # create mapping old-new linked nodes
            node = Node(cur.val)
            nodes[cur] = node
            cur = cur.next

        cur = head
        while cur:
            if cur.next:
                nodes[cur].next = nodes[cur.next]
            if cur.random:
                nodes[cur].random = nodes[cur.random]

            cur = cur.next

        return nodes[head]
```

{{< video src="../../assets/138.mp4" title="LeetCode Problem 138 Video Solution" >}}
