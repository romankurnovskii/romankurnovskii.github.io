---
title: Binary Tree
description: Binary Tree
authors:
categories: ['programming', 'Data Structures', 'Binary Tree']
tags: ['Data Structures']
# series: null
# featuredImage: null
toc: false
weight: 10
date: 2023-02-09
lastMod: 2023-02-09
published: true
---

**1. What is a Binary Tree?**

A binary tree is a data structure in which each node has at most **two children**, which are referred to as the left child and the right child.

**2. Representing a Binary Tree in Python**

To represent a binary tree in Python, we can create a class called `Node` to represent each node in the tree. Each node will have a value and references to its left and right children.

If a node doesn't have a left or right child, the reference will be set to `None`. Here's an example implementation:

```python
class Node:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right
```

On this step `None` will look like this:

**3. Adding Nodes to a Binary Tree**

Once we have a representation of a node, we can start adding nodes to the tree to create the structure of the binary tree.

To add a node, we **need to find the correct position** in the tree where the new node should be added. This is typically done by starting at the root node and comparing the value of the new node to the value of the current node.

If the new node's value is **less than the current node's value**, we **move to the left child**. If the new node's value is **greater** than the current node's value, we **move to the right** child. We **repeat** this process until we find a position where **there is no left or right child** (i.e., the current node is a leaf node), and we can add the new node there.

Here's an example implementation of a function to add a node to a binary tree:

```python
def insert(root, value):
    if root is None:
        return Node(value) # basicaly create a new root Node
    if value < root.value:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root
```

<mark>[Visualize Binary Tree](https://www.cs.usfca.edu/~galles/visualization/BST.html)</mark>

**4. Full Binary Tree Class**

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if self.value:
            if value < self.value:
                if self.left is None:
                    self.left = Node(value)
                else:
                    self.left.insert(value)
            else:
                if self.right is None:
                    self.right = Node(value)
                else:
                    self.right.insert(value)
        else:
            self.value = value

    def search(self, value):
        if value < self.value:
            if self.left is None:
                return False
            else:
                return self.left.search(value)
        elif value > self.value:
            if self.right is None:
                return False
            else:
                return self.right.search(value)
        else:
            return True

    def remove(self, value, parent=None):
        if value < self.value:
            if self.left:
                self.left.remove(value, self)
        elif value > self.value:
            if self.right:
                self.right.remove(value, self)
        else:
            if self.left is None and self.right is None:
                if parent:
                    if parent.left == self:
                        parent.left = None
                    else:
                        parent.right = None
                else:
                    self.value = None
            elif self.left and self.right is None:
                if parent:
                    if parent.left == self:
                        parent.left = self.left
                    else:
                        parent.right = self.left
                else:
                    self.value = self.left.value
                    self.right = self.left.right
                    self.left = self.left.left
            elif self.right and self.left is None:
                if parent:
                    if parent.left == self:
                        parent.left = self.right
                    else:
                        parent.right = self.right
                else:
                    self.value = self.right.value
                    self.left = self.right.left
                    self.right = self.right.right
            else:
                min_larger_node = self.right
                while min_larger_node.left:
                    min_larger_node = min_larger_node.left
                self.value = min_larger_node.value
                if self.right == min_larger_node:
                    self.right = min_larger_node.right
                else:
                    min_larger_node.parent.left = min_larger_node.right
```

## Links

- [Visualize Binary Tree](https://www.cs.usfca.edu/~galles/visualization/BST.html)
