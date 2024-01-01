---
title: 394. Decode String
seoTitle: LeetCode 394. Decode String | Python solution and explanation
description: Understanding and solving the "Decode String" problem.
toc: true
tags: [Algorithms, Medium, Stack]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-10
lastMod: 2023-08-10
featuredImage: https://picsum.photos/700/241?grayscale
weight: 394
---

[LeetCode problem](<https://leetcode.com/problems/decode-string/>)

## Problem Statement

Given an encoded string, the task is to decode it to produce a string. The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times.

## Naive Solution

A naive approach would be to repeatedly look for a pattern in the string where there is a number followed by square brackets. For each such pattern found, replace it with the string inside the square brackets repeated 'k' times. This would work but might not be the most efficient solution, especially for nested brackets.

## Hints & Tips

1. The problem can be approached using a stack data structure.
2. When we encounter a number, we can store it. When we encounter an open bracket, we push what we have onto the stack and reset our current string and count. When we encounter a closing bracket, we can pop from the stack and multiply our current string the required number of times.

## Approach

The ideal approach to solve this problem is using a stack. The reason a stack works perfectly here is that the decoding needs to be done from the inside out whenever we encounter nested brackets.

## Steps

1. Initialize an empty stack.
2. Iterate over each character in the input string.
   1. If the current character is a digit, store it until we get the complete number.
   2. If the current character is an open bracket, push the current string and number to the stack and reset them.
   3. If it's a closing bracket, pop the string and number from the stack and append the current string repeated 'number' times to the popped string. This becomes our new current string.
   4. If it's a letter, simply append it to the current string.
3. Once the iteration is over, the current string contains the decoded string.

## Solution

```python
def decodeString(s: str) -> str:
    stack = []
    curr_str = ''
    curr_num = ''
    
    for char in s:
        if char.isdigit():
            curr_num += char
        elif char == "[":
            stack.append((curr_str, int(curr_num)))
            curr_str = ''
            curr_num = ''
        elif char == "]":
            prev_str, num = stack.pop()
            curr_str = prev_str + num * curr_str
        else:
            curr_str += char

    return curr_str
```
