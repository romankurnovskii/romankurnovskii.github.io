---
title: 1541. Minimum Insertions to Balance a Parentheses String
seoTitle: LeetCode 1541. Minimum Insertions to Balance a Parentheses String | Python solution and explanation
description: 1541. Minimum Insertions to Balance a Parentheses String
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 1541
---

[LeetCode problem 1541](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/)

```python
class Solution:
    def minInsertions(self, s: str) -> int:
        res = x = 0
        i, n = 0, len(s)
        while i < n:
            if s[i] == '(':
                # 待匹配的左括号加 1
                x += 1
            else:
                if i < n - 1 and s[i + 1] == ')':
                    # 有连续两个右括号，i 往后移动
                    i += 1
                else:
                    # 只有一个右括号，插入一个
                    res += 1
                if x == 0:
                    # 无待匹配的左括号，插入一个
                    res += 1
                else:
                    # 待匹配的左括号减 1
                    x -= 1
            i += 1
        # 遍历结束，仍有待匹配的左括号，说明右括号不足，插入 x << 1 个
        res += x << 1
        return res

```
