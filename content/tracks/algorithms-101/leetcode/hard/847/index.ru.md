---
title: 847. Shortest Path Visiting All Nodes
seoTitle: LeetCode 847. Shortest Path Visiting All Nodes | Python solution and explanation
description: This article aims to explain the problem of finding the shortest path to visit all nodes in an undirected, connected graph.
toc: true
tags: [LeetCode]
categories: [Algorithms, LeetCode, Hard]
date: 2024-02-12
lastMod: 2023-09-17
featuredImage: https://picsum.photos/700/241?grayscale
weight: 847
todo: translate
---

[LeetCode problem 847](<https://leetcode.com/problems/shortest-path-visiting-all-nodes/>)

## Problem Statement

Given an undirected, connected graph of n nodes labeled from 0 to `n - 1`. An array graph is provided where `graph[i]` is a list of all the nodes connected with node i by an edge. The objective is to determine the length of the shortest path that visits every node.

It's permissible to start and stop at any node, revisit nodes multiple times, and reuse edges.

## Naive Solution

A naive approach would be to attempt all possible paths (brute force) until all nodes are visited. This would involve significant computational power and time, especially for larger graphs.

## Hints & Tips

1. **State Compression**: The visited state of nodes can be represented using binary numbers.
2. **Breadth-First Search**: BFS can be used to explore the graph systematically.

## Approach

Instead of the brute force approach, a more refined BFS can be applied. The BFS is enhanced using two techniques:

1. **State Compression**: Rather than tracking visited nodes for each path with a set or list, represent them with a binary number. This efficient way compresses the state and avoids redundancy.
2. **Double-ended Queue**: An efficient way to explore BFS paths using deque which allows operations from both ends.

## Steps

1. Use BFS for exploration.
2. Encode the visited state of nodes with binary numbers.
3. Utilize a double-ended queue storing the nodes, their states, and steps taken.
4. The ultimate goal is to discover a state that represents all nodes being visited.

## Solution

```python
from collections import deque

def shortestPathLength(graph):
    n = len(graph)
    final_state = (1 << n) - 1  # This mask checks if all nodes are visited
    visited = set()             # To track visited (node, state) pairs
    queue = deque()             # Double-ended queue for BFS

    # Start BFS from every node
    for i in range(n):
        state = 1 << i
        queue.append((i, state, 0))
        visited.add((i, state))

    while queue:
        node, state, steps = queue.popleft()

        if state == final_state:        # If all nodes are visited in the current state, return steps
            return steps
        
        for neighbor in graph[node]:    # Check neighbors and add new states to the queue
            new_state = state | (1 << neighbor)
            if (neighbor, new_state) not in visited:
                visited.add((neighbor, new_state))
                queue.append((neighbor, new_state, steps + 1))

    return -1
```
