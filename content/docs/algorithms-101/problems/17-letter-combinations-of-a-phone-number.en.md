---
title: 17. Letter Combinations of a Phone Number
description: LeetCode 17. Letter Combinations of a Phone Number
toc: false
authors: [roman-kurnovskii]
tags: ["Hash Table", "String", "Backtracking"]
categories: [Algorithms, Medium]
series:
date: 2022-11-11
featuredImage:
weight: 180
---

[LeetCode problem](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![17](https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png)

**Example 1:**

    Input: digits = "23"
    Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

**Example 2:**

    Input: digits = ""
    Output: []


## First accepted

```python
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        letters = ['', '', 'abc', 'def', 
                      'ghi', 'jkl', 'mno', 
                      'pqrs', 'tuv', 'wxyz']
        
        result = ['']
        
        for d in digits:
            d = int(d)
            tmp = []
            for letter in letters[d]:
                for word in result:
                    word += letter
                    tmp.append(word)
            result = tmp
        
        return result
```
