---
title: 5. Longest Palindromic Substring
description: Leetcode 5. Longest Palindromic Substring
toc: false
authors: [roman-kurnovskii]
tags: [String, "Dynamic Programming"]
categories: [Algorithms]
series:
date: 2022-10-20
featuredImage:
weight: 1050
---

[leetcode problem](https://leetcode.com/problems/longest-palindromic-substring/)

Given a string `s`, return the longest palindromic substring in `s`.

A string is called a palindrome string if the reverse of that string is the same as the original string.

**Example 1:**

    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.

**Example 2:**

    Input: s = "cbbd"
    Output: "bb"


## First accepted

### Hints

> How can we reuse a previously computed palindrome to compute a larger palindrome?

> How can we reuse a previously computed palindrome to compute a larger palindrome?

> Complexity based hint:
If we use brute-force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation.


**Idea:**

![test-case](../assets/5.jpg)

![Leetcode diagram explained](../assets/5-diagram.svg)
**[Link to diagram](https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Leetcode%205#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D17m7pbA_Ym4_Xi8JFBPSyMcr8zYzX_1FH%26export%3Ddownload)**

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def getPalindrome(left, right):
            while(left >= 0 and
                  right < len(s) and
                  s[left] == s[right]):
                left -= 1
                right += 1
                
            return left+1, right-1
            
        pal_left = 0
        pal_right = 0
        len_max = 1
        
        for i in range(len(s)):
            left, right = getPalindrome(i, i)
            pal_len= right - left + 1
            if pal_len > len_max:
                pal_left = left
                pal_right = right
                len_max = pal_len
            
            left, right = getPalindrome(i, i+1)
            pal_len = right - left + 1
            if pal_len > len_max:
                pal_left = left
                pal_right = right
                len_max = pal_len
                
        return s[pal_left:pal_right+1]
```


## Better solution

There is an `O(n)` algorithm called [Manacher's algorithm](https://en.wikipedia.org/wiki/Longest_palindromic_substring#Manacher's_algorithm).

## Resources

- [Manacher's algorithm](https://en.wikipedia.org/wiki/Longest_palindromic_substring#Manacher's_algorithm)
- Ru: [Разбор задачи с интервью. Литкод 5. Longest Palindromic Substring](https://www.youtube.com/watch?v=sp9f7nQHqeQ&t=39s)
- [Errichto:Leetcode problem Longest Palindromic Substring (two solutions)](https://www.youtube.com/watch?v=0CKUjDcUYYA)
