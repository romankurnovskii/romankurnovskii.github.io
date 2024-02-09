---
title: 17. Letter Combinations of a Phone Number
seoTitle: LeetCode 17. Letter Combinations of a Phone Number | Python solution and explanation
description: 17. Letter Combinations of a Phone Number
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 17
---

[LeetCode problem 17](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

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
