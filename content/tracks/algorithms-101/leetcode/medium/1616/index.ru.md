---
title: 1616. Split Two Strings to Make Palindrome
seoTitle: LeetCode 1616. Split Two Strings to Make Palindrome | Python solution and explanation
description: 1616. Split Two Strings to Make Palindrome
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1616
---

[LeetCode problem 1616](https://leetcode.com/problems/split-two-strings-to-make-palindrome/)

```python
class Solution:
    def checkPalindromeFormation(self, a: str, b: str) -> bool:
        def check1(a: str, b: str) -> bool:
            i, j = 0, len(b) - 1
            while i < j and a[i] == b[j]:
                i, j = i + 1, j - 1
            return i >= j or check2(a, i, j) or check2(b, i, j)

        def check2(a: str, i: int, j: int) -> bool:
            return a[i : j + 1] == a[i : j + 1][::-1]

        return check1(a, b) or check1(b, a)

```
