---
title: 234. Palindrome Linked List
seoTitle: 234. Palindrome Linked List | Python solution and explanation
description: 234. Palindrome Linked List
toc: true
tags: [linked-list, palindrome, two-pointers]
categories: [Algorithms, Easy]
series: [LeetCode Solutions]
date: 2023-07-03
lastMod: 2023-07-03
featuredImage: https://picsum.photos/700/242?grayscale
weight: 234
---


[LeetCode problem](https://leetcode.com/problems/palindrome-linked-list/)

## Problem Statement

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

## Naive Solution

A simple solution to this problem is to:

1. traverse the linked list
2. storing the value of each node in an array.

Then, we could compare the array with its reversed version.

If they match, the linked list is a palindrome. Otherwise, it is not.

This solution takes `O(n)` time (where `n` is the number of nodes in the list), as we need to traverse the list once.

However, it also takes `O(n)` space, as we store the value of each node in an array.

## Approach

To solve the problem in `O(n)` time and `O(1)` space, we can use the <mark>two-pointer technique</mark> to **find the middle of the linked list**. Then, we can reverse the second half of the list in-place. After that, we can compare the first half with the reversed second half. If they match, the list is a palindrome.

Reversing a linked list in-place involves changing the next pointers of the nodes to point to the previous node. This process can be done with a constant amount of space.

## Steps

1. Initialize two pointers: slow and fast at the head of the list.
   1. Move slow one step at a time and fast two steps at a time.
   2. When fast reaches the end of the list, slow will be at the middle.
2. Reverse the second half of the list starting from slow.
3. Compare the first half of the list with the reversed second half.
   1. If they match, return true.
   2. If they don't, return false.

## Solution

```python
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        slow = fast = head

        # find the mid node
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # reverse the second half
        prev = None
        cur = slow
        while cur: # 1 [1 2 3 4]
            nxt = cur.next # 2
            cur.next = prev # 1.next = None 

            prev = cur # 1, at the end of loop will be 4
            cur = nxt # 2

        # compare the first and second half nodes
        while prev:
            if prev.val != head.val:
                return False
            prev = prev.next
            head = head.next

        return True
```

### Debug of Reversing

Assuming we have a linked list as `[1,2,3,4,5,6]` and slow initially points to `4`. Result should be `[6,5,4,3,2,1]`

Initial state:

- Linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
- cur points to 4
- prev = None

1. First iteration:

- nxt is assigned 5 (the next node after cur)
- cur.next (the next node after 4) is assigned None
- prev is assigned 4
- cur is assigned 5 (nxt)

After first iteration:

- Linked list: 1 -> 2 -> 3 -> 4 -> None, 5 -> 6
- cur points to 5
- prev points to 4

2. Second iteration:

- nxt is assigned 6
- cur.next (the next node after 5) is assigned 4 (prev)
- prev is assigned 5
- cur is assigned 6 (nxt)

After second iteration:

- Linked list: 1 -> 2 -> 3 -> 4 -> None, 5 -> 4, 6
- cur points to 6
- prev points to 5

3. Third iteration:

- nxt is assigned None
- cur.next (the next node after 6) is assigned 5 (prev)
- prev is assigned 6
- cur is assigned None (nxt)

After third iteration:

- Linked list: 1 -> 2 -> 3 -> 4 -> None, 5 -> 4, 6 -> 5
- cur points to None
- prev points to 6

4. Since `cur` is `None`, we exit the while loop.

Now `prev` is pointing to the `head` of the reversed second half of the list.

The list now looks like this: `1 -> 2 -> 3 -> 4 -> None and 6 -> 5 -> 4 -> None`.

{{< youtube D7y_hoT_YZI >}}
