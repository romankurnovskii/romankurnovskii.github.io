---
title: 2390. Removing Stars From a String
seoTitle: LeetCode 2390. Removing Stars From a String | Python solution and explanation
description: A step-by-step guide to solving the "Removing Stars From a String" problem on LeetCode.
toc: true
tags: [String, Medium]
categories: [Algorithms, Medium, LeetCode]
date: 2023-08-24
lastmod: 2023-08-24
featuredImage: https://picsum.photos/700/241?grayscale
weight: 2390
---

[LeetCode problem](<https://leetcode.com/problems/removing-stars-from-a-string/>)

## Problem Statement

You are provided with a string `s` that contains asterisks or stars (*). Your task is to transform this string. In each operation, you'll select a star and remove the character immediately to its left and the star itself. Continue this process until there are no stars left in the string.

The challenge guarantees that the input string can always be transformed as per the given operation, and the result will always be unique.

## Naive Solution

A direct approach would be to loop through the string, and every time you find a star, remove it along with the character to its left. Continue this process till no more stars exist. However, this can be optimized.

## Hints & Tips

In Python, strings are immutable. This means, whenever you make a change to a string, a new string is created in memory. To circumvent this inefficiency, we can utilize a data structure like a list (or a stack in this case), which allows for mutable operations.

## Approach

A simplified, yet efficient approach is to use a stack:

1. Use the stack to store the characters of the string.
2. As you iterate through the string, push characters onto the stack. If you come across a star, pop the top character from the stack (if the stack isn't empty).
3. The remaining characters in the stack after this operation will form the transformed string.

## Steps

1. Initialize an empty stack, named `stack`.
2. Traverse the string from the beginning.
3. For each character:
   - If the character is a star, pop the top character from the stack (provided the stack isn't empty).
   - Otherwise, push the character onto the stack.
4. Convert the stack to a string to get the result.

## Solution

```python
def removeStars(s: str) -> str:
    stack = []
    for c in s:
        if c == '*':
            stack.pop()
        else:
            stack.append(c)
        
    return ''.join(stack)
```
