---
title: 131. Palindrome Partitioning
seoTitle: 131. Palindrome Partitioning | Python soulution and explanation
description: 131. Palindrome Partitioning
toc: true
authors:
tags: 
categories: [Algorithms, Medium]
series:
date: 2023-04-23
lastMod: 2023-04-29
featuredImage:
weight: 131
---

[LeetCode problem](https://leetcode.com/problems/palindrome-partitioning/description/)

**Naive Solution:**

A naive solution would be to generate all possible partitions of the given string and then check if every substring in each partition is a palindrome.

However, this approach would be inefficient, as there would be an exponential number of partitions to check.

**Approach:**

Using Backtracking.

**Logic:**

1. Define a helper function, `is_palindrome`, to check if a given substring is a palindrome.
2. Define the `backtrack` function to find all palindrome partitions recursively. This function will take the **current position** in the string and the **current partition** as input arguments.
   1. **current_position**: An integer representing the position in the string that we are currently examining. We start at position 0 (the first character) and move towards the end of the string
   2. **current_partition**: A list of strings representing a partition of the string with palindromes up to the current position. We start with an empty list and build it up as we find valid palindrome substrings.
3. In the `backtrack` function, if the current position is at the end of the string, add the current partition to the result list, which stores all valid palindrome partitions found so far.
4. Iterate through the string from the current position to the end.
   1. For each character, extract the substring from the current position to the current character and check if this substring is a palindrome using the `is_palindrome` function.
5. If the substring is a palindrome, add it to the current partition and call the `backtrack` function recursively with the next position.
6. After the `backtrack` function call, remove the last substring from the current partition. This is the backtracking step, which allows the function to explore other possible palindrome substrings starting from the current position.
7. Call the `backtrack` function with the initial values (`current_position = 0` and `current_partition = []`) and return the result list.

The `backtrack` function works by iterating through the string from the current position to the end, checking if the substring from the current position to the current character is a palindrome.

If it finds a palindrome, it adds this substring to the `current_partition` and calls itself recursively with the next position.

This process continues until we reach the end of the string, at which point we have found a valid partition, and we add the `current_partition` to the result list.

After the recursive call, the function backtracks by removing the last substring from the `current_partition`. This step allows the function to explore other possible palindrome substrings starting from the current position.

In summary, the `backtrack` function is a recursive helper function that helps us explore all possible palindrome partitions by iterating through the string, checking for palindromes, and calling itself recursively with updated input arguments.

```python
class Solution:
    def partition(self, s):
        def is_palindrome(substr):
            return substr == substr[::-1]

        result = []

        def backtrack(start, current_partition):
            if start == len(s):
                result.append(current_partition[:])
                return

            for end in range(start + 1, len(s) + 1):
                substr = s[start:end]
                if is_palindrome(substr):
                    current_partition.append(substr)
                    backtrack(end, current_partition)
                    current_partition.pop()

        backtrack(0, [])
        return result
```

{{< video src="../../assets/131.mp4" title="Problem 131: Palindrome Partitioning" >}}
