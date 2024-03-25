---
title: 621. Task Scheduler
seoTitle: LeetCode 621. Task Scheduler | Python Solution
description: LeetCode 621. Task Scheduler. Python Solution
toc: true
tags: [Queue, Medium]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-09-01
lastMod: 2023-09-01
featuredImage: https://picsum.photos/700/241?grayscale
weight: 649
---

[LeetCode problem 621](<https://leetcode.com/problems//task-scheduler/>)

# Idea

Think about how you can arrange the tasks with the highest frequency to minimize the idle times.

The key to solving this problem is to focus on how to efficiently arrange tasks with the highest frequency. We can calculate the frequency of each task and start scheduling the most frequent tasks first, inserting idle slots if needed. The maximum number of idle slots is determined by the frequency of the most frequent task.

Approach

## Approach

1. Count Frequencies: Calculate the frequency of each task.
1. Max Frequency Task: Identify the task with the maximum frequency. This task will dictate the minimum time required to complete all tasks considering the cooling period.
1. Calculate Idle Slots: Calculate the number of idle slots needed by subtracting the number of tasks from the maximum slots needed.
1. Reduce Idle Slots: Iterate over the frequencies of tasks to reduce the number of idle slots by placing other tasks in these slots.
1. Calculate Total Time: The total time required is the sum of all tasks and any remaining idle slots.

## Solution

```python
from collections import Counter

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        task_counts = Counter(tasks)
        max_freq = max(task_counts.values())
        max_freq_tasks = sum(freq == max_freq for freq in task_counts.values())
        
        part_count = max_freq - 1
        part_length = n - (max_freq_tasks - 1)
        empty_slots = part_count * part_length
        available_tasks = len(tasks) - max_freq * max_freq_tasks
        idles = max(0, empty_slots - available_tasks)
        
        return len(tasks) + idles
```
