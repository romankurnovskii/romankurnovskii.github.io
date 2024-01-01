---
title: 151. Reverse Words in a String
seoTitle: LeetCode 151. Reverse Words in a String | Python solution and explanation
description: 151. Reverse Words in a String
toc: true
tags: []
categories: [Algorithms, Medium, LeetCodeTop75]
date: 2023-08-10
lastMod: 2023-08-10
featuredImage: https://picsum.photos/700/241?grayscale
weight: 151
---

[LeetCode problem](https://leetcode.com/problems/reverse-words-in-a-string/)

## Problem Statement

The problem is about reversing the order of words in a given string `s`. Each word in `s` is defined as a sequence of non-space characters and the words are separated by at least one space. You are expected to return a string with the words in reversed order and separated by a single space. It is important to note that `s` may contain leading or trailing spaces or multiple spaces between two words, but the returned string should not contain any extra spaces.

## Naive Solution

A naive solution could be to split the input string into individual words and then reverse the order of these words. However, this would require extra space to store the words and does not take care of multiple, leading, or trailing spaces.

## Hints & Tips

Python's built-in string methods `split` and `join` can be very helpful in this problem. The `split` method can be used to split the string into individual words, and it also takes care of multiple spaces. The `join` method can be used to concatenate the words in reverse order.

## Approach

An efficient approach would be to:

1. Split the string into individual words using the `split` method. This will take care of multiple spaces.
2. Reverse the order of words using slicing.
3. Join the words in reversed order using the `join` method.

## Steps

1. Use the `split` method to split `s` into individual words. This will return a list of words.
2. Reverse the order of words in the list using slicing.
3. Use the `join` method to concatenate the words in reversed order and return the result.

## Python Solution

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()
        words.reverse()
        return ' '.join(words)
```

Or even shorter:

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(s.split()[::-1])
```
