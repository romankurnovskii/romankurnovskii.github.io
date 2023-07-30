---
title: 345. Reverse Vowels of a String
seoTitle: LeetCode 345. Reverse Vowels of a String | Python solution and explanation
description: 345. Reverse Vowels of a String
toc: true
tags: []
categories: [Algorithms, Easy, LeetCodeTop75]
date: 2023-08-05
lastmod: 2023-08-05
featuredImage: https://picsum.photos/700/241?grayscale
weight: 345
---

[LeetCode problem](https://leetcode.com/problems/reverse-vowels-of-a-string/)

## Problem Statement

Given a string `s`, the task is to reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

## Naive Solution

The naive approach to solve this problem would be to:

1. Initialize an empty string result.
2. Traverse the given string `s` from the start to the end.
3. If the current character is a vowel, find the next vowel in the string starting from the end, add it to result, and remove it from the string.
4. If the current character is not a vowel, simply add it to result.

## Hints & Tips

But this solution is inefficient as it requires traversing the string multiple times and manipulating it. A more efficient solution would use the two-pointer technique.

## Approach

The efficient approach to solve this problem would be to:

1. Initialize two pointers, one at the start and the other at the end of the string.
2. While the two pointers have not met, check if the characters at the two pointers are vowels.
3. If they are, swap them. If not, move the pointer(s).

## Steps

1. Convert the string to a list of characters because Python strings are immutable.
2. Initialize two pointers: `left` at 0 and `right` at the end of the string.
3. While `left` < `right`:
    1. If the character at `left` is a vowel and the character at `right` is also a vowel, swap them and move both pointers.
    2. If the character at `left` is not a vowel, move the `left` pointer.
    3. If the character at `right` is not a vowel, move the `right` pointer.
4. Join the list of characters back to a string and return it.

## Python Solution

```python
class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = 'aeiouAEIOU'
        s = list(s)
        left, right = 0, len(s) - 1

        while left < right:
            if s[left] not in vowels:
                left += 1
            elif s[right] not in vowels:
                right -= 1
            else:
                s[left], s[right] = s[right], s[left]
                left, right = left + 1, right - 1

        return ''.join(s)
```

**Second solution:**

```python
class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ['a', 'A', 'e','E', 'i','I', 'o','O', 'u','U']

        vowels_order = []
        for i, x in enumerate(s):
            if x in vowels:
                vowels_order.append(x)

        res = ''
        for x in s:
            if x in vowels:
                res += vowels_order.pop()
            else:
                res += x

        return res
```
