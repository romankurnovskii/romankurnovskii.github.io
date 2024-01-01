---
title: 2709. Greatest Common Divisor Traversal
seoTitle: LeetCode 2709. Greatest Common Divisor Traversal | Python solution and explanation
description: 2709. Greatest Common Divisor Traversal
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2709
---

[LeetCode problem 2709](https://leetcode.com/problems/greatest-common-divisor-traversal/)

```python
from collections import defaultdict
from typing import List

class UnionFind:
    def __init__(self, size):
        self.parent = list(range(size))
        self.clusterSize = [1] * size

    def find(self, node):
        if self.parent[node] != node:
            self.parent[node] = self.find(self.parent[node])
        return self.parent[node]

    def union(self, node1, node2):
        root1, root2 = self.find(node1), self.find(node2)
        if root1 == root2:
            return False  # No union made since they are already in the same set
        if self.clusterSize[root1] > self.clusterSize[root2]:
            self.parent[root2] = root1
            self.clusterSize[root1] += self.clusterSize[root2]
        else:
            self.parent[root1] = root2
            self.clusterSize[root2] += self.clusterSize[root1]
        return True

# Calculating prime factors for each number up to a maximum value
maxValue = 100010
primeFactors = defaultdict(list)
for number in range(1, maxValue + 1):
    value = number
    factor = 2
    while factor <= value // factor:
        if value % factor == 0:
            primeFactors[number].append(factor)
            while value % factor == 0:
                value //= factor
        factor += 1
    if value > 1:
        primeFactors[number].append(value)


class Solution:
    def canTraverseAllPairs(self, nums: List[int]) -> bool:
        numCount = len(nums)
        maxNum = max(nums)
        unionFind = UnionFind(numCount + maxNum + 1)
        
        for index, num in enumerate(nums):
            for prime in primeFactors[num]:
                # Mapping each number to its prime factors offset by numCount to avoid index collision
                unionFind.union(index, prime + numCount)
                
        # Checking if all numbers are interconnected through their prime factors
        rootSet = set(unionFind.find(i) for i in range(numCount))
        return len(rootSet) == 1
```

Use a Union-Find data structure to dynamically connect numbers in the input list nums based on their prime factors.

By mapping each number to its prime factors (calculated and stored in primeFactors), and then performing union operations between numbers and their factors (offset by the length of nums to ensure unique indices).

Group numbers that share common factors.

Check if all numbers belong to a single interconnected group, which would imply that it's possible to traverse all pairs with a GCD greater than 1.
