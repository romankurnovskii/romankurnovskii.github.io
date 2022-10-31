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
weight: 150
spentTime: 200min
---

[LeetCode problem](https://leetcode.com/problems/longest-palindromic-substring/)

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

We start at `index = 0` and iterate through all values until `n`. At each index we call the function `getPalindrome` that will check the values to the left and right of the provided indices. It will continue to do so until the longest palindrome within the given range is found.

![test-case](../assets/5.jpg)

![Leetcode diagram explained](../assets/5-diagram.svg)
**[Link to diagram](https://app.diagrams.net/#G17m7pbA_Ym4_Xi8JFBPSyMcr8zYzX_1FH)**

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
- [Errichto:Leetcode problem Longest Palindromic Substring (two solutions)](https://www.youtube.com/watch?v=0CKUjDcUYYA)
- https://redquark.org/leetcode/0005-longest-palindromic-substring/

**RU**
- [Разбор задачи с интервью. Литкод 5. Longest Palindromic Substring](https://www.youtube.com/watch?v=sp9f7nQHqeQ&t=39s)
- [Алгоритмика: Алгоритм Манакера](https://ru.algorithmica.org/cs/string-searching/manacher/)
- [Википедия:Алгоритм Манакера](https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9C%D0%B0%D0%BD%D0%B0%D0%BA%D0%B5%D1%80%D0%B0#:~:text=%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%20%D0%9C%D0%B0%D0%BD%D0%B0%D0%BA%D0%B5%D1%80%D0%B0%20(%D0%B0%D0%BD%D0%B3%D0%BB.%20Manacher's%20algorithm),%D1%80%D0%B5%D1%88%D0%B0%D1%82%D1%8C%20%D0%B8%20%D0%B1%D0%BE%D0%BB%D0%B5%D0%B5%20%D0%BE%D0%B1%D1%89%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8)
