---
title: 134. Gas Station
seoTitle: LeetCode 131. Gas Station | Python solution and explanation
description: LeetCode 131. Gas Station
toc: true
authors:
tags: ["LeetCode Top Interview", greedy]
categories: [Algorithms, Medium]
series:
date: 2023-05-04
lastMod: 2023-05-04
featuredImage:
weight: 134
---

[LeetCode problem](https://leetcode.com/problems/gas-station/)

**Naive Solution:**

A naive solution would be to try starting from each gas station and check if you can complete the circuit. For each gas station, calculate the remaining gas in the tank after traveling to the next station.

If the gas is not enough to travel to the next station, stop and try starting from the next gas station.

**Approach:**

In this problem, we can use a [greedy algorithm](/en/tags/greedy/)

We can keep track of the total gas and total cost while iterating through the gas stations.

If the total gas is greater than or equal to the total cost, it is guaranteed that there exists a solution.

**Solution:**

```python
class Solution:
    def canCompleteCircuit(self, gas, cost) -> int:
        total_gas = 0
        total_cost = 0
        star_idx = 0
        current_gas = 0
        
        for i in range(len(gas)):
            total_gas += gas[i]
            total_cost += cost[i]
            current_gas += gas[i] - cost[i]
            
            if current_gas < 0:
                star_idx = i + 1
                current_gas = 0
        
        return star_idx if total_gas >= total_cost else -1
```

{{< video src="../../assets/134.mp4" title="LeetCode Problem 134 Video Solution" >}}
