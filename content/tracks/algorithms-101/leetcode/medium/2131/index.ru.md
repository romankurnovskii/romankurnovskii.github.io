---
title: 2131. Longest Palindrome by Concatenating Two Letter Words
seoTitle: LeetCode 2131. Longest Palindrome by Concatenating Two Letter Words | Python solution and explanation
description: 2131. Longest Palindrome by Concatenating Two Letter Words
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-01-01
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 2131
---

[LeetCode problem 2131](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/)

```python
class Solution:
    def longestPalindrome(self, words: List[str]) -> int:
        cnt = Counter(words)
        res = x = 0
        for k, v in cnt.items():
            if k[0] == k[1]:
                x += v & 1
                res += v // 2 * 2 * 2
            else:
                res += min(v, cnt[k[::-1]]) * 2
        res += 2 if x else 0
        return res

```
