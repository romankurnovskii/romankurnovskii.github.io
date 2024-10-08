---
title: 146. LRU Cache
seoTitle: LeetCode 146. LRU Cache | Python solution and explanation
description: LeetCode 146. LRU Cache | Python solution and explanation
toc: true
authors:
tags: 
categories: [Algorithms, Medium]
series:
date: 2023-05-22
lastMod: 2023-05-22
featuredImage:
weight: 146
---

[LeetCode problem](https://leetcode.com/problems/lru-cache/)

The operations we need to support are get and put which should both be done in `O(1)` time.

- `get(key)` should return the value if the key exists in the cache, otherwise return `-1`.
- `put(key, value)` should update the value of the key if the key exists; otherwise, this method should insert the key-value pair into the cache.
- If the cache is full, this method should also evict the least recently used key-value pair.

## Approach

Use [Doubly Linked List](https://en.wikipedia.org/wiki/Doubly_linked_list) or Python [OrderedDict](https://docs.python.org/3/library/collections.html#collections.OrderedDict)

## Logic

For each operation (get/put) - check if key already exists - if yes, move item to end (the way to mark this key as recent used).

## Initialization

The **LRUCache** class is initialized with a given capacity, and an empty `OrderedDict` is created. This data structure maintains the keys in order of their usage.

**Get Operation** - When the get method is called with a key, the function first checks if the key exists in the cache (which is an `O(1)` operation).

**If it does exist**, the function makes use of the `move_to_end` method provided by the `OrderedDict` to move this key to the end of the order of keys (marking it as the most recently used) and returns the corresponding value.

If the key is **not found** in the cache, the function returns `-1`.

**Put Operation:** - When the put method is called with a key and value, the function first checks if the key is already in the cache. If it is, the function moves the key to the end of the order (making it the most recently used) and updates its value.

If the key isn't already in the cache, the function checks if the cache is at its capacity. If it is, the function uses the `popitem` method with `last=False` to remove the least recently used item (which is at the start of the order).

The key-value pair is then added to the cache, and since this is a new addition, it is considered the most recently used item and gets added to the end.

## Solution

```python
from collections import OrderedDict


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key in self.cache:
            self.cache.move_to_end(key)  # move to the least recently used
            return self.cache[key]
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # check if key already exists - if yes, move item to end and update the value
            self.cache.move_to_end(key)
        elif len(self.cache) == self.capacity:
            # if cache is full, remove least recent item
            self.cache.popitem(last=False)

        self.cache[key] = value
```

## Solution 2

Using [Doubly Linked List](https://en.wikipedia.org/wiki/Doubly_linked_list)

{{< img src="../../assets/doubly-linked-list.png" height="210px" float="center">}}

```python
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.dictionary = dict()
        self.head = Node(0, 0)   # dummy node
        self.tail = Node(0, 0)   # dummy node
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key):
        if key in self.dictionary:
            node = self.dictionary[key]
            self._remove(node)
            self._add(node)
            return node.value
        return -1

    def put(self, key, value):
        if key in self.dictionary:
            self._remove(self.dictionary[key])
        node = Node(key, value)
        self._add(node)
        self.dictionary[key] = node
        if len(self.dictionary) > self.capacity:
            node = self.head.next
            self._remove(node)
            del self.dictionary[node.key]

    def _remove(self, node):
        prev = node.prev
        next = node.next
        prev.next = next
        next.prev = prev

    def _add(self, node):
        prev = self.tail.prev
        prev.next = node
        self.tail.prev = node
        node.prev = prev
        node.next = self.tail
```
