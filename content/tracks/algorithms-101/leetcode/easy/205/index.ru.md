---
title: 205. Isomorphic Strings
seoTitle: LeetCode 205. Isomorphic Strings | Python solution and explanation
description: 205. Isomorphic Strings
toc: true
tags: []
categories: [Algorithms, LeetCode]
date: 2024-04-02
lastMod: 2024-01-01
featuredImage: https://picsum.photos/700/155?grayscale
weight: 205
---

[LeetCode problem 205](https://leetcode.com/problems/isomorphic-strings/)

Use two dictionaries to track the mappings from `s` to `t` and from `t` to `s`. This helps in ensuring no two characters map to the same character.

- **Key Idea**: To verify if two strings are isomorphic, we need to ensure that each character in s maps to a unique character in t, and vice versa. This bi-directional mapping is crucial to maintain the isomorphism property.
- **Data Structures**: Two hash maps (or dictionaries in Python) are ideal for maintaining these mappings efficiently.

## Approach

1. Initial Checks: If the lengths of `s` and `t` are different, they cannot be isomorphic. Return false immediately.
2. Create Two Mappings: Initialize two dictionaries. One for mapping characters from `s` to `t` (`s_to_t`) and another from `t` to `s` (`t_to_s`).
3. Iterate Over Characters:

- For each character pair (`s_char`, `t_char`) in `s` and `t`, check:
  - If `s_char` maps to a different `t_char` in `s_to_t`, or `t_char` maps to a different `s_char` in `t_to_s`, return false.
  - Update `s_to_t[s_char] = t_char` and `t_to_s[t_char] = s_char`.

1. Return True: If the loop completes without returning false, then `s` and `t` are isomorphic.

```python
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        s_to_t, t_to_s = {}, {}
        
        for s_char, t_char in zip(s, t):
            if (s_char in s_to_t and s_to_t[s_char] != t_char) or \
            (t_char in t_to_s and t_to_s[t_char] != s_char):
                return False
            s_to_t[s_char] = t_char
            t_to_s[t_char] = s_char
            
        return True
```
