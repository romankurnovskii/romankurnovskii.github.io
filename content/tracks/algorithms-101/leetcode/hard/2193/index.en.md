---
title: 2193. Minimum Number of Moves to Make Palindrome
seoTitle: LeetCode 2193. Minimum Number of Moves to Make Palindrome | Python solution and explanation
description: 2193. Minimum Number of Moves to Make Palindrome
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2193
---

[LeetCode problem 2193](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/)

```python
class Solution:
    def minMovesToMakePalindrome(self, s: str) -> int:
        cs = list(s)
        res, n = 0, len(s)
        i, j = 0, n - 1
        while i < j:
            even = False
            for k in range(j, i, -1):
                if cs[i] == cs[k]:
                    even = True
                    while k < j:
                        cs[k], cs[k + 1] = cs[k + 1], cs[k]
                        k += 1
                        res += 1
                    j -= 1
                    break
            if not even:
                res += n // 2 - i
            i += 1
        return res

```
