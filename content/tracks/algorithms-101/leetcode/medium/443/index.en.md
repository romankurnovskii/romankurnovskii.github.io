---
title: 443. String Compression
seoTitle: LeetCode 443. String Compression | Python solution and explanation
description: 443. String Compression
toc: true
tags: [Strings]
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-06
lastmod: 2023-08-06
featuredImage: https://picsum.photos/700/241?grayscale
weight: 443
---

[LeetCode problem](https://leetcode.com/problems/string-compression/)

## Problem Statement

Given a list of characters, `chars`, you are required to compress the list using the following algorithm:

- Start with an empty string, `s`.
- For each group of consecutive repeating characters in `chars`:
  - If the group's length is 1, append the character to `s`.
  - Otherwise, append the character followed by the group's length.

The compressed string `s` should be stored back in the `chars` list. The length of the group that is 10 or longer will be split into multiple characters in `chars`.

After modifying the input list, return the new length of the list.

## Naive Solution

A simple approach would be to iterate over the `chars` list and, for each character, start another loop that counts the number of repeated characters. This would give us both the character and its count. We can then modify the list in place with this information. However, this would involve nested loops leading to a higher time complexity.

## Approach

A more efficient approach would be to use a read and write pointer technique:

1. Initialize two pointers `read` and `write` at the start of the list.
2. While `read` hasn't reached the end of the list:
   - Count how many times the character at the `read` pointer is consecutively repeated.
   - Write the character and its count (if greater than 1) at the `write` pointer location.

## Steps

1. Initialize `read` and `write` pointers to 0.
2. While `read` is less than the length of `chars`:
   1. Store the current character.
   2. Count its consecutive repetitions and move the `read` pointer accordingly.
   3. Write the character at the `write` pointer location.
   4. If the count is greater than 1, write the count's digits individually.
   5. Move the `write` pointer.

## Solution

```python
def compress(self, chars):
    read, write = 0, 0
    
    # Continue while there are characters left to read.
    while read < len(chars):
        
        # Store the current character.
        current_char = chars[read]
        
        count = 0 # for each new character group
        
        # Count consecutive repetitions of the current character.
        while read < len(chars) and chars[read] == current_char:
            read += 1
            count += 1
        
        # Write the character to the current write pointer position.
        chars[write] = current_char
        write += 1
        
        # If the character was repeated more than once, 
        # write the count of repetitions next to it.
        if count > 1:
            for digit in str(count):  # Convert count to its string representation
                chars[write] = digit  # Write each digit of the count
                write += 1
    
    return write
```
