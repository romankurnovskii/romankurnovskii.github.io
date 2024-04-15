---
title: 2073. Time Needed to Buy Tickets
seoTitle: LeetCode 2073. Time Needed to Buy Tickets | Python solution and explanation
description: 2073. Time Needed to Buy Tickets
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2073
---

[LeetCode problem 2073](https://leetcode.com/problems/time-needed-to-buy-tickets/)

Think about the relationship between the position of the person in the queue and the number of tickets they want to buy. How does the position of the person affect the time it will take for them to buy all their tickets?

To solve this problem, focus on two key observations:

1. Everyone before the k-th person, including k, will buy tickets at least tickets[k] times.
1. People after the k-th person will buy tickets either tickets[k] times if they want as many or more tickets than k, or their total ticket count if it's less.

```python
class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        time = 0  # result
        # round 1 people before
        for t in tickets[:k]:
            time += min(t, tickets[k])

        # person is first in the queue
        time += tickets[k]
        person_require = tickets[k] - 1
        
        # people after the person
        k += 1
        while k < len(tickets):
            time += min(person_require, tickets[k])
            k += 1

        return time
```

```python
class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        time = 0
        for i, ticket in enumerate(tickets):
            if i <= k:
                time += min(tickets[k], ticket)
            else:
                time += min(tickets[k] - 1, ticket)
        return time
```
