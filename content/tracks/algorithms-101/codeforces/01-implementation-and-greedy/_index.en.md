---
title: "01: Implementation & Greedy"
description: Codeforces contests solutions
toc: true
tags: []
categories: [Algorithms, Codeforces]
series:
date: 2023-02-03
lastmod: 2023-02-09
featuredImage:
draft: false
weight: 40
---

## Implementation

Implementation problems are typically straightforward and involve writing code to solve a problem based on the given description. There are no specific techniques for implementation problems, as they can vary widely. 

However, the following tips can help you tackle these problems:

1. Read the problem statement carefully and make sure you understand the requirements.
1. Break the problem down into smaller tasks and solve each task step by step.
1. Write clear, modular code to make debugging easier.
1. Test your solution with the given examples and edge cases.

## Greedy Algorithms

Greedy algorithms involve making the best choice at each step to find the optimal solution. They are called "greedy" because they always choose the best option available without considering the overall problem. The key to solving greedy problems is to **identify the optimal choice at each step**.

## Example 1

**Problem:** You have a list of tasks, each with a deadline and a reward. You can only complete one task per day, and you must finish the task before its deadline. Find the maximum total reward you can earn.

**Solution:** At each step, choose the task with the highest reward that you can complete before its deadline. This is the greedy choice.

Let's say we have the following tasks with deadlines and rewards:

```
Task A: Deadline 3 days, Reward 50
Task B: Deadline 2 days, Reward 40
Task C: Deadline 1 day, Reward 30
```

A greedy algorithm would work as follows:

1. On day 1, choose the task with the highest reward that you can complete before its deadline. In this case, it's Task C with a reward of 30.
1. On day 2, choose the task with the highest reward that you can complete before its deadline. In this case, it's Task B with a reward of 40.
1. On day 3, choose the task with the highest reward that you can complete before its deadline. In this case, it's Task A with a reward of 50.
So the maximum total reward is 30 + 40 + 50 = 120.

## Example 2

**Problem:** You are given a set of coins with different denominations and an amount you need to pay. Find the minimum number of coins needed to make the given amount, using the available denominations. You have an unlimited number of coins for each denomination.

```
Denominations: {1, 5, 10, 20, 50}
Amount: 67
```

**Solution:** A greedy algorithm would choose the largest coin denomination that is less than or equal to the remaining amount at each step.

1. Start with the remaining amount equal to 67. Choose the largest coin that is less than or equal to 67 (50). Remaining amount: 17.
1. Choose the largest coin that is less than or equal to 17 (10). Remaining amount: 7.
1. Choose the largest coin that is less than or equal to 7 (5). Remaining amount: 2.
1. Choose the largest coin that is less than or equal to 2 (1). Remaining amount: 1.
1. Choose the largest coin that is less than or equal to 1 (1). Remaining amount: 0.
1. The minimum number of coins needed is 5 (50 + 10 + 5 + 1 + 1).

## Tips

Tips for solving greedy problems

- Understand the problem and identify the greedy choice at each step.
- Prove that the greedy choice leads to the optimal solution, or at least a good enough solution.
- Implement the algorithm and test it with the given examples and edge cases.

## Problemset

1. 1809A - Garland (implementation, 800)
2. 1807A - Plus or Minus (implementation, 800)
3. 1807B - Grab the Candies (greedy, 800)
4. 1807C - Find and Replace (greedy, implementation, strings, 800)
5. 1798A - Showstopper (greedy, implementation, sortings, 800)
6. 1799A - Recent Actions (data structures, greedy, implementation, math, 800)
7. 1788A - One and Two (brute force, implementation, math, 800)
8. 1778A - Flip Flop Sum (greedy, implementation, 800)
9. 1772A - A+B? (implementation, 800)
10. 1796B - Asterisk-Minor Template (implementation, strings, 1000)