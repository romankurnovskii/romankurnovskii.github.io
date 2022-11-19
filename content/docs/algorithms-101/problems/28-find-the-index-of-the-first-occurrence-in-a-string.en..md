---
title: 28. Find the Index of the First Occurrence in a String
description: LeetCode 28. Find the Index of the First Occurrence in a String
toc: false
authors: [roman-kurnovskii]
tags: [String, "Two pointers", "String Matching"]
categories: [Algorithms]
series:
date: 2022-11-19
featuredImage:
weight: 210
---

[LeetCode problem](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.

**Example 1:**

  Input: haystack = "sadbutsad", needle = "sad"
  Output: 0
  Explanation: "sad" occurs at index 0 and 6.
  The first occurrence is at index 0, so we return 0.

**Example 2:**

  Input: haystack = "leetcode", needle = "leeto"
  Output: -1
  Explanation: "leeto" did not occur in "leetcode", so we return -1.

## Code

```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
      return haystack.find(needle)
```

```python
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        start = 0
        end = len(needle)

        while end <= len(haystack):
            if haystack[start:end] == needle:
                return start
            start += 1
            end += 1

        return -1
```
