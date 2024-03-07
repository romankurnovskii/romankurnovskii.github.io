---
title: 649. Dota2 Senate
seoTitle: LeetCode 649. Dota2 Senate | Python Solution
description: LeetCode 649. Python Solution Dota2 Senate.
toc: true
tags: [Queue, Medium]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-09-01
lastMod: 2023-09-01
featuredImage: https://picsum.photos/700/241?grayscale
weight: 649
---

[LeetCode problem 649](<https://leetcode.com/problems/dota2-senate/>)

# Idea

Think about how the bans affect the sequence of senators and how you can simulate the rounds efficiently.

The core idea is to simulate the banning process round by round, keeping track of which senators are available to ban others. A queue can efficiently manage this process. Radiant senators and Dire senators can be handled separately to easily manage the bans they are going to perform.

## Approach

1. Use two queues to represent the indices of Radiant and Dire senators, respectively.
1. Iterate through the initial string, adding the index of each senator to their respective party's queue.
1. While both parties have members left, simulate each round of bans.
   1. Compare the front of each queue:
      1. The senator with the lower index (i.e., gets to act first) bans the other.
      2. Remove the banned senator's index from their queue.
      3. The senator that performed the ban gets re-added to the end of their queue with an index adjusted to simulate the circular arrangement.
2. Continue until one of the queues is empty, declaring the party with remaining senators as the winner.

## Solution

```python
from collections import deque

def predictPartyVictory(senate: str) -> str:
    radiant = deque()
    dire = deque()

    for i, s in enumerate(senate):
        if s == 'R':
            radiant.append(i)
        else:
            dire.append(i)

    n = len(senate)

    while radiant and dire:
        r = radiant.popleft()
        d = dire.popleft()
        
        if r < d:
            radiant.append(r + n)
        else:
            dire.append(d + n)
    
    return "Radiant" if radiant else "Dire"
```
