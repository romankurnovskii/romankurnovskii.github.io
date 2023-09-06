---
title: 725. Split Linked List in Parts
seoTitle: LeetCode 725. Split Linked List in Parts | Python solution and explanation
description: Detailed explanation for solving the LeetCode 725. Split Linked List in Parts problem.
toc: true
tags: [Algorithms, Medium, LeetCode]
categories: [Algorithms, Medium, LeetCode]
date: 2023-09-06
lastMod: 2023-09-07
featuredImage: https://picsum.photos/700/241?grayscale
weight: 725
---

[LeetCode problem 725](<https://leetcode.com/problems/split-linked-list-in-parts/>)

## Problem Statement

The problem asks you to divide a given singly linked list into `k` different parts such that the sizes of these parts are as nearly equal as possible. The parts should appear in the same order as in the original list, and earlier parts should not be smaller than later parts.

## Naive Solution

A naive approach would involve counting the length of the list and then traversing the list multiple times to create each part. While this would solve the problem, it isn't the most efficient way.

## Hints & Tips

You can use pointers and mathematical calculations to accomplish the task in a more efficient manner.

## Approach

To solve this problem, you first need to calculate the length of the original list. Once you have the length, you can divide it by `k` to find the "base size" of each part. The remainder of the division will help you distribute the "extra" nodes among the first few parts.

## Steps

1. Count the total number of nodes in the list. Call it `n`.
2. Calculate the base length of each part as `batch_len = n // k` and find the number of "extra nodes" as `extra_nodes = n % k`.
3. Initialize an array `arr` to store the head node of each part.
4. Loop through `k` times to create `k` parts. Use the base length and distribute the extra nodes as you go.

### Debugging Step-by-Step

1. Start with `current = head`.
2. Loop from 1 to `k`:
    1. Store `current` as the head of the new part.
    2. Traverse the list for `batch_len` nodes.
    3. If `extra_nodes > 0`, traverse one more node and decrement `extra_nodes`.
    4. Cut the list to start a new part and store the old part in `arr`.

## Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        # get linked list length
        n = 0
        current = head
        while current:
            n += 1
            current = current.next
        
        # get batch length
        batch_len = n // k
        extra_nodes = n % k

        # generate k batches
        arr = []
        current = head
        for _ in range(k):
            batch = current  # define head of current batch

            extra_one = 1 if extra_nodes > 0 else 0
            for i in range(batch_len + extra_one -1):
                if current:
                    current = current.next
            
            if current:  # switch, cut current batch, get head of next batch
                next_batch = current.next
                current.next = None  # cut current batch from next
                current = next_batch
            
            arr.append(batch)
            extra_nodes -= 1

        return arr
```
