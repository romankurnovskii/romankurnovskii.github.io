---
title: Segment Tree
description: null
authors:
categories: ['programming', 'Data Structures', 'Segment Tree']
tags: ['Data Structures']
# series: null
# featuredImage: null
toc: false
weight: 10
date: 2023-02-09
lastmod: 2023-02-10
published: true
prerequisites:
  - Бинарное дерево
  - Префиксные суммы
---

A Segment Tree is a data structure used for efficiently processing queries over **intervals** or **ranges**. It is commonly used for solving problems that involve finding information about a **set of elements and their sub-intervals**.

Since a Segment Tree is a **binary tree**, a simple linear array can be used to represent the Segment Tree. Before building the Segment Tree, one must figure **what needs to be stored in the Segment Tree's node?.**

Each leaf node represents a single element, and each internal node represents the union of its children's ranges. Queries are performed by traversing the tree from the root to the leaves, and aggregating information about the ranges that intersect with the query interval.

**Example 1**, consider a set of numbers and the task of finding the minimum value in a range of these numbers. The Segment Tree can be used to solve this problem by storing the minimum value of each range in the tree's internal nodes, and answering queries by searching for the smallest value in the portion of the tree that covers the query interval.

**Example 2**, if the question is to find the sum of all the elements in an array from `L` indices to `R`, then at each node (except leaf nodes) the sum of its children nodes is stored.

The Segment Tree can be constructed in `O(n log n)` time, where `n` is the number of elements in the original set, and it can answer queries in `O(log n)` time. This makes it an efficient data structure for processing queries over large datasets.

To study the topic "segment tree" you need to know the following concepts:

- arrays
- loops
- conditional operators
- bitwise operations

A Segment Tree is a dynamic data structure used to perform operations on and update intervals. It supports two operations: **Element update** (update) on a given range and **request** (query) on the sum of elements in a given range.

**Let's perform the following task:** we have an array and we want to find the sum of the elements in a given range.

For this task, we can use a segment tree. It is constructed as a **binary tree**, where each node represents an interval and the value of the node is the sum of the elements in that interval.

**Fundamentals:**

1. Definition of a sum element in a segment tree:

A sum element in a segment tree is the sum of all elements in the range it represents.

2. Constructing a segment tree:

A segment tree can be constructed from an array of numbers. Each node in the tree represents a range of elements in the array and stores the sum of the elements in that range.

3. Implementation of operations:
 
The implementation of various operations in a segment tree essentially depends on its structure. However, there are several operations that are often used in various tasks:

- **Update** value in the array: This operation allows you to change the value of an element in an array. It is usually implemented using a recursive tree traversal.

- **Query Value**: This operation allows you to query the value of an element in an array. It is also usually implemented using recursive tree traversal.

- **Query for a sum**: This operation allows you to query the sum of values in an array on a given interval. It is usually implemented by recursive tree traversal and sum counting

## Building a spanning tree

Since the tree is binary, each vertex will have up to two descendants.

Graphically it looks as follows (for an array of 8 elements):

![segment-tree-structure.png](../assets/segment-tree-structure.png)

At the topmost vertex the segment from the beginning of the array to the last element is fixed.

On the left is the left half of the *parent* (`[0 1 2 3]`). On the right is the right half ()`[4 5 6 7]`). And so on up to the last node with a segment of one element.

Take the array `a = [1, 3, -2, 8, -7]`. We use it to build a tree of segments to write the sums of these segments in each node.

The structure of such a tree is as follows:

![segment-tree-sum.png](../assets/segment-tree-sum.png)

💡 The tree contains less than **2n** vertices. `2*n-1`

The number of vertices in the worst case is estimated by the sum $n + \frac{n}{2} + \frac{n}{4} + \frac{n}{8} + \ldots + 1 < 2n$

Let us display such a tree as an array:

1. There are 9 vertices in such a tree. The array will consist of 9 elements.


```
tree[0] = A[0:4]
tree[1] = A[0:2]
tree[2] = A[3:4]
tree[3] = A[0:1]
tree[4] = A[2:2]
tree[5] = A[3:3]
tree[6] = A[4:4]
tree[7] = A[0:0]
tree[8] = A[1:1]
```

This tree *covers* all vertices. 

With this structure, you can store different data in the vertex values, such as the sum of the segment, the smallest/the largest number, or other aggregate data on the segments.


## Implementing a segment tree in Python

Initializing the tree

`a = [1, 3, -2, 8, -7]`

