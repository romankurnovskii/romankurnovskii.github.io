---
title: 1249. Minimum Remove to Make Valid Parentheses
seoTitle: LeetCode 1249. Minimum Remove to Make Valid Parentheses | Python solution and explanation
description: 1249. Minimum Remove to Make Valid Parentheses
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1249
---

[LeetCode problem 1249](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)

## Approach

The problem can be solved in two passes using a stack for the first pass and a simple iteration for the second:

1. First Pass (Identify Invalid Parentheses):

- Iterate through the string, and for every character:
  - If it's '(', push its index onto the stack.
  - If it's ')' and the stack is not empty (there is a matching '('), pop from the stack. Otherwise, mark this ')' as invalid.
- After the iteration, any indices remaining in the stack represent unmatched '(' that should be removed.

2. Second Pass (Build the Result String):

- Iterate through the string again, building the result string by including characters that are not marked as invalid.

```python
class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        stack = []                      # Stack to keep track of the indices of '('
        remove_indices = set()          # Set to keep track of indices to remove

        for i, char in enumerate(s):    # First pass to identify invalid parentheses
            if char == '(':
                stack.append(i)
            elif char == ')':
                if stack:
                    stack.pop()
                else:
                    remove_indices.add(i)
                    
        # Add indices of remaining '(' to remove
        remove_indices = remove_indices.union(set(stack))
        
        # Second pass to build the result string
        result = [s[i] for i in range(len(s)) if i not in remove_indices]
        
        return ''.join(result)
```
