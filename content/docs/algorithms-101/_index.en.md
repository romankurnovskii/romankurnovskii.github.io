---
title: Algorithms 101
description:
toc: true
authors: [roman-kurnovskii]
tags: []
categories: [Roadmaps, Algorithms]
series:
date: 2022-10-15
featuredImage:
draft: false
weight: 1
---

## Smart / OKR

What is [SMART](https://www.atlassian.com/blog/productivity/how-to-write-smart-goals) and [OKR](https://learn.microsoft.com/en-us/viva/goals/get-to-know-okrs)

### SMART

<span style="font-size:1.2em; color: #427039">S</span>pecific:
- Goal: prepare for contests. Pass 50->75->100% of contest problems in time
  - Improve python skills.
  - Improve understanding of common algorithms and data structures.

<span style="font-size:1.2em; color: #427039">M</span>easurable: *How will we know that change has occurred?*
- solve top 100 questions that cover common algorithms and data structures.

<span style="font-size:1.2em; color: #427039">A</span>chievable:
- participate in [LeetCode contest](https://leetcode.com/contest/), solve 50%+ problems in time.

<span style="font-size:1.2em; color: #427039">R</span>elevant: *Is it possible to achieve this objective?*
- achievable with practice.
- improve skills in solving business problems more efficiently, quickly, understandable.

<span style="font-size:1.2em; color: #427039">T</span>ime-Bound: *When will this objective be accomplished?*
- 1-2 hours a day, 5-6 days a week, ~5 problems a week
- first contest after 20% problems pass.
- 20 weeks from start. 
- Summarize results on 28 Feb 2023

### OKR + roadmap

- pass 20 problems: (4 weeks, 12 Nov 2022)
  - Ability to define algorithm/idea of solving problem.
  - participate in contest, solve minimum 1-2 problems in time.
- next participate in contest/solve contest tasks every week:
  - solve minimum 1-2 problems.
  - fix results, correct next goal keys if I go ahead.
- pass 40 problems: (10 Dec 2022)
  - participate in contest, solve minimum 2 problems in time.
- after 50 problems have a rest one week. (24 Dec 2022)
- pass 70 problems: (28 Jan 2023)
  - solve next 10 medium problems without hints effectively.
- 80-100 problems: (28 Feb 2023)
  - have understanding in which topics I have gaps.
  - emphasize problem solving on these topics in addition to the tasks on the list.
- Sum up results (28 Feb 2023)

## Solving plan

1. open task
2. read
3. first thoughts
4. spend 15 minutes on coding
5. finished or not, read hints
6. spend 10 minutes on fixing if needed
7. read solution, discussions
8. if there is a new algo, read theory the rest of first hour, practice
9. code from scratch with comments/code snippets
10. repeat 7-9 until tests pass

## Prepare environment

- vscode

to observe any change in python use **nodemon** npm package

```sh
npm i -g nodemon
```

run python file:

```sh
nodemon --exec python p.py
```

### Template

```python
from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        return 1


nums = [1,2,3]
target = 5

s = Solution()
res = s.twoSum(nums, target)

print(res)
```

## LeetCode problems list

[leetcode Top 100 Interview Questions](https://leetcode.com/problem-list/top-interview-questions/)

> List of problems cis mutable. Will take first not solved until all first top 100 problems are solved. It can take + ~5-15 problems


1. [x] [1. Two Sum](problems/1-two-sum) - Easy, [Array, Hash Table]
2. [x] [2. Add Two Numbers](problems/2-add-two-numbers) - Medium, [Linked List, Math, Recursion]
3. [x] [3. Longest Substring Without Repeating Characters](problems/3-longest-substring-without-repeating-characters) - Medium, [Hash Table, String, Sliding Window]
4. [x] [13. Roman to Integer](problems/13-roman-to-integer) - Easy, [Hash Table, Math, String]
5. [x] [5. Longest Palindromic Substring](problems/5-longest-palindromic-substring) - Medium, [String, Dynamic Programming]
6. [x] [14. Longest Common Prefix](problems/14-longest-common-prefix) - Easy, [String]
7. [x] [20. Valid Parentheses](problems/20-valid-parentheses) - Easy, [String, Stack]
8. [ ] [7. Reverse Integer](problems/)
9. [ ] [4. Median of Two Sorted Arrays](problems/)
10. [ ] [8. String to Integer (atoi)](problems/)
11. [ ] [10. Regular Expression Matching](problems/)
12. [ ] [11. Container With Most Water](problems/)
13. [ ] [11. Container With Most Water](problems/)
14. [ ] [11. Container With Most Water](problems/)