Since the most recent nodes are segments of length == `1`. So we start the process of creation with them, gradually rising to the level above.

💡 The tree contains less than **2n** vertices.
💡 Bottom vertex - the length of the segment is equal to 1.


```python
def build_tree(array):
  n = len(array)
  tree = [0] * 2 * n # The tree contains less than **2n** vertices.

  for i in range(n):
    tree[n + i] = a[i] # the lowest tops of the tree

  # add parent nodes
  for i in reversed(range(n)):
    tree[i] = tree[2 * i] + tree[2 * i + 1]
    print(i, tree)

>> array = [1, 3, -2, 8, -7]
>> build_tree(array)

  4 [0, 0, 0, 0, 1, 1, 3, -2, 8, -7]
  3 [0, 0, 0, 1, 1, 1, 3, -2, 8, -7]
  2 [0, 0, 2, 1, 1, 1, 3, -2, 8, -7]
  1 [0, 3, 2, 1, 1, 1, 3, -2, 8, -7]
  0 [3, 3, 2, 1, 1, 1, 3, -2, 8, -7]
```

**Calculating the sum on the segment:**

The function gets the indexes of the original array.

When we created the tree from the source array, we placed each individual element on the new index `[n + i]`.

💡 So when the function takes an index, we first find the *bottommost element* in the tree. It is located in the new array by the index `[length_of_source_array + index]`


```python
# calculate the sum on the segment
def query_tree(l, r):
  global tree, n
  
  sum = 0
  l += n # current item index
  r += n
  while l <= r:
      if l % 2 == 1: # if the index is odd
          sum += tree[l]
          l += 1
      if r % 2 == 0:
          sum += tree[r]
          r -= 1
      l //= 2 # floor division. 8 // 3 = 2
      r //= 2
  return sum

>> a = [1, 3, -2, 8, -7]
>> n = len(a)
>> tree = build_tree(a)

>> query_tree(0, 4) # sum([1, 3, -2, 8, -7])
3
>> query_tree(1, 3) # sum([3, -2, 8])
9
>> query_tree(4, 4)
-7
```


We get the `SegmentTree` class:

**Sum function or any other function can be turned on at the time of tree generation**

```python
class SegmentTree:
    def __init__(self, a):
        self.n = len(a)
        self.tree = [0] * 2 * self.n 
        for i in range(self.n):
            self.tree[self.n + i] = a[i]
        for i in range(self.n - 1, 0, -1):
            self.tree[i] = self.tree[2*i] + self.tree[2*i+1]

    def calculate_sum(self, l, r):
        sum = 0
        l += self.n
        r += self.n
        while l <= r:
            if l % 2 == 1:
                sum += self.tree[l]
                l += 1
            if r % 2 == 0:
                sum += self.tree[r]
                r -= 1
            l //= 2
            r //= 2
        return sum
    
    def find_value(self, l, r):
        l += self.n
        r += self.n
        while l < r:
            if r % 2 == 0:
                r -= 1
            else:
                r -= 1
                l += 1
        return l - self.n
```

## Segment Tree template


```python
class SegmentTree:
    def __init__(self, data, default=0, func=max):
        self._default = default
        self._func = func
        self._len = len(data)
        self._size = _size = 1 << (self._len - 1).bit_length()

        self.data = [default] * (2 * _size)
        self.data[_size:_size + self._len] = data
        for i in reversed(range(_size)):
            self.data[i] = func(self.data[i + i], self.data[i + i + 1])

def __delitem__(self, idx):
    self[idx] = self._default

def __getitem__(self, idx):
    return self.data[idx + self._size]

def __setitem__(self, idx, value):
    idx += self._size
    self.data[idx] = value
    idx >>= 1
    while idx:
        self.data[idx] = self._func(self.data[2 * idx], self.data[2 * idx + 1])
        idx >>= 1

def __len__(self):
    return self._len

def query(self, start, stop):
    """func of data[start, stop)"""
    start += self._size
    stop += self._size
    if start==stop:
        return self._default
    res_left = res_right = self._default
    while start < stop:
        if start & 1:
            res_left = self._func(res_left, self.data[start])
            start += 1
        if stop & 1:
            stop -= 1
            res_right = self._func(self.data[stop], res_right)
        start >>= 1
        stop >>= 1

    return self._func(res_left, res_right)

def __repr__(self):
    return "SegmentTree({0})".format(self.data)
```

The `build_tree` method builds a segment tree, and `query` allows you to perform query operations.


## Links

- https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/tutorial/