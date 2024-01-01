---
title: 38. Count and Say
description: LeetCode 38. Count and Say
toc: true
authors: [roman-kurnovskii]
tags: [String]
categories: [Algorithms, Medium]
series:
date: 2022-12-08
featuredImage:
weight: 38
---

[LeetCode problem](https://leetcode.com/problems/count-and-say/)

The **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:

`countAndSay(1) = "1"`
`countAndSay(n)` is the way you would "say" the digit string from `countAndSay(n-1)`, which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the **minimal** number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string `"3322251"`:
![example](https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg)

Given a positive integer `n`, return the `nth` term of the **count-and-say** sequence.

**Example 1:**

    Input: n = 1
    Output: "1"
    Explanation: This is the base case.

**Example 2:**

    Input: n = 4
    Output: "1211"
    Explanation:
    countAndSay(1) = "1"
    countAndSay(2) = say "1" = one 1 = "11"
    countAndSay(3) = say "11" = two 1's = "21"
    countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

**Idea:**

```python
class Solution:
    def countAndSay(self, n: int) -> str:
        res = '1'
        while n > 1:
            l = len(res)
            new_str = ''
            i = 0
            while i < l:
                count = 1
                while i < l - 1 and res[i] == res[i+1]:
                    count += 1
                    i += 1
                new_str += str(count) + res[i]
                i += 1
            res = new_str
            n -= 1

        return res
```
