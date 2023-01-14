---
title: Data Structures
description: null
authors:
categories: ['programming', 'Data Structures', 'Codeforces']
tags: ['Data Structures']
# series: null
# featuredImage: null
toc: false
weight: 40
date: 2023-02-09
lastmod: 2023-02-09
published: true
---


### Tree

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.children = {}

    def insert(self, s, idx):
        # idx: index of the current character in s
        if idx != len(s):
            self.children.setdefault(s[idx], Node(s[idx]))
            self.children.get(s[idx]).insert(s, idx + 1)
```

### Fenwick Tree

```python
class Fenwick: #also known as Binary Indexed Tree (BIT)
    def __init__(self, n):
        self.n = n
        self.bit = [0] * (n+1)

    def add(self, idx, val):
        while idx <= self.n:
            self.bit[idx] += val
            idx += idx & -idx

    def add_range(self, l, r, val):
        self.add(l, val)
        self.add(r+1, -val)

    def query(self, idx):
        #Calculates the sum of the elements from the beginning to idx
        ret = 0
        while idx > 0:
            ret += self.bit[idx]
            idx -= idx & -idx
        return ret

    def range_sum(self, l, r):
        # Return the sum of the elements from l (inclusive) to r (exclusive)
        return self.prefix_sum(r - 1) - self.prefix_sum(l - 1)

    def prefix_sum(self, x):
        # return sum upto and including element x
        z = x
        res = 0
        while z >= 0:
            res += self.bit[z]
            # Strip trailing zeros from z, and then take away one
            z = (z & (z + 1)) - 1
        return res
```


- [A Visual Introduction to Fenwick Tree | medium](https://medium.com/carpanese/a-visual-introduction-to-fenwick-tree-89b82cac5b3c)
- [Fenwick Tree](https://cp-algorithms.com/data_structures/fenwick.html)
- [Дерево Фенвика | algorithmica](https://ru.algorithmica.org/cs/range-queries/fenwick/)
- [Дерево Фенвика | habr](https://habr.com/ru/post/112828/)


## Resources

- [data structures](https://github.com/OpenGenus/cosmos)
- [data structures tutorial | programiz](https://www.programiz.com/dsa/algorithm)
- [Competitive Programming Library](https://github.com/cheran-senthil/PyRival)
- [Algorithms for Competitive Programming](https://cp-algorithms.com/)
