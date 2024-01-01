---
title: 332. Reconstruct Itinerary
seoTitle: LeetCode 332. Reconstruct Itinerary | Python solution and explanation
description: 332. Reconstruct Itinerary
toc: true
tags: [LeetCode]
categories: [Algorithms, Hard, LeetCodeTop75]
date: 2023-09-15
lastMod: 2023-09-15
featuredImage: https://picsum.photos/700/241?grayscale
weight: 332
---

[LeetCode problem](<https://leetcode.com/problems/reconstruct-itinerary/>)

## Problem Statement

Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

## Naive Solution

One naive solution would be to use backtracking and try all possible combinations of tickets to form a valid itinerary. While this could work for small inputs, it's not efficient for larger numbers of tickets.

## Hints & Tips

- Consider the tickets as a directed graph where each airport is a node, and a ticket between two airports represents a directed edge.
- For this problem, instead of a depth-first traversal, the solution employs an iterative approach using a stack.

## Approach

We can visualize this problem as a directed graph traversal task. Every ticket is a directed edge between two airports. The challenge is to find a path that uses all the directed edges and starts from JFK.

The stack is an essential data structure for this solution, and here's why:

- A stack helps in maintaining the path. When visiting an airport, we're not sure if this path will lead to a solution (because it might end up in a dead-end). Hence, pushing the airports to the stack gives us the flexibility to backtrack easily (by popping out the last visited airport) if we reach a dead-end.

- When all destinations from an airport are exhausted, it means we have found the end of that particular path. At this moment, by adding the airport to our final result and removing it from the stack, we backtrack to find the remaining itinerary.

The graph for this solution is a dictionary (specifically, a `defaultdict` for ease of handling non-existing keys). The keys of this dictionary are the source airports, and the values are a list of destination airports. Importantly, these destinations are sorted in reverse lexicographical order because we will be utilizing the `pop()` function to retrieve and remove the last element from these lists. This ensures that we always get the smallest lexical destination available without any extra computational overhead.

## Steps

1. Convert the given list of tickets into a graph where each node (airport) points to a list of its destinations.
1. Sort the destinations in reverse lexicographical order to aid in retrieving the smallest lexical order when using pop().
1. Use a stack to iteratively traverse the graph, always trying to go to the smallest lexical destination possible.
1. When stuck at a node (airport) with no unvisited outbound paths, add it to the final itinerary.
1. Continue the process until the stack is empty.

## Solution

```python
from collections import defaultdict

def findItinerary(tickets):
    graph = defaultdict(list)       # Convert tickets into a graph with destinations for each departure
    for src, dest in sorted(tickets, reverse=True):
        graph[src].append(dest)

    stack = ["JFK"]
    result = []

    while stack:                    # Traverse the graph using the stack
        while graph[stack[-1]]:
            stack.append(graph[stack[-1]].pop())
        result.append(stack.pop())
                            
    return result[::-1]             # The result will be in reverse order
                                    # because of the way nodes are added to the result
```
