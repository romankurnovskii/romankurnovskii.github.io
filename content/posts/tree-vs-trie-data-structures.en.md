---
title: Difference between Tries and Trees?
seoTitle: Difference between Tries and Trees?
description: Difference between Tries and Trees?
toc: false
tags: []
series: []
categories: [programming]
date: 2023-05-13
lastmod: 2023-05-13
featuredImage: https://picsum.photos/700/225?grayscale
authors: [roman-kurnovskii]
---

Despite their similar names, these structures serve different purposes, and understanding their differences is crucial to utilizing them effectively.

## Tree

{{< img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/440px-Tree_%28computer_science%29.svg.png" height="250px" float="right">}}

A tree data structure is a collection of entities, called **nodes**, connected by **edges**. 

Each node contains a value, and a list of references to its child nodes. The first node of the tree is called the **root**. If we visualize it, a tree data structure resembles an **inverted tree**, with the root at the top and the leaves (nodes without children) at the bottom.

Trees are hierarchical, non-linear data structures. 

They are excellent for representing <mark>relationships between objects</mark>, and their operations usually have a logarithmic time complexity, making them efficient for search operations.

Let's create a simple binary tree in Python, where each node can have at most two children:

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

root = Node(1)
root.left = Node(2)
root.right = Node(3)
```

Here, we have a tree with the root node storing the value `1`. The root node has two children: the left child stores the value `2`, and the right child stores the value `3`.

## Trie

{{< img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Trie_example.svg"  height="200px" float="right">}}

A trie, also known as a prefix tree, is a type of tree that specializes in managing **sequences**, typically strings. In a trie, every node (except the root) corresponds to a character or a string, and each path down the tree can represent a word or a prefix.

The key characteristic of tries is that they **provide a fast retrieval of data**. They can check if a word or prefix exists in a dataset in `O(M)` time, where `M` is the length of the word.

Here's a simple Python example of a trie data structure:

```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.end_of_string = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for ch in word:
            if ch not in node.children:
                node.children[ch] = TrieNode()
            node = node.children[ch]
        node.end_of_string = True
```

In this example, each node in the trie has a dictionary called `children` to keep references to its child nodes. The `end_of_string` flag helps determine if the current concatenation of characters forms a valid word.

## Tries vs Trees

Despite their shared properties (being tree-based structures), tries and trees are designed for different use cases.

**Data Storage:** A general-purpose tree can store any data type—numbers, strings, objects, whereas a trie is specifically used for storing sequences, like strings or arrays.

**Node Value:** In a tree, each node holds a value. In a trie, nodes themselves don't hold a value—instead, the value is the path from the root to that node.

**Efficiency:** Tries are incredibly efficient when it comes to searching for a word or prefix in a dictionary. Trees, on the other hand, are more efficient for a wide range of operations, like searching, inserting, and deleting arbitrary values.

**Memory Usage:** Tries can use more memory because of references in each node, especially when dealing with a large alphabet. Each node in a trie maintains a collection (often a dictionary or array) of all its child nodes. However, in a binary tree, each node only needs to keep a reference to at most two child nodes.

**Lookup Time:** Tries have a faster lookup time for certain tasks. For instance, finding a word in a trie takes `O(M)` time, where M is the length of the word. For a balanced binary search tree, the time complexity would be `O(log N)`, where N is the number of elements in the tree.
