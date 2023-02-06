---
title: Helpers
description: LeetCode Cookbook - Help functions
toc: true
tags: []
categories: [Algorithms]
series:
date: 2022-10-15
featuredImage:
draft: false
weight: 30
---


## Syntactic sugar

> Syntactic sugar is a term for a more concise syntax that provides the same functionality for something that already exists.

```python
inp = lambda: sys.stdin.readline().strip().rstrip("\r\n") #read line as string. Ex: 1 2 3 => '1 2 3'
inpi = lambda: int(inp()) #read input as integer.
inpl = lambda: list(map(int, inp().split())) #read line as list of integers. Ex: [1, 2, 3]
inp_strl = lambda: list(inp().split()) #read line as list of strings. Ex: ['1', '2', '3']
```

### Python template for contests

```python
import math
import os
import sys
import time
from collections import defaultdict, Counter


INF = sys.maxsize

inp = lambda: sys.stdin.readline().strip().rstrip("\r\n") #read line as string. Ex: input 1 2 3 => '1 2 3'
inpi = lambda: int(inp()) #read input as integer. input 1 => 1
inpl = lambda: list(map(int, inp().split())) #read line as list of integers. Ex: [1, 2, 3]
inp_strl = lambda: list(inp().split()) #read line as list of strings. Ex: ['1', '2', '3']

list_to_string = lambda _v: "".join(map(str, _v)) # [1,2,3] => '123'
list_to_string_list = lambda _v: " ".join(map(str, _v)) # [1,2,'3'] => '1 2 3'


# ------ SOLUTION

def solve():
    # input
    
    return 


def run():
    print(solve())


if __name__ == "__main__":
    if os.environ.get("CODE_DEBUG"):
        sys.stdin = open("./input.txt", "r")
        start_time = time.time()
        run()
        print("\n--- %s seconds ---\n" % (time.time() - start_time))
    else:
        run()
```

## Create Linked List

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
