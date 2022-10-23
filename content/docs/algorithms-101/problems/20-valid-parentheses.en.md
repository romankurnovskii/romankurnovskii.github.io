---
title: 20. Valid Parentheses
description:
toc: false
authors: [roman-kurnovskii]
tags: [String, Stack]
categories: [Algorithms]
series:
date: 2022-10-23
featuredImage:
weight: 1070
---

[leetcode problem](https://leetcode.com/problems/valid-parentheses/)

Given a string s containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
1. Open brackets must be closed in the correct order.
1. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

    Input: s = "()[]{}"
    Output: true

**Example 2:**

    Input: s = "()[]{}"
    Output: true

## First accepted

**Idea:**

1. Loop through string
2. If *current* "closes" the last in stack, then remove last from stack
3. Else: add current to stack

```python
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        par_dict = {'(': ')', '{': '}', '[': ']'}
        last_value = None
        for i in s:
            second_value = par_dict.get(last_value, None)
            if i == second_value:
                stack.pop()
                last_value = stack[-1] if stack else None
            else:
                stack.append(i)
                last_value = i
        return not stack
```

## Better solution

```python
class Solution:
    def isValid(self, s: str) -> bool:
        par_dict = {'(': ')', '{': '}', '[': ']'}
        stack = []
        for char in s:
            if char in par_dict:   # If it's an opening bracket, add it to the stack
                stack.append(char)
            elif stack: # If there's something in the stack
                if char == par_dict[stack[-1]]:
                # If it's a closing bracket for the last opened bracket, remove it from the stack.
                    stack.pop()
                else:   # It's not a closing bracket for the last opened bracket. Invalid string.
                    return False
            else:   # Not an opening bracket or closing bracket. Invalid string.
                return False

        return stack == []
```
