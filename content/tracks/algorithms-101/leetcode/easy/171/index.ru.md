---
title: 171. Excel Sheet Column Number
seoTitle: 171. Excel Sheet Column Number | Python solution and explanation
description: 171. Excel Sheet Column Number
toc: true
authors:
tags:
categories: [Algorithms, Easy]
date: 2023-06-15
lastMod: 2023-06-15
featuredImage: https://picsum.photos/700/241?grayscale
series: [LeetCode Top Interview Questions]
weight: 171
---


[LeetCode problem](https://leetcode.com/problems/excel-sheet-column-number/)

The column titles in an Excel sheet are designed similar to a base-26 number system. The columns start from 'A' (which is 1) to 'Z' (which is 26), then after 'Z', the column titles go to 'AA' (which is 27), 'AB' (28), and so on.

This problem is essentially asking us to convert a base-26 number (represented by uppercase English letters) to a decimal number.

That means that for each "new" index in `columnTitle` we already pass alphabet.
Example:

- If `columnTitle` length is 1 => result in range of (1-26)
- If `columnTitle` length is 2 ('AB') => first index passed alphabet (26), next B equals 2 in alphabet. Hence 1 * 26 + index(B)

## Solution 1

```python
import string
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        alphabet = list(string.ascii_uppercase)

        s = 0
        for letter in columnTitle:
            letter_idx = alphabet.index(letter) + 1
            s = s*26 + letter_idx

        return s
```

## Optimized Solution

Using `ord` function that returns index of letter.

```sh
>>> ord('A')
65
```

Because here index is 65, will create a number to convert it to the correct one: `result_number - ord('A) + 1`

Example:

```sh
idxA = ord('A') - ord('A') + 1
idxB = ord('B') - ord('A') + 1
```

```python
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        s = 0
        correct_sum = - ord('A') + 1
        for letter in columnTitle:
            s = s * 26 + ord(letter) + correct_sum
        return s
```
